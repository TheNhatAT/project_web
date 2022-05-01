const fs = require("fs");
const mime = require("mime");

const staticServer = function (res, pathname) {
    fs.readFile(__dirname + '/..' + pathname, 'utf8', function (err, data) {
        if (err) {
            return res.end(err.message);
        }
        let mimeType = mime.getType(pathname);
        if (mimeType.startsWith('text/')) {
            mimeType += '; charset=utf-8';
        }
        res.writeHead(200, {
            'Content-Type': mimeType
        });
        res.end(data);
    });
}

module.exports = {
    staticServer
}