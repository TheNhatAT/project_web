import 'tw-elements';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function BoardingRoomDetail() {
    const location = useLocation();

    let redirectPagePath = location.pathname + location.search;
    redirectPagePath = redirectPagePath.split("/");
    const id = redirectPagePath[redirectPagePath.length - 1];
    console.log('path: ', redirectPagePath);
    const [boardingRoom, setBoardingRoom] = useState({});

    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            console.log('get boarding room id: ', id)
            return await axios.get(`http://localhost:8000/boarding-rooms/id/${id}`);
        }
        fetchData().then((res) => {
            console.log('data: ', res.data.content);
            setBoardingRoom(res.data.content.boarding_room);
            setUser(res.data.content.owner);
        });
    }, [id]);

    return (
        <>
            <div className="m-10">
                <div className="ml-4 font-medium text-xl">{boardingRoom.address}</div>
                <div className="flex">
                    <div id="carouselExampleCaptions" className="basis-2/3 carousel slide relative m-4" data-bs-ride="carousel">
                        <div className="rounded-md carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat"
                                aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat"
                                aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="basis-1/3 rounded-md bg-gray-300 text-center m-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            className="rounded-full w-48 mb-4 mt-10 mx-auto"
                            alt="Avatar"
                        />
                        <h5 className="text-3xl font-medium leading-tight m-4">{user.name}</h5>
                        <p className="font-medium text-2xl m-4">{user.phone_number}</p>
                    </div>
                </div>

                <div className="m-4">
                    <div className="text-4xl font-medium leading-tight my-2">
                        {boardingRoom.name}
                    </div>

                    <div className="text-xl font-normal leading-tight my-2">
                        <div >
                            {boardingRoom.address}
                        </div>

                        <div>
                            {`Giá phòng: ${boardingRoom.room_price} VND`}
                        </div>

                        <div>
                            {`Diện tích: ${boardingRoom.area} M2`}
                        </div>
                        <div>
                            <p>{`Giá điện: ${boardingRoom.room_price} VND/số`}</p>
                            <p>{`Giá nước: ${boardingRoom.room_price} VND/tháng`}</p>
                            <p>{`Phí gửi xe: ${boardingRoom.room_price} VND/tháng/xe`}</p>
                            <p>{`Phí dịch vụ khác: ${boardingRoom.room_price} VND/tháng`}</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-2xl">Mô tả chung:</p>
                            <p className="whitespace-pre-line">{boardingRoom.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}