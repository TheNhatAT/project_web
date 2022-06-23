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
    name =( name !== undefined ? name: null);
    email = (email !== undefined ? email: null);
    address = (address !== undefined ? address: null);
    role = (role !== undefined ? role: null);
    phone_number = (phone_number !== undefined ? phone_number: null);
    avatar = (avatar !== undefined ? avatar: null);
    status = (status !== undefined ? status: null);
    console.log(name, email, address, role, phone_number, auth_token, avatar, status)
    let [users, fields]  = await conn.execute('SELECT * FROM `users` WHERE `id` = ?',
        [id]);
    if (users.length === 0) {
        throw new Error(`User with ${id} is not exist!`);
    }
    let [updatedUser] = await conn.execute('UPDATE `users` SET name = ?, email = ?, address = ?, role = ?, phone_number = ?, auth_token = ?, avatar = ?, status = ?'
        , [name, email, address, role, phone_number, auth_token, avatar, status]);
    return updatedUser;
}
exports.getAllBoardingRoom = async (pathname, query, body) =>{
    
    let conn = await connect();
    let rows = await conn.execute(`SELECT * from boarding_rooms ORDER BY created_at DESC LIMIT 10`)
    console.log(rows)
    if(!rows){
         throw Error('Can not get all boarding room')
    }
    return {'data':rows}    
}

exports.findARoomate = async (pathname, query, body) =>{
    let conn = await connect();
    let rows = await conn.execute(`SELECT * from boarding_rooms where name like '%ở ghép%'`)
    if(!rows){
        throw Error('Can not find a roomate');
    }
    return {'data': rows}
}
exports.findByAddr = async (pathname, query, body) => {
    let conn = await connect();
    let rows = await conn.execute(`SELECT * from boarding_rooms where address like '${query['address']}%' `)
    if(!rows){
        throw Error('Can not find by address');
    }
    return {'data':rows}
}
exports.filter = async (pathname, query, body) => {
    let conn = await connect();let rows;
    if(!('minimal_room_price' in query)){
        if('address' in query && 'minimal_area' in query && 'category' in query){
            rows = await conn.execute(`SELECT * from boarding_rooms 
                                        where address like '${query['address']}%' 
                                            and area >= ${query['minimal_area']} 
                                            and area <= ${query['maximal_area']} 
                                            and category like '${query['category']}' `)
            if(!rows){
                throw Error('Error')
            }
        }
        else if('address' in query && 'minimal_area' in query && !('category' in query) ){
            rows = await conn.execute(`SELECT * from boarding_rooms 
                                        where address like '${query['address']}%' 
                                            and area >= ${query['minimal_area']} 
                                            and area <= ${query['maximal_area']} `)
            if(!rows){
                throw Error('Error')
            }

        }
        else if('address' in query && !('minimal_area' in query) && !('category' in query) ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where address like '${query['address']}%'`)
            if(!rows){
                throw Error('Error')
            }

        }
        else if(!('address' in query) && 'minimal_area' in query && 'category' in query ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where area >= ${query['minimal_area']} 
                                        and area <= ${query['maximal_area']} 
                                        and category like '${query['category']}'`)
        if(!rows){
            throw Error('Error')
        }
        }
        else if(!('address' in query) && !('minimal_area' in query) && 'category' in query ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where category like '${query['category']}'`)
            if(!rows){
                throw Error('Error')
            }
        }
        else if(!('address' in query) && 'minimal_area' in query && !('category' in query) ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where area >= ${query['minimal_area']} and area <= ${query['maximal_area']}`)
            if(!rows){
                throw Error('Error')
            }
        }
        else if('address' in query && !('minimal_area' in query) && 'category' in query ) {
            rows = await conn.execute(`SELECT * from boarding_rooms where address like '${query['address']}%' and category like '${query['category']}'`)
            if(!rows){
                throw Error('Error')
            }
        }
        else if(!('address' in query) && !('minimal_area' in query) && !('category' in query) ) {
            rows = await conn.execute(`SELECT * from boarding_rooms 
                                        where room_price >= ${query['minimal_room_price']} 
                                            and room_price <= ${query['maximal_room_price']}`)
            if(!rows){
                throw Error('Error')
            }
        }
    }
else{
    if('address' in query && 'minimal_area' in query && 'category' in query){
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                     where address like '${query['address']}%' 
                                        and area >= ${query['minimal_area']} 
                                        and area <= ${query['maximal_area']} 
                                        and category like '${query['category']}'
                                        and room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if(!('address' in query) && !('minimal_area' in query) && !('category' in query) ) {
        rows = await conn.execute(`SELECT * from boarding_rooms
                                     where room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if('address' in query && 'minimal_area' in query && !('category' in query) ){
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                     where address like '${query['address']}%' 
                                        and area >= ${query['minimal_area']} 
                                        and area <= ${query['maximal_area']} 
                                        and room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if('address' in query && !('minimal_area' in query) && !('category' in query) ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where address like '${query['address']}%'
                                        and room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
                                                        }
    else if(!('address' in query) && 'minimal_area' in query && 'category' in query ) {
    rows = await conn.execute(`SELECT * from boarding_rooms 
                                where area >= ${query['minimal_area']} 
                                    and area <= ${query['maximal_area']} 
                                    and category like '${query['category']}'
                                    and room_price >= ${query['minimal_room_price']} 
                                    and room_price <= ${query['maximal_room_price']}`)
    if(!rows){
        throw Error('Error')
    }
    }
    else if(!('address' in query) && !('minimal_area' in query) && 'category' in query ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where category like '${query['category']}'
                                        and room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
                                        
    }
    else if(!('address' in query) && 'minimal_area' in query && !('category' in query) ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where area >= ${query['minimal_area']}
                                        and area <= ${query['maximal_area']}
                                        and room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
    }
    else if('address' in query && !('minimal_area' in query) && 'category' in query ) {
        rows = await conn.execute(`SELECT * from boarding_rooms 
                                    where address like '${query['address']}%' 
                                        and category like '${query['category']}'
                                        and room_price >= ${query['minimal_room_price']} 
                                        and room_price <= ${query['maximal_room_price']}`)
        if(!rows){
            throw Error('Error')
        }
    }
}
    return {'data': rows}
}
exports.pageFragment = async (pathname, query, body) =>{
    let conn = await connect()
    let page = (query['page'] - 1)*10;
    let rows = await conn.execute(`SELECT * from boarding_rooms LIMIT ${page}, 10`)
    if(!rows){
        throw Error('Error')
    }
    return {'data': rows}
    
}