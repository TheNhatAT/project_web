let db = require('../helper/database');

// example to insert 1 row into users
// you must insert multiple rows for each table and note the constraints of these tables to
// insert correctly :v
UsersSeed = function() {
    db.query(`INSERT INTO users SET ?`, {
        email: 'nhat@gmail.com',
        password: '123456',
        name: 'nhat',
        auth_token: null,
        address: null,
        phone_number: null,
        role: 1, //define later
        avatar: null,
        status: 1, //define later,
        created_at: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
        updated_at: null
    }, function(error,result) {
        if (error) {
            console.log(`Error ${error}`)
        } else
            console.log(`INSERT success!`)
    });
}
UsersSeed();