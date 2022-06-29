const BoardingRoomService = require("../services/BoardingRoomService");

exports.getBoardingRoomById = async (res, pathname, query, body) => {
  console.log("pathname: ", pathname);
  const id = Number(pathname[pathname.length - 1]);
  try {
    const data = await BoardingRoomService.getBoardingRoomById(id);

    res
      .writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .end(
        JSON.stringify({
          success: true,
          message: `Get boarding room by id = ${id} successfully`,
          content: data,
        })
      );
  } catch (error) {
    console.log(error);
    res
      .writeHead(400, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .end(
        JSON.stringify({
          success: false,
          message: "Get boarding room failed",
          content: error.toString(),
        })
      );
  }
};
exports.addBoardingRoom = async (res, pathname, query, body) => {
  console.log("pathname: ", pathname);
  console.log("body", body);
  try {
    const data = await BoardingRoomService.addBoardingRoom(
      pathname,
      query,
      body
    );

    res
      .writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .end(
        JSON.stringify({
          success: true,
          message: `add Boarding Room successfully`,
          content: data,
        })
      );
  } catch (error) {
    console.log(error);
    res
      .writeHead(400, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .end(
        JSON.stringify({
          success: false,
          message: "add boarding room failed",
          content: error.toString(),
        })
      );
  }
};
exports.updateBoardingRoomById = async (res, pathname, query, body) => {
  console.log("pathname: ", pathname);
  const id = Number(pathname[pathname.length - 1]);
  try {
    const data = await BoardingRoomService.updateBoardingRoomById(id);

    res
      .writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .end(
        JSON.stringify({
          success: true,
          message: `Update boarding room by id = ${id} successfully`,
          content: data,
        })
      );
  } catch (error) {
    console.log(error);
    res
      .writeHead(400, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .end(
        JSON.stringify({
          success: false,
          message: "Update boarding room failed",
          content: error.toString(),
        })
      );
  }
};
