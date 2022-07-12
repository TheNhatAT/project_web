import { useEffect, useState } from "react";
import axios from "axios";
import '../../../App.css'
import {useNavigate} from "react-router";
import './stylesForRoom.css'

export default function RoomTag() {

    const [boardingRooms, setBoardingRooms] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/home`);
        }
        fetchData().then((res) => {
            setBoardingRooms(res.data.content);
        });
    }, []);

    const navigate = useNavigate();
    const handleClickItem = (id) => {
        navigate(`/boarding-room/detail/${id}`);
    }
    return (
        <>
            <div>
                <h2 className="title">Nhà trọ mới nhất</h2><img className="title-img" src="https://iprmentlaw.com/wp-content/uploads/2018/10/new.png"/>
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
