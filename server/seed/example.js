let db = require('../helper/database');

// example to insert 1 row into users
// you must insert multiple rows for each table and note the constraints of these tables to
// insert correctly :v
UsersSeed = function(email, password, name) {
    db.query(`INSERT INTO users SET ?`, {
        email: email,
        password: password,
        name: name,
        auth_token: null,
        address: null,
        phone_number: null,
        role: 1, //define later
        avatar: null,
        status: 1, //define later,
        created_at: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
        updated_at: null
    }, function(error,result) {
        if (error) {
            console.log(`Error ${error}`)
        } else
            console.log(`INSERT success!`)
    });


}



// UsersSeed('nhat@gmail.com','123456','nhat');
// UsersSeed('nhat1@gmail.com','123456','nhat1');
// UsersSeed('nhat2@gmail.com','123456','nhat2');
function makeUser() {
UsersSeed('nhat3@gmail.com','123456','nhat3');
UsersSeed('nhat4@gmail.com','123456','nhat4');
UsersSeed('nhat5@gmail.com','123456','nhat5');
UsersSeed('nhat6@gmail.com','123456','nhat6');
UsersSeed('nhat7@gmail.com','123456','nhat7');
UsersSeed('nhat8@gmail.com','123456','nhat8');
UsersSeed('nhat2@gmail.com','123456','nhat9');
UsersSeed('nhat2@gmail.com','123456','nhat10');
UsersSeed('quang1@gmail.com','123456','quang1');
UsersSeed('quang2@gmail.com','123456','quang2');
UsersSeed('quang3@gmail.com','123456','quang3');
UsersSeed('quang3@gmail.com','123456','quang4');
UsersSeed('quang3@gmail.com','123456','quang5');
UsersSeed('quang3@gmail.com','123456','quang6');
UsersSeed('quang3@gmail.com','123456','quang7');
UsersSeed('quang3@gmail.com','123456','quang8');
UsersSeed('quang3@gmail.com','123456','quang9');
UsersSeed('quang3@gmail.com','123456','quang10');
UsersSeed('quang3@gmail.com','123456','quang11');
UsersSeed('quang3@gmail.com','123456','quang12');
UsersSeed('quang3@gmail.com','123456','quang13');
UsersSeed('quang3@gmail.com','123456','quang14');
UsersSeed('quang3@gmail.com','123456','quang15');
    
}

BoardingRoomSeed = function(name, room_price) {
    db.query(`INSERT INTO boarding_rooms SET ?`, {
        name : name,
        room_price : room_price,
        electricity_price : null,
        water_price : null,
        parking_price : null,
        other_price : null,
        area : null,
        description: null,
        category : null,
        address : null,
        created_at : null,
        updated_at : null,
        photo_id : null,
        revenue_id : null,    
    }, function(error,result) {
        if (error) {
            console.log(`Error ${error}`)
        } else
            console.log(`INSERT success!`)
    });


}
/*BoardingRoomSeed('Phòng đẹp 0', 1000000);
BoardingRoomSeed('Phòng đẹp 1', 1200000);
BoardingRoomSeed('Phòng đẹp 2', 1400000);
BoardingRoomSeed('Phòng đẹp 3', 1600000);
BoardingRoomSeed('Phòng đẹp 4', 1800000);*/
BoardingRoomSeed("Cho thuê phòng trọ", 1200000, null, null, null, null, 16, "Nhà trọ đẹp giá rẻ", "Phòng trọ","Hà Nội Trương Định")
BoardingRoomSeed("Cho thuê chung cu mini", 4200000, null, null, null,"chung cư", 14, "Chung cư gần trung tâm", "Chung cư","Hải Phòng Lê Chân")
BoardingRoomSeed("Tìm người ở ghép", 1000000, null, null, null, null, 13, "Cần tìm một bạn chăm chỉ thật thà", "Phòng trọ","Hà Nội Hai Bà Trưng")
BoardingRoomSeed("Tìm người ở ghép", 1200000, null, null, null, "phòng trọ", 12, "Cần tìm một bạn vui vẻ hòa đồng", "Phòng trọ","Hải Phòng Dư Hàng Kênh")
BoardingRoomSeed("Tìm người ở ghép", 1800000, null, null, null, "phòng trọ", 18, "Phòng trọ gần các tường đại học", "Phòng trọ thoáng mát","Hà Nội Bạch Mai")
BoardingRoomSeed("Cho thuê nhà trọ ", 3200000, null, null, null, null, 20, "Phòng trọ", "Phòng trọ đầy đủ tiện nghi","Hà Nội Trương Định")
BoardingRoomSeed("Cho thuê nhà trọ gần Bách Khoa", 2000000, null, null, null, null, 15, "", "Phòng trọ","Hà Nội Minh Khai")
/*PathSeed = function(path) {
    db.query(`INSERT INTO photos SET ?`, {
        path : path,
        boarding_room_id : null,
        created_at : null,
        updated_at : null,

           
    }, function(error,result) {
        if (error) {
            console.log(`Error ${error}`)
        } else
            console.log(`INSERT success!`)
    });


}
PathSeed('photo1');
PathSeed('photo2');
PathSeed('photo3');
PathSeed('photo4');
PathSeed('photo5');


UsersBoardingRoomsSeed = function(relationship, user_id , boarding_room_id) {
    db.query(`INSERT INTO users_boarding_rooms SET ?`, {
        relationship : relationship,
        user_id : user_id,
        boarding_room_id : boarding_room_id,
           
    }, function(error,result) {
        if (error) {
            console.log(`Error ${error}`)
        } else
            console.log(`INSERT success!`)
    });


}
UsersBoardingRoomsSeed(1, 1, 1);
UsersBoardingRoomsSeed(2, 2, 2);
UsersBoardingRoomsSeed(3, 3, 3);
UsersBoardingRoomsSeed(4, 4, 4);
UsersBoardingRoomsSeed(5, 5, 5);

RevenuesSeed = function(type, month, year, date, boarding_room_id) {
    db.query(`INSERT INTO revenues SET ?`, {
        type : type,
        month : month,
        year : year,
        date : date,
        boarding_room_id : boarding_room_id,
        created_at : null,
        updated_at : null,
           
    }, function(error,result) {
        if (error) {
            console.log(`Error ${error}`)
        } else
            console.log(`INSERT success!`)
    });


}
RevenuesSeed('type1', 1, 2022, 2, 1);
RevenuesSeed('type2', 2, 2022, 2, 2);
RevenuesSeed('type3', 3, 2022, 2, 3);
RevenuesSeed('type4', 4, 2022, 2, 4);
RevenuesSeed('type5', 5, 2022, 2, 5);

*/











