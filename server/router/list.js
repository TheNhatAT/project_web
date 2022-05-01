const exampleCtrl = require("../controller/example");

class List {
    '/example' (res) {
        exampleCtrl.example(res);
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