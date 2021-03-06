const exampleCtrl = require("../controller/example");
const UserController = require("../controller/UserController");
const BoardingRoomController = require("../controller/BoardingRoomController");
const path = require("path");

class List {
    '/example'(res) {
        exampleCtrl.example(res);
    }

    // Routes of User
    '/users/registry' (res, pathname, query, body) {
        UserController.registry(res, pathname, query, body);
    }
    '/users/login' (res, pathname, query, body) {
        UserController.login(res, pathname, query, body);
    }

    '/users/id' (res, pathname, query, body) {
        UserController.getUserById(res, pathname, query, body);
    }
    '/users/add-to-room'(res, pathname, query, body) {
        UserController.addUser(res,pathname, query, body)
    }

    '/users/add' (res, pathname, query, body) {
        UserController.updateUserById(res, pathname, query, body);
    }

    '/users/boarding-rooms' (res, pathname, query, body) {
        UserController.getBoardingRoomsByOwnerId(res, pathname, query, body);
    }

    '/users/rent/boarding-rooms' (res, pathname, query, body) {
        UserController.getBoardingRoomsByRentId(res, pathname, query, body);
    }

    // API get all boarding rooms
    '/home'(res, pathname, query, body) {
        UserController.getAllBoardingRoom(res, pathname, query, body);
    }
    '/roommate'(res, pathname, query, body) {
        UserController.findARoomate(res, pathname, query, body);
    }
    '/address'(res, pathname, query, body) {
        UserController.findByAddr(res, pathname, query, body);
    }
    '/filter'(res, pathname, query, body) {
        UserController.filter(res, pathname, query, body);
    }

    '/page'(res, pathname, query, body) {
        UserController.pageFragment(res, pathname, query, body);
    }

    // Router of BoardingRoom
    '/boarding-rooms/add' (res, pathname, query, body) {
        BoardingRoomController.addBoardingRoom(res, pathname, query, body)
    }

    '/boarding-rooms/id'(res, pathname, query, body) {
        BoardingRoomController.getBoardingRoomById(res, pathname, query, body);
    }

    '/boarding-rooms/users' (res, pathname, query, body) {
        BoardingRoomController.getUsersByBoardingRoomId(res, pathname, query, body);
    }
    '/boarding-rooms/remove-user' (res, pathname, query, body) {
        UserController.removeUserFromBoardingRoom(res, pathname, query, body)
    }
}

const routerAttrList = Object.getOwnPropertyNames(List.prototype);

function isRouter(pathname) {
    return routerAttrList.find((item, index) => {
        if (pathname === item || pathname.startsWith(item) && (item !== '/')) {
            return item;
        }
    });
}

module.exports = {
    isRouter,
    routerAttrList,
    list: new List()
};