import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../../App.css'
import {useNavigate} from "react-router";
import './stylesForRoom.css'

export default function FindARoomate() {

    const [roomShare, setRoomShare] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/roommate`);
        }
        fetchData().then((res) => {
            setRoomShare(res.data.content);
        });
    }, []);

    return (
        <div>
            <img className="img-1" src="https://thumbs.dreamstime.com/b/female-dormitory-roommates-live-together-college-students-friends-bunk-bed-concept-university-lifestyle-friends-sharing-room-209791800.jpg" alt="" />
            <img className="img-2" src="https://previews.123rf.com/images/goodstudio/goodstudio1804/goodstudio180400056/99016412-male-and-female-students-spending-time-in-college-dormitory-room-young-men-and-women-drinking-coffee.jpg" alt="" />
            <img className="img-3" src="https://media.istockphoto.com/vectors/university-students-prepare-for-exams-in-dormitory-vector-id1188428537?k=20&m=1188428537&s=170667a&w=0&h=gZnmbbjXYhkvnsh5pGyFyxGTY7BGVrS63czkIUTYdsE=" alt="" />
        <h1>Tìm bạn cùng phòng</h1> 
        {roomShare.map((item, index) => {
                    return (
                        <div className="grid grid-cols-4 ">
                        <div className="flex flex-col card" key={index}>
                            <img src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
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
                        </div>
                    )
                })}
        </div>
    )
}   
