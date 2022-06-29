const { connect } = require("../helper/database");

let conn = connect();

exports.getBoardingRoomById = async (id) => {
  console.log("id: ", id);
  let [boarding_rooms] = await conn.execute(
    "SELECT * FROM `boarding_rooms` WHERE `id` = ?",
    [id]
  );

  if (boarding_rooms.length === 0) {
    throw new Error(`Boarding room with id = ${id} doesn't exist!!!`);
  }
  let [owners] = await conn.execute("SELECT * FROM `users` WHERE `id` = ?", [
    boarding_rooms[0].user_id,
  ]);

    if (owners.length === 0) {
        throw new Error(`Boarding room with id = ${id} doesn't have any owners!!!`);
    }
    return { boarding_room: boarding_rooms[0], owner: { id: owners[0].id, name: owners[0].name, phone_number: owners[0].phone_number } };

}
