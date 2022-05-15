const mysql = require('mysql');
require('dotenv').config()
let db_config = {
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : process.env.DB_PASS || 'root',
    database : process.env.DB_NAME || 'project_web'
};
let connection;

function handleDisconnect() {
    console.log(db_config)
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });

    console.log(`Connect to db ${process.env.DB_USER} successfully!!!`);
}

handleDisconnect();

//Function exports
module.exports = connection;
