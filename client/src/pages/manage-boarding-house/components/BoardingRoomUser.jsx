import {useEffect, useState} from "react";
import axios from "axios";

export default function BoardingRoomUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/boarding-rooms/users?boarding_room_id=${1}`);
        }
        fetchData().then((res) => {
            console.log('data: ', res.data.content);
            setUsers(res.data.content);
        });
    }, []);
    return (
        <>
            <div className="flex-col">
                {users.length !== 0 && users.map(user => {
                    return (
                        <div key={user.id}
                            className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl ">
                            <div className="flex items-start px-4 py-6">
                                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                                     src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                     alt="avatar"/>
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{user.name}</h2>
                                    </div>
                                    <p className="text-gray-700">{`Địa chỉ: ${user.address}`}</p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        {`Email: ${user.email}, SĐT: ${user.address}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}