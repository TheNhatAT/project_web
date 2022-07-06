const { connect } = require('../helper/database');
const bcrypt = require("bcrypt");

let conn = connect();
exports.createOne = async (pathname, query, body) => {
    const {name, email, password, address, role, phone_number} = body;

    console.log('body: ', body)
    let [check_users, fields]  = await conn.execute('SELECT * FROM `users` WHERE `email` = ?',
        [email])
    console.log('check_user: ', check_users);
    if (check_users.length !== 0) {
        throw new Error('Email have already registered!')
    }

    const hash_password = bcrypt.hashSync(password, 10);

    let [user] = await conn.execute('INSERT INTO `users` (name, email, password, address, role, phone_number) VALUES (?, ?, ?, ?, ?, ?) ',
        [name, email, hash_password, address, role, phone_number]);

    [user] = await conn.execute('SELECT * FROM `users` WHERE `id` = ?',
        [user.insertId]);
    return user;
}

exports.getOneByEmail = async (email) => {
    let [check_users, fields]  = await conn.execute('SELECT * FROM `users` WHERE `email` = ?',
        [email])
    if (check_users.length === 0) {
        throw new Error(`User with ${email} doesn't exist!`);
    }
    return check_users[0];
}

exports.getOneById = async (id) => {
    let [users, fields]  = await conn.execute('SELECT * FROM `users` WHERE `id` = ?',
        [id])
    if (users.length === 0) {
        throw new Error(`User with id = ${id} doesn't exist!`);
    }
    return users[0];
}

exports.updateOne = async (id, data) => {
    let {name, email, address, role, phone_number, auth_token, avatar, status} = data;

    let [users, fields]  = await conn.execute('SELECT * FROM `users` WHERE `id` = ?',
        [id]);

    if (users.length === 0) {
        throw new Error(`User with ${id} is not exist!`);
    }
    name =( name !== undefined ? name: users[0].name);
    email = (email !== undefined ? email: users[0].email);
    address = (address !== undefined ? address: users[0].address);
    role = (role !== undefined ? role: users[0].role);
    phone_number = (phone_number !== undefined ? phone_number: users[0].phone_number);
    auth_token = (auth_token !== undefined ? auth_token: users[0].auth_token);
    avatar = (avatar !== undefined ? avatar: users[0].avatar);
    status = (status !== undefined ? status: users[0].status);
    console.log(name, email, address, role, phone_number, auth_token, avatar, status)

    let [updatedUser] = await conn.execute('UPDATE `users` SET name = ?, email = ?, address = ?, role = ?, phone_number = ?, auth_token = ?, avatar = ?, status = ?'
        , [name, email, address, role, phone_number, auth_token, avatar, status]);
    return updatedUser;
}
exports.getAllBoardingRoom = async (pathname, query, body) =>{
    
    let rows = await conn.execute(`SELECT * from boarding_rooms ORDER BY created_at DESC LIMIT 10`)
    console.log(rows[0])
    if(!rows){
         throw Error('Can not get all boarding room')
    }
    return {'data':rows[0]}    
}

exports.findARoomate = async (pathname, query, body) =>{
    let rows = await conn.execute(`SELECT * from boarding_rooms where name like "%ở ghép%"`)
    if(!rows){
        throw Error('Can not find a roomate');
    }
    return {'data':rows[0]}
}
exports.findByAddr = async (pathname, query, body) => {
    console.log(query.get('addres'))
    let rows = await conn.execute(`SELECT * from boarding_rooms where address like '%${query.get('address')}%' `)
    if(!rows){
        throw Error('Can not find by address');
    }

    return {'data':rows[0]}
}
exports.filter = async (pathname, query, body) => {
    let rows;
    if(!(query.get('minimal_room_price') != null)){
        console.log(query.get('minimal_room_price'))
        if(query.get('address') != null && query.get('minimal_area') != null && query.get('category') != null){
            rows = await conn.execute(`SELECT * from boarding_rooms 
                                        where address like '${query.get('address')}%' 
                                            and area >= ${query.get('minimal_area')} 
                                            and area <= ${query.get('maximal_area')} 
                                            and category like '${query.get('category')}' `)
            if(!rows){
                throw Error('Error')
            }
        }
        else if(query.get('address') != null && query.get('minimal_area') != null && !(query.get('category') != null) ){
            rows = await conn.execute(`SELECT * from boarding_rooms 
                                        where address like '${query.get('address')}%' 
                                            and area >= ${query.get('minimal_area')} 
                                            and area <= ${query.get('maximal_area')} `)
            if(!rows){
                throw Error('Error')
            }

        }
        else if(query.get('address') != null && !(query.get('minimal_area') != null) && !(query.get('category') != null) ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where address like '${query.get('address')}%'`)
            if(!rows){
                throw Error('Error')
            }

        }
        else if(!(query.get('address') != null) && query.get('minimal_area') != null && query.get('category') != null ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where area >= ${query.get('minimal_area')} 
                                        and area <= ${query.get('maximal_area')} 
                                        and category like '${query.get('category')}'`)
        if(!rows){
            throw Error('Error')
        }
        }
        else if(!(query.get('address') != null) && !(query.get('minimal_area') != null) && query.get('category') != null ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where category like '${query.get('category')}'`)
            if(!rows){
                throw Error('Error')
            }
        }
        else if(!(query.get('address') != null) && query.get('minimal_area') != null && !(query.get('category') != null) ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where area >= ${query.get('minimal_area')} and area <= ${query.get('maximal_area')}`)
            if(!rows){
                throw Error('Error')
            }
        }
        else if(query.get('address') != null && !(query.get('minimal_area') != null) && query.get('category') != null ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where address like '${query.get('address')}%' and category like '${query.get('category')}'`)
            if(!rows){
                throw Error('Error')
            }
        }
        else if(!(query.get('address') != null) && !(query.get('minimal_area') != null) && !(query.get('category') != null) ) {
            rows = await conn.execute(`SELECT * from boarding_rooms 
                                        where room_price >= ${query.get('minimal_room_price')} 
                                            and room_price <= ${query.get('maximal_room_price')}`)
            if(!rows){
                throw Error('Error')
            }
        }
    }
else{
    if(query.get('address') != null && query.get('minimal_area') != null && query.get('category') != null){
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                     where address like '${query.get('address')}%' 
                                        and area >= ${query.get('minimal_area')} 
                                        and area <= ${query.get('maximal_area')} 
                                        and category like '${query.get('category')}'
                                        and room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if(!(query.get('address') != null) && !(query.get('minimal_area') != null) && !(query.get('category') != null) ) {
        rows = await conn.execute(`SELECT * from boarding_rooms
                                     where room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if(query.get('address') != null && query.get('minimal_area') != null && !(query.get('category') != null) ){
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                     where address like '${query.get('address')}%' 
                                        and area >= ${query.get('minimal_area')} 
                                        and area <= ${query.get('maximal_area')} 
                                        and room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if(query.get('address') != null && !(query.get('minimal_area') != null) && !(query.get('category') != null) ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where address like '${query.get('address')}%'
                                        and room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
                                                        }
    else if(!(query.get('address') != null) && query.get('minimal_area') != null && query.get('category') != null ) {
    rows = await conn.execute(`SELECT * from boarding_rooms 
                                where area >= ${query.get('minimal_area')} 
                                    and area <= ${query.get('maximal_area')} 
                                    and category like '${query.get('category')}'
                                    and room_price >= ${query.get('minimal_room_price')} 
                                    and room_price <= ${query.get('maximal_room_price')}`)
    if(!rows){
        throw Error('Error')
    }
    }
    else if(!(query.get('address') != null) && !(query.get('minimal_area') != null) && query.get('category') != null ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where category like '${query.get('category')}'
                                        and room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
                                        
    }
    else if(!(query.get('address') != null) && query.get('minimal_area') != null && !(query.get('category') != null) ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where area >= ${query.get('minimal_area')}
                                        and area <= ${query.get('maximal_area')}
                                        and room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if(query.get('address') != null && !(query.get('minimal_area') != null) && query.get('category') != null ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where address like '${query.get('address')}%' 
                                        and category like '${query.get('category')}'
                                        and room_price >= ${query.get('minimal_room_price')} 
                                        and room_price <= ${query.get('maximal_room_price')}`)
        if(!rows){
            throw Error('Error')
        }
    }
}
    return {'data': rows[0]}
}

exports.pageFragment = async (pathname, query, body) =>{
    let page = (query.get('page') - 1)*10;
    console.log(query.get('page'))
    let rows

    if(page==1) {
        rows = await conn.execute(`SELECT * from boarding_rooms LIMIT 10`)
    }
    else{
        rows = await conn.execute(`SELECT * from boarding_rooms LIMIT ${page}, 10`)
    }

    if(!rows){
        throw Error('Error')
    }
    return {'data': rows[0]}
    
}
