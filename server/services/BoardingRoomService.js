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

exports.getUsersByBoardingRoomId = async (boarding_room_id) => {
  let [users, fields] = await conn.execute('SELECT users.id as id, email, users.name as name, users.address, phone_number, role, status FROM `users` ' +
      'JOIN `users_boarding_rooms` ON users.id = users_boarding_rooms.user_id ' +
      'JOIN `boarding_rooms` ON users_boarding_rooms.boarding_room_id = boarding_rooms.id ' +
      'WHERE boarding_rooms.id = ?', [boarding_room_id]);
  console.log(users);
  return users;
}