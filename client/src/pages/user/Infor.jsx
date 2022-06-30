import {useEffect, useState} from "react";
import axios from "axios";

export default function Infor() {
    
    const[userInfor, setUserInfor] = useState({
        id: Number(localStorage.getItem('userId ')),
        email: '',
        password: '',
        name: '',
        address: '',
        phone_number: '',
    });

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/users/id/${userInfor.id}`);
        }
        fetchData().then((res) => {
            console.log('data: ', res.data.content);
            let data = res.data.content;
            setUserInfor({
                id: Number(userInfor.id),
                email: data.email,
                name: data.name,
                address: data.address,
                phone_number: data.phone_number,
            });
        });
    }, []);

    const hanleUpdateUser = async (e) => {
        e.preventDefault();
        console.log('update: ', userInfor)
        try {
            await axios.post("http://localhost:8000/users/add", {
                id: userInfor.id,
                email: userInfor.email,
                name: userInfor.name,
                address: userInfor.address,
                phone_number: userInfor.phone_number,
            });
            // setUserInfor(userInfor);
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    return (
        <>
            <div className="h-screen bg-indigo-100 flex justify-center items-center">
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Thông tin cá nhân</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Họ và tên</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                    type="text"  name="fullName" id="fullName" placeholder="Nhập họ và tên"
                                    defaultValue={userInfor.name}
                                    onChange={e => setUserInfor({...userInfor, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Địa chỉ</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="address" id="address" placeholder="Nhập địa chỉ"
                                   defaultValue={userInfor.address}
                                   onChange={e => setUserInfor({...userInfor, address: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Số điện thoại</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="tel" pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b" name="phoneNumber"
                                   id="phoneNumber" placeholder="Nhập số điện thoại"
                                   defaultValue={userInfor.phone_number}
                                   onChange={e => setUserInfor({...userInfor, phone_number: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md">Email</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="email" id="email" placeholder="Nhập Email"
                                   defaultValue={userInfor.email}
                                   onChange={e => setUserInfor({...userInfor, email: e.target.value})}
                            />
                        </div>
                        <button onClick={hanleUpdateUser} className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Cập nhật</button>
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