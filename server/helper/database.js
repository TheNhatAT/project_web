const {createPool, Pool} =  require('mysql2/promise');
require('dotenv').config()
let db_config = {
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : process.env.DB_PASS || '',
    database : process.env.DB_NAME || 'project_web',
    connectionLimit: 10
};
exports.connect = function connect() {

    let globalPool;
    // If the pool was already created, return it instead of creating a new one.
    if(globalPool) {
        return globalPool;
    }

    // If we have gotten this far, the pool doesn't exist, so lets create one.
    globalPool = createPool(db_config);
    console.log('connect db successfully');
    return globalPool;
}