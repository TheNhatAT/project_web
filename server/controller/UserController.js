const UserService = require('../services/UserService')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.register = async (res, pathname, query, body) => {
    try {
        if (!body.role)
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

exports.login = async (res, pathname, query, body) => {
    try {
        const {email, password} = body;
        let user = await UserService.getOneByEmail(email);
        let isUser = bcrypt.compareSync(password, user.password);
        if (isUser) {
            // expire in 1h
            user.auth_token = jwt.sign({data: user}, process.env.PRIVATE_KEY, {expiresIn: '1h'});
            await UserService.updateOne(user.id, user);
        }
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: true,
            message: 'Login successfully',
            content: user
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json'
        }).end(JSON.stringify({
            success: false,
            message: 'Login failed',
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