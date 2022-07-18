import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    const [user, setUser] = useState({
        id: localStorage.getItem('userId'),
        role: localStorage.getItem('userRole')
    });

    useEffect(() => {
        window.addEventListener("storage", () => {
            setUser({
                id: localStorage.getItem('userId'),
                role: localStorage.getItem('userRole')});
        });
    }, []);

    return (
        <>
            <nav>
                <div className="relative z-10 bg-green-300 shadow">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="relative flex items-center justify-between h-16 p-2">
                            {user.id == null && (<Link to="/" className="ml-4 basis-1/3 px-3 py-2 flex rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Trang chủ </Link>)}
                            {(user.id != null && user.role == 1) && (<Link to="/uploaded-list"  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Phòng trọ của bạn </Link>)}
                            {(user.id != null && user.role == 2) && (<Link to="/details-room"  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Phòng trọ đã thuê </Link>)}
                            {(user.id != null && user.role == 1) && (<Link to="/boarding-room/add"  href="#" className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white
                                    focus:bg-gray-700 "> Đăng tin mới </Link>)}
                            {user.id == null && (<Link to="/find-a-roomate"  className="ml-4 basis-1/3 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Tìm trọ ở ghép </Link>)}

                            {(user.id != null) && (<Link to={`/user/information/${localStorage.getItem('userId')}`}  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Thông tin của bạn </Link>)}
                            {user.id == null && (<Link to="/guide"  className="ml-4 basis-1/3 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Hướng dẫn </Link>)}

                            {(user.id != null && user.role == 1) && (<Link to="/"  href="#" className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white
                                    focus:bg-gray-700 "> Doanh thu </Link>)}
                            {(user.id != null && user.role == 2) && (<Link to="/"  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Thống kê </Link>)}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}