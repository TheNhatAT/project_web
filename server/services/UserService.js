const { connect } = require('../helper/database');
const bcrypt = require("bcrypt");

exports.createOne = async (pathname, query, body) => {
    let conn = await connect();
    const {name, email, password, address, role, phone_number} = body;

    console.log('body: ', body)
    let check_user = await conn.execute('SELECT * FROM `users` WHERE `email` = ?',
        [email])
    console.log('check_user: ', check_user);
    if (check_user) {
        throw new Error('Email have already registered!')
    }

    const hash_password = bcrypt.hashSync(password, 10);

    let user = await conn.execute('INSERT INTO users SET ? ', {
        name: name,
        email: email,
        password: hash_password,
        address: address,
        phone_number: phone_number,
        role: role
    });
    console.log('user: ', user);
    return user;
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