import * as React from "react";
import axios from "axios";
import '../../../App.css'
import { useEffect, useState } from "react";


export default function DetailsRoom() {
    const [boardingRoom, setBoardingRoom] = useState({});

    function addBoardingRoom(boardingRoom) {
        axios.post("http://localhost:8000/boarding-rooms/add", {
            name: boardingRoom.name + ' tìm người ở ghép',
            room_price: boardingRoom.room_price,
            electricity_price: boardingRoom.electricity_price,
            water_price: boardingRoom.water_price,
            other_price: boardingRoom.other_price,
            parking_price: boardingRoom.parking_price,
            area: boardingRoom.area,
            description: boardingRoom.description,
            category: boardingRoom.category,
            address: boardingRoom.address,
            user_id: localStorage.getItem("userId")
        }).catch(error => {
            if (error)
                alert("Đăng tin cho thuê nhà trọ thất bại!")
            else
                alert("Đăng tin cho thuê nhà trọ thành công!")
        });
    }

    const handleAddBoardingRoom = async (e) => {
        e.preventDefault();
        try {
            await addBoardingRoom(boardingRoom);
            window.alert("Đăng tin cho thuê nhà trọ thành công!");
        } catch (error) {
            console.log("error: ", error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/users/rent/boarding-rooms?rent_id=${localStorage.getItem("userId")}`);
        }
        fetchData().then((res) => {
            setBoardingRoom(res.data.content);
        });
    }, []);
    return (
        <>
            <div className="p-5">
                <div>
                    <h2 className="tag block-example border border-primary p-5">Danh sách trọ đã thuê</h2>
                </div>

                <div className="roomtag block-example border border-primary">
                    <div className="">
                        <img className="img-roomtag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="title p-5">Tên nhà trọ : {boardingRoom.name}</h1>
                        <h1 className="description p-5">Mô tả nhà trọ : {boardingRoom.description}</h1>
                        <h1 className="description p-5"> Địa chỉ nhà trọ : {boardingRoom.address}</h1>
                        <h1 className="room-price p-5"> Giá phòng : {boardingRoom.room_price}</h1>
                        <h1 className="elec-price p-5"> Giá điện : {boardingRoom.electricity_price}</h1>
                        <h1 className="water-price p-5"> Giá nước : {boardingRoom.water_price}</h1>
                        <h1 className="parking-price p-5"> Phí gửi xe : {boardingRoom.parking_price}</h1>
                        <h1 className="other-price p-5"> Phụ phí : {boardingRoom.other_price}</h1>
                    </div>
                </div>
            </div>
            <button onClick={handleAddBoardingRoom} className="button">Đăng tin tìm người ở ghép</button>
        </>
    )
}