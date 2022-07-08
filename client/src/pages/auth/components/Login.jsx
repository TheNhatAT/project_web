import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../helpers/hooks/useAuth";
import axios from "axios";

async function loginUser(credentials) {
    console.log('credentials: ', JSON.stringify(credentials));
    return await axios.post('http://localhost:8000/users/login', {
        email: credentials.username,
        password: credentials.password
    });
}

export default function Login() {
    const [auth, setAuth] = useState(undefined);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(undefined);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let auth;
        try {
            auth = (await loginUser(user)).data;
            console.log('auth: ', auth);
            setAuth(auth);
            await login(auth.content);
            setError(undefined);
        } catch (error) {
            setError(error);
            setAuth(undefined);
        }
        if (auth) {
            navigate("/");
        }
    }
    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
            >
                <div
                    className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"
                >
                    <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                        Chào mừng bạn trở lại.
                    </div>
                    <div className="mt-4 self-center text-2xl sm:text-sm text-gray-800">
                        Bạn cần đăng nhập để cho thuê phòng
                    </div>
                    {error &&
                        (<div className="text-red-500 mt-4 self-center text-2xl sm:text-sm ">
                            Tài khoản hoặc mật khẩu không đúng
                        </div>)}
                    <div className="mt-0">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-xs tracking-wide text-gray-600"
                                >Email:</label
                                >
                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <i className="fas fa-at text-blue-500" />
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Enter your email"
                                        onChange={e => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="password"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >Mật khẩu:</label
                                >
                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <i className="fas fa-lock text-blue-500" />
                                        </span>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Enter your password"
                                        onChange={e => setUser({ ...user, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex w-full">
                                <button
                                    type="submit"
                                    className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
                                    <span className="mr-2 uppercase">Đăng nhập</span>
                                    <span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <a
                        href="#"
                        target="_blank"
                        className="inline-flex items-center text-gray-700 font-medium text-xs text-center"
                    >
                        <span className="ml-2"
                        >Bạn chưa có tài khoản?
                            <Link to="/register"
                                className="text-xs ml-2 text-blue-500 font-semibold"
                            >Đăng ký ngay</Link>
                        </span
                        >
                    </a>
                </div>
            </div>
        </>
    )
}