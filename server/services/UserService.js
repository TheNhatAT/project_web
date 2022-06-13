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