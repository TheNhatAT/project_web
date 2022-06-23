import 'tw-elements';
import {useState} from "react";

export default function BoardingRoomDetail() {
    const [boardingRoom, setBoardingRoom] = useState({
        id: 1,
        name: 'Nhà trọ Bình An',
        room_price: 1500000,
        electricity_price: 3500,
        water_price: 80000,
        parking_price: 100000,
        other_price: 100000,
        area: 15,//m2
        description: `CÁCH Đại Học Bách - Kinh - Xây CHỈ TỪ 1-2KM
️                    Phòng Full nội thất như hình
️                    TÒA NHÀ ĐẢM BẢO AN NINH_SẠCH SẼ_BẢO VỆ 24/7
️                    THUẬN TIỆN DI CHUYỂN SANG CÁC QUẬN LÂN CẬN`,
        category: '',
        address: 'Số 134 ngõ 210, Định Công Thượng, Hoàng Mai, Hà Nội'
    });

    return (
        <>
            <div className="m-10">
                <div>Quận Hoàng Mai, Hà Nội</div>
                <div className="flex">
                    <div id="carouselExampleCaptions" className="basis-2/3 carousel slide relative mr-4" data-bs-ride="carousel">
                        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
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
                    <div className="basis-1/3 text-center mt-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            className="rounded-full w-32 mb-4 mx-auto"
                            alt="Avatar"
                        />
                        <h5 className="text-xl font-medium leading-tight mb-2">Nguyen Van XXX</h5>
                        <p className="text-gray-500">0368735544</p>
                    </div>
                </div>

                <div>
                    {boardingRoom.name}
                </div>

                <div>
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
                <div>
                    <p>Mô tả chung:</p>
                    <p className="whitespace-pre-line">{boardingRoom.description}</p>
                </div>
            </div>
        </>
    )
}