const BoardingRoomService = require('../services/BoardingRoomService');

exports.getBoardingRoomById = async (res, pathname, query, body) => {
    console.log("pathname: ", pathname);
    const id = Number(pathname[pathname.length - 1]);
    try {
        const data = await BoardingRoomService.getBoardingRoomById(id);

        res.writeHead(200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: true,
            message: `Get boarding room by id = ${id} successfully`,
            content: data
        }));
    } catch (error) {
        console.log(error)
        res.writeHead(400, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        }).end(JSON.stringify({
            success: false,
            message: 'Get boarding room failed',
            content: error.toString()
        }));
    }
}
