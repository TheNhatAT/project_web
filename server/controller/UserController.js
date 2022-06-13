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