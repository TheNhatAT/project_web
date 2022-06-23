const { connect } = require('../helper/database');

let conn = connect();

exports.getBoardingRoomById = async (id) => {
    console.log("id: ", id);
    let [boarding_rooms, fields]  = await conn.execute('SELECT * FROM `boarding_rooms` WHERE `id` = ?',
        [id]);
    if (boarding_rooms.length === 0) {
        throw new Error(`Boarding room with id = ${id} doesn't exist!!!`);
    }
    return boarding_rooms[0];
}