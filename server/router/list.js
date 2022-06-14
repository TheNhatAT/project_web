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
    '/user/home'(res, pathname, query, body) {
        UserController.getAllBoardingRoom(res, pathname, query, body);
    }
    '/user/home/roommate'(res, pathname, query, body) {
        UserController.findARoomate(res, pathname, query, body);
    }
    '/user/home/address'(res, pathname, query, body) {
        UserController.findByAddr(res, pathname, query, body);
    }
    '/user/home/filter'(res, pathname, query, body) {
        UserController.filter(res, pathname, query, body);
    }
    '/user/home/page'(res, pathname, query, body) {
        UserController.pageFragment(res, pathname, query, body);
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