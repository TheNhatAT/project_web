const UserService = require('../services/UserService')

exports.register = async (res, pathname, query, body) => {
    try {
        body.role = 1; // người cho thuê
        const user = await UserService.createOne(pathname, query, body);

        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: true,
            message: 'Register successfully',
            content: user
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: false,
            message: 'Register failed',
            content: error.toString()
        }));
    }
}

exports.getAllBoardingRoom = async (res, pathname, query, body) => {
    try {
        
        const allBoardingRoom = await UserService.getAllBoardingRoom(pathname, query, body);

        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: true,
            message: 'successfully',
            content: allBoardingRoom.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: false,
            message: 'Get all boarding room fail',
            content: error.toString()
        }));
    }
}
exports.findARoomate = async (res, pathname, query, body) => {
    try {
        
        const rows = await UserService.findARoomate(pathname, query, body);

        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: true,
            message: 'Register successfully',
            content: rows.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: false,
            message: 'Not successful',
            content: error.toString()
        }));
    }
}
exports.findByAddr = async (res, pathname, query, body) => {
    try {
        const rows = await UserService.findByAddr(pathname, query, body);
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: true,
            message: 'successful',
            content: rows.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: false,
            message: 'Not successful',
            content: error.toString()
        }));
    }
}
exports.filter = async (res, pathname, query, body) => {
    try {   
        const rows = await UserService.filter(pathname, query, body);
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: true,
            message: 'successful',
            content: rows.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: false,
            message: 'Not successful',
            content: error.toString()
        }));
    }
}
exports.pageFragment = async (res, pathname, query, body) => {
    async (res, pathname, query, body) => {
        try {  
            const rows = await UserService.pageFragment(pathname, query, body);
            res.writeHead(400, {
                'Content-Type':'application/json'
            }).end(JSON.stringify({
                success: true,
                message: 'successful',
                content: rows.data
            }));
        } catch (error) {
            console.log(error)
            res.writeHead(400, {
                'Content-Type':'application/json'
            }).end(JSON.stringify({
                success: false,
                message: 'Not successful',
                content: error.toString()
            }));
        }
    }
}