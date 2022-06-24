const router = require("./router")
const http = require('http');
require('dotenv').config()


// switch function for HTTP method
/**
 * Docs: https://nodejs.org/dist/latest-v16.x/docs/api/url.html
 * Format:
 ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
 │                                              href                                              │
 ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
 │ protocol │  │        auth         │          host          │           path            │ hash  │
 │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
 │          │  │                     │    hostname     │ port │ pathname │     search     │       │
 │          │  │                     │                 │      │          ├─┬──────────────┤       │
 │          │  │                     │                 │      │          │ │    query     │       │
 "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
 │          │  │          │          │    hostname     │ port │          │                │       │
 │          │  │          │          ├─────────────────┴──────┤          │                │       │
 │ protocol │  │ username │ password │          host          │          │                │       │
 ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
 │   origin    │                     │         origin         │ pathname │     search     │ hash  │
 ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
 │                                              href                                              │
 └────────────────────────────────────────────────────────────────────────────────────────────────┘
 * */
const handleMethod = (req, res, data, callback) => {
    const url = new URL(`http://localhost:8000${req.url}`);
    const pathname = url.pathname;
    const query = new URLSearchParams(url.search);
    let body;

    switch (req.method) {
        case "GET":
            callback({pathname, query});
            break;
        case "POST":
            data = Buffer.concat(data).toString();
            console.log('req.method: ', req.method)
            console.log('date server: ', data)
            body = JSON.parse(data);
            callback({pathname, body});
            break;
        case "PUT":
            data = Buffer.concat(data).toString();
            console.log('req.method: ', req.method)
            console.log('date server: ', data)
            body = JSON.parse(data);
           callback({pathname, body});
           break;
        case "DELETE":
            callback({pathname})
            break;
        case "OPTIONS":
            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
                'Access-Control-Max-Age': 2592000, // 30 days
                'Access-Control-Allow-Headers': "*"
                /** add other headers as per requirement */
            };
            res.writeHead(204, headers);
            res.end();
            break;
        default:
            console.log(`DEBUG: Error when handle url = ${req.url}`);
            break;
    }
}

const handler = (req, res, callback) => {
    let data = [];
    req.on("error", (err) => {
        return console.log(`DEBUG: Error handler with err = ${err}`);
    }).on("data", (chunk) => {
        data.push(chunk);
    }).on('end', () => {
        handleMethod(req, res, data, callback)
    })
}

const start = () => {
    const server = http.createServer((req, res) => {
        handler(req, res, (obj) => {
            console.log('DEBUG: obj = ', obj)
            router(req, res, obj);
        });
    });
    server.listen(8000, '127.0.0.1', () => {
        console.log('DEBUG: server is running on port 8000');
    });
}

module.exports = {
    start,
};