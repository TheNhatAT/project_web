const UserService = require('../services/UserService')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const BoardingRoomService = require("../services/BoardingRoomService");
require('dotenv').config()

exports.registry = async (res, pathname, query, body) => {
    try {
        if (!body.role)
            body.role = 1; // người cho thuê
        const user = await UserService.createOne(pathname, query, body);

        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Register successfully',
            content: user
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Register failed',
            content: error.toString()
        }));
    }
}
exports.addUser = async (res, pathname, query, body) => {
    try {
        if (!body.role)
            body.role = 2; // người cho thuê
        const user = await UserService.addUser(pathname, query, body);
        
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Register successfully',
            content: user
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Register failed',
            content: error.toString()
        }));
    }
}

exports.removeUserFromBoardingRoom = async (res, pathname, query, body) => {
    console.log("query in del: ", query)
    const user_id = query.get('user_id');
    console.log('user_id', user_id)
    try {
        let deletedUser = UserService.removeUserFromBoardingRoom(user_id);
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Removed user successfully',
            content: deletedUser
        }))
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: `Can not delete user with id = ${id}`,
            content: error.toString()
        }));
    }
}

exports.login = async (res, pathname, query, body) => {
    try {
        const {email, password} = body;
        let user = await UserService.getOneByEmail(email);
        let isUser = bcrypt.compareSync(password, user.password);
        if (isUser) {
            // expire in 1h
            user.auth_token = jwt.sign({data: {id: user.id, role: user.role}}, process.env.PRIVATE_KEY, {expiresIn: '1h'});
            await UserService.updateOne(user.id, user);
        }
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Login successfully',
            content: {auth_token: user.auth_token}
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Login failed',
            content: error.toString()
        }));
    }
}

exports.getUserById = async (res, pathname, query, body) => {
    console.log("pathname: ", pathname);
    pathname = pathname.split("/");
    const id = Number(pathname[pathname.length - 1]);
    try {
        const user = await UserService.getOneById(id);

        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: `Get user by id = ${id} successfully`,
            content: user
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Get user failed',
            content: error.toString()
        }));
    }
}

exports.updateUserById = async (res, pathname,query, body) => {
    console.log("pathname: ", pathname);
    console.log("body: ", body);
    const id = body.id;

    try {
        const user = await UserService.updateOne(id, body);

        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Register successfully',
            content: user
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
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

        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'successfully',
            content: allBoardingRoom.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
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
        
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Register successfully',
            content: rows.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
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
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'successful',
            content: rows.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
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
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'successful',
            content: rows.data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Not successful',
            content: error.toString()
        }));
    }
}

exports.pageFragment = async (res, pathname, query, body) => {
        try {  
            const rows = await UserService.pageFragment(pathname, query, body);
            res.writeHead(200, {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
            }).end(JSON.stringify({
                success: true,
                message: 'successful',
                content: rows.data
            }));
        } catch (error) {
            console.log(error)
            res.writeHead(400, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }).end(JSON.stringify({
                success: false,
                message: 'Not successful',
                content: error.toString()
            }));
        }
}

exports.getBoardingRoomsByOwnerId = async (res, pathname, query, body) => {
    const  ownerId  = query.get('owner_id');
    console.log(ownerId)
    try {
        const boardingRooms = await UserService.getBoardingRoomsByOwnerId(ownerId);
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Get successfully',
            content: boardingRooms
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Not successful',
            content: error.toString()
        }));
    }
}


exports.getBoardingRoomsByRentId = async (res, pathname, query, body) => {
    console.log("run rent api")
    const rent_id = query.get('rent_id');
    console.log('rent_id', rent_id)
    try {
        const boardingRooms = await UserService.getBoardingRoomsByRentId(rent_id);
        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: 'Get successfully',
            content: boardingRooms
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Not successful',
            content: error.toString()
        }));
    }
}