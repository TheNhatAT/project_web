const { connect } = require("../helper/database");

let conn = connect();

// example to insert 1 row into users
// you must insert multiple rows for each table and note the constraints of these tables to
// insert correctly :v
UsersSeed = async function (email, password, name) {
    let data = await conn.execute(`INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)`, [email, password, name, 1]);
    return data;
}



UsersSeed('nhat@gmail.com', '123456', 'nhat').then(() => {
    console.log('seed ok')
});
// UsersSeed('nhat1@gmail.com','123456','nhat1');
// UsersSeed('nhat2@gmail.com','123456','nhat2');
// function makeUser() {
// UsersSeed('nhat3@gmail.com','123456','nhat3');
// UsersSeed('nhat4@gmail.com','123456','nhat4');
// UsersSeed('nhat5@gmail.com','123456','nhat5');
// UsersSeed('nhat6@gmail.com','123456','nhat6');
// UsersSeed('nhat7@gmail.com','123456','nhat7');
// UsersSeed('nhat8@gmail.com','123456','nhat8');
// UsersSeed('nhat2@gmail.com','123456','nhat9');
// UsersSeed('nhat2@gmail.com','123456','nhat10');
// UsersSeed('quang1@gmail.com','123456','quang1');
// UsersSeed('quang2@gmail.com','123456','quang2');
// UsersSeed('quang3@gmail.com','123456','quang3');
// UsersSeed('quang3@gmail.com','123456','quang4');
// UsersSeed('quang3@gmail.com','123456','quang5');
// UsersSeed('quang3@gmail.com','123456','quang6');
// UsersSeed('quang3@gmail.com','123456','quang7');
// UsersSeed('quang3@gmail.com','123456','quang8');
// UsersSeed('quang3@gmail.com','123456','quang9');
// UsersSeed('quang3@gmail.com','123456','quang10');
// UsersSeed('quang3@gmail.com','123456','quang11');
// UsersSeed('quang3@gmail.com','123456','quang12');
// UsersSeed('quang3@gmail.com','123456','quang13');
// UsersSeed('quang3@gmail.com','123456','quang14');
// UsersSeed('quang3@gmail.com','123456','quang15');
//
// }
//
BoardingRoomSeed = async function (name, room_price, area, description, category, address) {
    let data = await conn.execute(`INSERT INTO boarding_rooms (name, room_price, area, description, category, address) VALUES (?, ?, ?, ?,?,?)`, [name, room_price, area, description, category, address]);
    return data;
};




// }
// // /*BoardingRoomSeed('Ph??ng ?????p 0', 1000000);
// // BoardingRoomSeed('Ph??ng ?????p 1', 1200000);
// // BoardingRoomSeed('Ph??ng ?????p 2', 1400000);
// // BoardingRoomSeed('Ph??ng ?????p 3', 1600000);
// // BoardingRoomSeed('Ph??ng ?????p 4', 1800000);*/
BoardingRoomSeed("Cho thu?? ph??ng tr???", 1200000, 16, "Nh?? tr??? ?????p gi?? r???", "Ph??ng tr???", "H?? N???i Tr????ng ?????nh");
BoardingRoomSeed("Cho thu?? chung cu mini", 4200000, 14, "Chung c?? g???n trung t??m", "Chung c??", "H???i Ph??ng L?? Ch??n");
BoardingRoomSeed("T??m ng?????i ??? gh??p", 1000000, 13, "C???n t??m m???t b???n ch??m ch??? th???t th??", "Ph??ng tr???", "H?? N???i Hai B?? Tr??ng");
BoardingRoomSeed("T??m ng?????i ??? gh??p", 1200000, 12, "C???n t??m m???t b???n vui v??? h??a ?????ng", "Ph??ng tr???", "H???i Ph??ng D?? H??ng K??nh");
// BoardingRoomSeed("T??m ng?????i ??? gh??p", 1800000, null, null, null, null, 18, "Ph??ng tr??? g???n c??c t?????ng ?????i h???c", "Ph??ng tr??? tho??ng m??t", "H?? N???i B???ch Mai");
// BoardingRoomSeed("Cho thu?? nh?? tr??? ", 3200000, null, null, null, null, 20, "Ph??ng tr???", "Ph??ng tr??? ?????y ????? ti???n nghi", "H?? N???i Tr????ng ?????nh");
// BoardingRoomSeed("Cho thu?? nh?? tr??? g???n B??ch Khoa", 2000000, null, null, null, null, 15, "", "Ph??ng tr???", "H?? N???i Minh Khai");
// /*PathSeed = function(path) {
//     db.query(`INSERT INTO photos SET ?`, {
//         path : path,
//         boarding_room_id : null,
//         created_at : null,
//         updated_at : null,
//
//
//     }, function(error,result) {
//         if (error) {
//             console.log(`Error ${error}`)
//         } else
//             console.log(`INSERT success!`)
//     });
//
//
// }
// PathSeed('photo1');
// PathSeed('photo2');
// PathSeed('photo3');
// PathSeed('photo4');
// PathSeed('photo5');
//
//
// UsersBoardingRoomsSeed = function(relationship, user_id , boarding_room_id) {
//     db.query(`INSERT INTO users_boarding_rooms SET ?`, {
//         relationship : relationship,
//         user_id : user_id,
//         boarding_room_id : boarding_room_id,
//
//     }, function(error,result) {
//         if (error) {
//             console.log(`Error ${error}`)
//         } else
//             console.log(`INSERT success!`)
//     });
//
//
// }
// UsersBoardingRoomsSeed(1, 1, 1);
// UsersBoardingRoomsSeed(2, 2, 2);
// UsersBoardingRoomsSeed(3, 3, 3);
// UsersBoardingRoomsSeed(4, 4, 4);
// UsersBoardingRoomsSeed(5, 5, 5);
//
// RevenuesSeed = function(type, month, year, date, boarding_room_id) {
//     db.query(`INSERT INTO revenues SET ?`, {
//         type : type,
//         month : month,
//         year : year,
//         date : date,
//         boarding_room_id : boarding_room_id,
//         created_at : null,
//         updated_at : null,
//
//     }, function(error,result) {
//         if (error) {
//             console.log(`Error ${error}`)
//         } else
//             console.log(`INSERT success!`)
//     });
//
//
// }
// RevenuesSeed('type1', 1, 2022, 2, 1);
// RevenuesSeed('type2', 2, 2022, 2, 2);
// RevenuesSeed('type3', 3, 2022, 2, 3);
// RevenuesSeed('type4', 4, 2022, 2, 4);
// RevenuesSeed('type5', 5, 2022, 2, 5);
//
// */

