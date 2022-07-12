import { useEffect, useState } from "react";
import axios from "axios";
import '../../../App.css'

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
    return (
        <>
            <div>
                <h2>Nhà trọ mới nhất</h2>
            </div>

            <div className="grid grid-rows-4 grid-flow-col gap-5">
                {boardingRooms.map((item, index) => {
                    return (
                        <div className="flex flex-col" key={index}>
                            <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                            <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">{item.name}</div>
                            <h1 className="description">{item.description}</h1>
                            <h1 className="address">{item.address}</h1>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Giá tiền : {item.room_price}
                            </button>
                        </div>
                    )
                })}
            </div>

        </>

    )
}   
