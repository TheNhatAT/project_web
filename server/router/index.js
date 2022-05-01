const fs = require('fs');
const url = require('url');
const routerList = require("./list");
const {staticServer} = require("../helper/staticServerHandler");

const router = (req, res, obj) => {
    const {pathname, query, params} = obj;

    if (pathname.startsWith('/assets')) {
        return staticServer(res, pathname);
    }

    const routerItem = routerList.isRouter(pathname);
    console.log('DEBUG: routerItem = ', routerItem);
    console.log('DEBUG: pathname = ', pathname);
    if (routerItem) {
        return routerList.list[routerItem](res, pathname, params, req.method);
    }

    // if error
    const errorMes = {
        message: 'Not found'
    }
    res.writeHead(404, { 'Content-Type': 'application/json'}).end(JSON.stringify(errorMes));
}

module.exports = router;