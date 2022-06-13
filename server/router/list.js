const exampleCtrl = require("../controller/example");
const UserController = require("../controller/UserController");

class List {
    '/example' (res) {
        exampleCtrl.example(res);
    }

    // Routes of User
    '/users/register' (res, pathname, query, body) {
        UserController.register(res, pathname, query, body);
    }
}

const routerAttrList = Object.getOwnPropertyNames(List.prototype);

function isRouter(pathname) {
    return routerAttrList.find((item, index)=>{
        if(pathname === item || pathname.startsWith(item) && (item !== '/')) {
            return item;
        }
    });
}

module.exports = {
    isRouter,
    routerAttrList,
    list: new List()
};