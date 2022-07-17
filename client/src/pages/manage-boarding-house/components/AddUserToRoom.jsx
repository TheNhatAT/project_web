import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


async function AddUserToRoom(user, id) {
  console.log("user: ", JSON.stringify(user));
  return await axios.post("http://localhost:8000/users/add-to-room", {
    name: user.username,
    email: user.email,
    password: user.password,
    address: user.address,
    phone_number: user.phone_number,
    boarding_room_id:id 
  });
}

export default function AddUserToBoardingRoom() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
    cf_password: "",
  });
  const location = useLocation();
  let redirectPagePath = location.pathname + location.search;
  redirectPagePath = redirectPagePath.split("/");
  let id = redirectPagePath[redirectPagePath.length - 2];

  const navigate = useNavigate();
  const [error, setError] = useState(undefined);

  const handleAddUser = async(e) => {
    e.preventDefault();
    let res;
    try {
      res = await AddUserToRoom(user, id);
      navigate(`/boarding-room/update/${id}`);
      setError(undefined);
    } catch (error) {
      console.log("error: ", error);
      setError(error);
    }
    // if (error !== undefined) {
    //     navigate("/login");
    // }
  };
  console.log("adad");

  return (
    <>
      <div className="m-4 bg-indigo-100 flex justify-center items-center">
                <div className="lg:w-2/5 md:w-1/2 w-2/3 m-4">
                    <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Thông tin của người thuê</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Họ và tên</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="username" id="username" placeholder="Tên đăng nhập"
                                   onChange={e => setUser({...user, username: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Địa chỉ</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="address" id="address" placeholder="Địa chỉ"
                                   onChange={e => setUser({...user, address: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Số điện thoại</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="tel" pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b" name="phoneNumber"
                                   id="phoneNumber" placeholder="Số điện thoại"
                                   onChange={e => setUser({...user, phone_number: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Email</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="text" name="email" id="email" placeholder="Email"
                                   onChange={e => setUser({...user, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Mật khẩu</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="password" name="password" id="password" placeholder="Mật khẩu"
                                   onChange={e => setUser({...user, password: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Nhập lại mật khẩu</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                   type="password" name="confirm" id="confirm" placeholder="Nhập lại mật khẩu"
                                   onChange={e => setUser({...user, cf_password: e.target.value})}
                            />
                        </div>
                        <div>
                            {(error !== undefined) && (
                                <p className="text-red-500 mt-4 self-center text-2xl sm:text-sm ">{error?.response.data.content}</p>)}
                        </div>
                        <div>
                            {(user.password !== user.cf_password) && (
                                <p className="text-red-500 mt-4 self-center text-2xl sm:text-sm ">Mật khẩu không
                                    khớp</p>)}
                        </div>
                        <button onClick={handleAddUser} className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Đăng ký</button>
                        
                    </form>
                </div>
            </div>
    </>
  );
}
