import {useEffect, useState} from "react";

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
                                {user.id == null && (<a className="ml-4 basis-1/3 px-3 py-2 flex rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Trang chủ </a>)}
                                {(user.id != null) && (<a  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Phòng trọ của bạn </a>)}

                                {(user.id != null && user.role == 1) && (<a  href="#" className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white
                                    focus:bg-gray-700 "> Đăng tin mới </a>)}
                                {(user.id != null && user.role == 2) && (<a  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Đăng tin tìm người ở ghép </a>)}
                                {user.id == null && (<a  className="ml-4 basis-1/3 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Tìm trọ ở ghép </a>)}

                                {(user.id != null) && (<a  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Thông tin của bạn </a>)}
                                {user.id == null && <a  href="#" className="ml-4 basis-1/3 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white
                                    focus:bg-gray-700 "> Hướng dẫn </a>}

                                {(user.id != null && user.role == 1) && (<a  href="#" className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white
                                    focus:bg-gray-700 "> Doanh thu </a>)}
                                {(user.id != null && user.role == 2) && (<a  className="ml-4 basis-1/4 px-3 py-2 rounded-md text-sm leading-5 font-medium
                                    text-gray-800 font-semibold hover:bg-green-500 hover:text-white transition
                                    duration-150 ease-in-out cursor-pointer focus:outline-none
                                    focus:text-white focus:bg-gray-700 "> Thống kê </a>)}
                        </div>
                    </div>
                    <div  className="block md:hidden">
                        <div className="px-2 pt-2 pb-3">
                            <a href="#"
                               className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Location </a>
                            <a href="#"
                               className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Article </a>
                            <a href="#"
                               className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Recipe </a>
                            <a href="#"
                               className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Promo </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}