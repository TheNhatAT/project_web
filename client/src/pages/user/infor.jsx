import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Infor() {
    
    const[userInfor, setInfor] = useState({
        id: 1,
        email: 'minhthongtran2001@gmail.com',
        password: 'abcacbacbacbabcba',
        name: 'Trần Minh Thông',
        address: 'Định Công, Hoàng Mai',
        phone_number: '0971332517',

    });

    return (
        <>
            <div className="h-screen bg-indigo-100 flex justify-center items-center">
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <form className="bg-white p-10 rounded-lg shadow-lg min-w-full"
                    action=""
                    >
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Thông tin cá nhân</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Họ và tên</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"  name="fullName" id="fullName" placeholder="Nhập họ và tên"
                                    value={userInfor.name}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Địa chỉ</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="address" id="address" placeholder="Nhập địa chỉ"
                                   value={userInfor.address}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Số điện thoại</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="tel" pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b" name="phoneNumber"
                                   id="phoneNumber" placeholder="Nhập số điện thoại"
                                   value={userInfor.phone_number}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Email</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="email" id="email" placeholder="Nhập Email"
                                   value={userInfor.email}
                            />
                        </div>
                        <button className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Cập nhật</button>
                    </form>
                    {/* <form className="h-screen bg-indigo-100 flex justify-center items-center">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Đổi mật khẩu</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Mật khẩu cũ</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"  name="oldPassword" id="oldPassword" placeholder="Nhập mật khẩu cũ"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Mật khẩu mới</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"  name="newPassword" id="newPassword" placeholder="Nhập mật khẩu mới"
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Nhập lại mật khẩu mới</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"  name="confirmPassword" id="confirmPassword" placeholder="Xác nhận mật khẩu mới"
                            />
                        </div>
                        <button className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Cập nhật mật khẩu</button>
                    </form> */}
                </div>
            </div>
        </>
    )
}