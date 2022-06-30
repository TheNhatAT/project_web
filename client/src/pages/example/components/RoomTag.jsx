import { useEffect, useState } from "react";
import axios from "axios";
import '../../../App.css'

export default function RoomTag() {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    // const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/boarding-rooms/id/1`);
        }
        fetchData().then((res) => {
            setData1(res.data.content.boarding_room);


        });
    }, []);
    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/boarding-rooms/id/2`);
        }
        fetchData().then((res) => {
            setData2(res.data.content.boarding_room);


        });
    }, []);
    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/boarding-rooms/id/3`);
        }
        fetchData().then((res) => {
            setData3(res.data.content.boarding_room);


        });
    }, []);
    return (
        <>
            <div>
                <h2>Nhà trọ mới nhất</h2>
            </div>

            <div className="grid grid-rows-4 grid-flow-col gap-5">
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">{data1.name}</div>
                    <h1 className="description">{data1.description}</h1>
                    <h1 className="address">{data1.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền : {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hGiá tiền :ometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data2.name}</div>
                    <h1 className="description">{data2.description}</h1>
                    <h1 className="address">{data2.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền : {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data3.name}</div>
                    <h1 className="description">{data3.description}</h1>
                    <h1 className="address">{data3.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền : {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="name">{data1.name}</div>
                    <h1 className="description">{data1.description}</h1>
                    <h1 className="address">{data1.address}</h1>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="name">{data1.name}</div>
                    <h1 className="description">{data1.description}</h1>
                    <h1 className="address">{data1.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data2.name}</div>
                    <h1 className="description">{data2.description}</h1>
                    <h1 className="address">{data2.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data2.name}</div>
                    <h1 className="description">{data2.description}</h1>
                    <h1 className="address">{data2.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data2.name}</div>
                    <h1 className="description">{data2.description}</h1>
                    <h1 className="address">{data2.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền : {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data2.name}</div>
                    <h1 className="description">{data2.description}</h1>
                    <h1 className="address">{data2.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data3.name}</div>
                    <h1 className="description">{data3.description}</h1>
                    <h1 className="address">{data3.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data3.name}</div>
                    <h1 className="description">{data3.description}</h1>
                    <h1 className="address">{data3.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>
                <div className="flex flex-col">
                    <img className="img-hometag" src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                    <div className="item-2">{data3.name}</div>
                    <h1 className="description">{data3.description}</h1>
                    <h1 className="address">{data3.address}</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Giá tiền :  {data1.room_price}
                    </button>
                </div>

            </div>

        </>

    )
}   
