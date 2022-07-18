import * as React from "react";
import axios from "axios";
import '../../../App.css'
import { useEffect, useState } from "react";


export default function DetailsRoom() {
    const [data1, setData1] = useState([]);
    // const [image, setImage] = useState([]);

    const [boardingRoom, setBoardingRoom] = useState({});

    function addBoardingRoom(boardingRoom) {
        axios.post("http://localhost:8000/boarding-rooms/add", {
            name: boardingRoom.name + ' tìm người ở ghép',
            room_price: boardingRoom.room_price,
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
            return await axios.get(`http://localhost:8000/boarding-rooms/id/1`);
        }
        fetchData().then((res) => {
            setData1(res.data.content.boarding_room);
            setBoardingRoom(res.data.content.boarding_room);
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
                        <h1 className="title p-5">Tên nhà trọ : {data1.name}</h1>
                        <h1 className="description p-5">Mô tả nhà trọ : {data1.description}</h1>
                        <h1 className="address p-5"> Địa chỉ nhà trọ : {data1.address}</h1>
                        <h1 className="room-price p-5"> Giá phòng : {data1.room_price}</h1>
                        <h1 className="elec-price p-5"> Giá điện : {data1.electricity_price}</h1>
                        <h1 className="water-price p-5"> Giá nước : {data1.water_price}</h1>
                        <h1 className="parking-price p-5"> Phí gửi xe : {data1.parking_price}</h1>
                        <h1 className="other-price p-5"> Phụ phí : {data1.other_price}</h1>
                    </div>
                </div>
            </div>
            <button onClick={handleAddBoardingRoom} className="button">Đăng tin tìm người ở ghép</button>
        </>
    )
}