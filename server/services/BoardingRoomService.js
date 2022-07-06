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
  const { name, room_price, area, description, category, address, user_id } =
    body;
  const created_at = new Date();
  let [newBoardingRoom] = await conn
    .execute(
    `INSERT INTO boarding_rooms 
    (name, room_price, electricity_price, water_price, parking_price, other_price, area, description, category, address, created_at, updated_at, photo_id, revenue_id, user_id)
    VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        user_id,
      ]
    )
    
    let roomId = await conn.execute(`SELECT TOP 1 * FROM boarding_rooms WHERE id = ? ORDER BY created_at`,
    [newBoardingRoom[0].user_id])

    let userBoardingRoom = conn.execute(`INSERT INTO users_boarding_rooms (relationship, user_id, boarding_room_id) VALUES (?, ?, ?)`,
    [1, newBoardingRoom[0].user_id, roomId]);

  return newBoardingRoom[0];
};

exports.updateBoardingRoomById = async (id, body) => {
  console.log("id: ", id);
  const { name, room_price, area, description, category, address, created_at } = body;
  let [boarding_rooms] = await conn.execute(
    `UPDATE boarding_rooms 
      (name, room_price, electricity_price, water_price, parking_price, other_price, area, description, category, address, created_at, updated_at, photo_id, revenue_id)
      SET (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      where id = ${id}`,
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
  );

  return {
    boarding_room: boarding_rooms[0],
  };
};
