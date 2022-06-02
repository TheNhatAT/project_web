import {Link} from "react-router-dom";

export default function Register () {
    
    return (
        <>
            <div className="h-screen bg-indigo-100 flex justify-center items-center">
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Đăng ký tài khoản</h1>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Tên đăng nhập</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="Tên đăng nhập" />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Email</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="Email" />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Mật khẩu</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="Mật khẩu" />
                        </div>
                        <div>
                            <label className="text-gray-800 font-semibold block my-3 text-md" >Nhập lại mật khẩu</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="Nhập lại mật khẩu" />
                        </div>
                        <button className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Đăng ký</button>
                        <button className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
                            <Link to="/login">Đăng nhập</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}