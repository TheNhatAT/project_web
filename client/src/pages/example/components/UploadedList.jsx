import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UploadedList() {

    const [boardingRooms, setBoardingRooms] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let ownerId = localStorage.getItem('userId')
            return await axios.get(`http://localhost:8000/users/boarding-rooms?owner_id=${ownerId}`);
        }
        fetchData().then((res) => {
            setBoardingRooms(res.data.content);
        });
    }, []);
    return (
        <>
            <div className="p-5">
                <div>
                    <h2 className="tag block-example border border-primary p-5">Danh sách trọ đã đăng</h2>
                </div>


                <div className="w-100 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {boardingRooms.map((item, index) => {
                        return (
                            <a key={index} href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                {item.name}
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}