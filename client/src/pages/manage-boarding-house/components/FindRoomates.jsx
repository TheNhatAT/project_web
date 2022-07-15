import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../../App.css'
import {useNavigate} from "react-router";
import './stylesForRoom.css'

export default function FindRoomates() {

    const [boardingRooms, setBoardingRooms] = useState([]);
    const [cityN, setCityN] = useState(null);

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/roommate`);
        }
        fetchData().then((res) => {
            setBoardingRooms(res.data.content);
        });
    }, []);

    const navigate = useNavigate();
    const handleClickItem = (id) => {
        navigate(`/boarding-room/detail/${id}`);
    }

    const handleClickCity = (city) => {
        axios.get(`http://localhost:8000/roommate?address=${city}`).then((res) => {
            setBoardingRooms(res.data.content);
        });
    }

    return (
        <>
            <div className="title-addr">Tìm kiếm nhà trọ ở chung theo địa chỉ</div>
            <div>
                <ul className="list-home">
                    <img onClick={() => {setCityN("Hà Nội"); handleClickCity(cityN)}} src="https://sanvemaybay.vn/includes/uploads/2016/12/ve-may-bay-di-ha-noi-gia-re-tham-quan-ho-hoan-kiem-2.jpg" alt="" />
                    <img onClick={() => {setCityN("Đà Nẵng"); handleClickCity(cityN)}} src="https://i-dulich.vnecdn.net/2020/07/01/shutterstock-1169930359-4299-1593590420.jpg" alt="" />
                    <img onClick={() => {setCityN("Sài Gòn"); handleClickCity(cityN)}} src="https://tphcm.cdnchinhphu.vn/Uploaded/tranthithom/2017_07_06/TPHCM.jpg" alt="" />
                    <img onClick={() => {setCityN("Hải Phòng"); handleClickCity(cityN)}} src="https://hdproland.com/media/posts/ban-do-hai-phong.jpg" alt="" />
                    <img onClick={() => {setCityN("Huế"); handleClickCity(cityN)}} src="https://file3.qdnd.vn/data/images/0/2022/06/17/vuongha/tha_7400%20sua%202.jpg?dpi=150&quality=100&w=870" alt=""/>

                </ul>
            </div>

            <div>
                <h2 className="title">{cityN == null ? `Danh sách nhà trọ cần người ở chung` : `Danh sách nhà trọ cần người ở chung tại ${cityN}`}</h2>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {boardingRooms.map((item, index) => {
                    return (
                        <div className="flex flex-col card" key={index}>
                            <img onClick={() => { handleClickItem(item.id)}} src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                            <h4 className="name">{item.name}</h4>
                            {/*<h1 className="description">{item.description}</h1>*/}
                            <img className="addr-icon" src="https://cdn-icons-png.flaticon.com/512/1275/1275302.png"/>
                            <p className="address"> {item.address}</p>
                            <img className="desc" src="https://www.seekpng.com/png/full/520-5202827_luxembourg-residents-house-land-icon-png.png"/>
                            <p className="area" >{item.area} m2</p>
                            <button >
                                Giá tiền : {item.room_price}
                            </button>
                        </div>
                    )
                })}
            </div>

        </>

    )
}
