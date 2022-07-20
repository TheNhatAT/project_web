const { connect } = require("../helper/database");
const {raw} = require("mysql");

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
    let [owners, fields] = await conn.execute('SELECT users.id as id, email, users.name as name, users.address, phone_number, role, status FROM `users` ' +
        'JOIN `users_boarding_rooms` ON users.id = users_boarding_rooms.user_id ' +
        'JOIN `boarding_rooms` ON users_boarding_rooms.boarding_room_id = boarding_rooms.id ' +
        'WHERE boarding_rooms.id = ? AND users_boarding_rooms.relationship = 1', [id]);
    console.log(owners);

  if (owners.length === 0) {
    throw new Error(`Boarding room with id = ${id} doesn't have any owners!!!`);
  }
  return {
    boarding_room: boarding_rooms[0],
    owner: {
      id: owners[0].id,
      name: owners[0].name,
      phone_number: owners[0].phone_number,
    },
  };
};

exports.addBoardingRoom = async (pathname, query, body) => {
  const { name, room_price, area, description, category, address, user_id } = body;

  const created_at = new Date();
  console.log("body: ", body)
  let newBoardingRoom = await conn
    .execute(
    `INSERT INTO boarding_rooms 
    (name, room_price, electricity_price, water_price, parking_price, other_price, area, description, category, address, created_at, updated_at, photo_id, revenue_id)
    VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        room_price,
        null,
        null,
        null,
        null,
        area,
        description,
        category,
        address,
        created_at,
        null,
        null,
        null,
      ]
    )
    console.log("newBoardingRoom: ", newBoardingRoom[0])
    let roomId = newBoardingRoom[0].insertId;
    console.log("room id: ", roomId)

    let userBoardingRoom = conn.execute(`INSERT INTO users_boarding_rooms (relationship, user_id, boarding_room_id) VALUES (?, ?, ?)`,
    [1, user_id, roomId]);

  return [newBoardingRoom];
};

exports.updateBoardingRoomById = async (id, body) => {
  console.log("id: ", id);
  const { name, room_price, electricity_price, water_price, parking_price, other_price, area, description, category, address, created_at } = body;
  let [boarding_rooms] = await conn.execute(
    `UPDATE boarding_rooms 
      (name, room_price, electricity_price, water_price, parking_price, other_price, area, description, category, address, created_at, updated_at, photo_id, revenue_id)
      SET (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      where id = ${id}`,
    [
      name,
      room_price,
      electricity_price,
      water_price,
      parking_price,
      other_price,
      area,
      description,
      category,
      address,
      created_at,
      null,
      null,
      null,
    ]
  );

}

exports.getUsersByBoardingRoomId = async (boarding_room_id) => {
  let [users, fields] = await conn.execute('SELECT users.id as id, email, users.name as name, users.address, phone_number, role, status FROM `users` ' +
      'JOIN `users_boarding_rooms` ON users.id = users_boarding_rooms.user_id ' +
      'JOIN `boarding_rooms` ON users_boarding_rooms.boarding_room_id = boarding_rooms.id ' +
      'WHERE boarding_rooms.id = ? AND users_boarding_rooms.relationship = 2', [boarding_room_id]);
  console.log(users);
  return users;
}

