import "./styles.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";

const UpdateBoardingRoom = () => {
    const [boardingRoom, setBoardingRoom] = useState({
        name: "",
        room_price: "",
        area: "",
        description: "",
        category: "",
        address: "",
    });
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [subdistrict, setSubdistrict] = useState([]);
    const [users, setUsers] = useState([])
    const [cityname, setCityname] = useState("");
    const [districtname, setDistrictname] = useState("");
    const [subdistrictname, setSubdistrictname] = useState("");
    const [missingInforNoti, setMissingInforNoti] = useState(false);
    const [error, setError] = useState(undefined);
    const location = useLocation();

    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
            setCity(response.data);

        });
    }, []);

    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
        });
    }, []);

    let redirectPagePath = location.pathname + location.search;
    redirectPagePath = redirectPagePath.split('/');
    let id = redirectPagePath[redirectPagePath.length - 1];

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/boarding-rooms/id/${id}`);
        }

        fetchData().then((res) => {
            setBoardingRoom(res.data.content.boarding_room);
        });
    }, [id]);

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/boarding-rooms/users?boarding_room_id=${id}`);
        }

        fetchData().then((res) => {
            setUsers(res.data.content);
        });
    }, [id]);

    const handlecity = (event) => {
        setCityname(event.target.value);
        setDistrict(city.filter((x) => x.name == event.target.value)[0].districts);
    };

    const handledistrict = (event) => {
        const getdistrictname = event.target.value;
        setDistrictname(getdistrictname);
        setSubdistrict(
            district.filter((x) => x.name == event.target.value)[0].wards
        );
    };

    const handlesubdistrict = (event) => {
        const getsubdistrictname = event.target.value;
        setSubdistrictname(getsubdistrictname);
    };

    const handleDeleteUser = (user_id) => {
        //e.preventDefault();
        try {
            console.log("id nguoi xoa", user_id)
            axios.get(`http://localhost:8000/boarding-rooms/remove-user?user_id=${user_id}`).then(() => {
                async function fetchData() {
                    return await axios.get(`http://localhost:8000/boarding-rooms/users?boarding_room_id=${id}`);
                }

                fetchData().then((res) => {
                    setUsers(res.data.content);
                });
            })
            setError(undefined);
        } catch (error) {
            console.log("error: ", error);
            setError(error);
        }

    }

    return (
        <>
            <div
                id="head"
                className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20"
            >
                <div className="bg-blue-600 w-full h-8">?????a ch??? nh?? tr??? cho thu??</div>
                <div className="text-black ml-5 mt-2">
          <span>
            T???nh/Th??nh ph???{" "}
              <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
          </span>
                    <select
                        name="city"
                        className="input-form mt-4"
                        onChange={(e) => handlecity(e)}

                    >
                        <option value={boardingRoom.address.split(',')[0]}>{boardingRoom.address.split(',')[0]}</option>
                        {city.map((getcity, code) => (
                            <option key={code} value={getcity.name}>
                                {getcity.name}{" "}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="district">
          <span>
            Qu???n/Huy???n{" "}
              <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
          </span>
                    <div>
                        <select
                            name="district"
                            className="input-form mt-4"
                            onChange={(e) => handledistrict(e)}
                        >
                            <option
                                value={boardingRoom.address.split(',')[1]}>{boardingRoom.address.split(',')[1]}</option>
                            {district.map((dist, code) => (
                                <option key={code} value={dist.name}>
                                    {dist.name}{" "}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="text-black ml-5 mt-3">
          <span>
            Ph?????ng/X?? <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
          </span>
                    <div>
                        <select
                            name="city"
                            className="input-form mt-4"
                            onChange={(e) => handlesubdistrict(e)}

                        >
                            <option
                                value={boardingRoom.address.split(',')[2]}>{boardingRoom.address.split(',')[2]}</option>
                            {subdistrict.map((dist, code) => (
                                <option key={code} value={dist.name}>
                                    {dist.name}{" "}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className=" text-black ml-5 mt-3">
                    <span>?????a ch??? c??? th??? </span>
                    <br/>
                    <textarea
                        value={boardingRoom.address.split(',')[3]}
                        className="shadow rounded w-3/4 py-2 px-3 text-gray-700 mt-3 focus:shadow-outline"
                        placeholder="??i???n ?????a ch??? ph??ng tr???"
                    ></textarea>
                </div>
            </div>

            <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
                <div className="bg-blue-600 w-full h-8">Th??ng tin cho thu??</div>
                <div className="text-black ml-5 mt-2">
          <span>
            Ti??u ????? tin{" "}
              <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
          </span>
                    <br/>
                    <input
                        name="name"
                        value={boardingRoom.name}
                        onChange={(e) =>
                            setBoardingRoom({...boardingRoom, name: e.target.value})
                        }
                        className="input-form -mt-1"
                    />
                </div>
                <div className="chuyen-muc">
          <span>
            Chuy??n m???c{" "}
              <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
          </span>
                    <br/>
                    <select
                        className="input-form -mt-2"
                        value={boardingRoom.category}
                        onChange={(e) =>
                            setBoardingRoom({...boardingRoom, category: e.target.value})
                        }
                        name="category"
                    >
                        <option value="Chung c??">Chung c??</option>
                        <option value="Ph??ng tr???">Ph??ng tr???</option>
                        <option value="Nh?? nguy??n c??n">Nh?? nguy??n c??n</option>
                    </select>
                </div>
                <div className="text-black ml-5 mt-4">
          <span>
            Di???n t??ch{" "}
              <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
          </span>{" "}
                    <br/>
                    <input
                        name="area"
                        value={boardingRoom.area}
                        onChange={(e) =>
                            setBoardingRoom({...boardingRoom, area: e.target.value})
                        }
                        className="input-form"
                    />
                </div>
                <div className="gia-thue">
          <span>
            Gi?? cho thu??{" "}

              <div className="require">* Th??ng tin n??y l?? b???t bu???c</div>
            
          </span>
                    <br/>
                    <input
                        name="room_price"
                        value={boardingRoom.room_price}
                        onChange={(e) =>
                            setBoardingRoom({...boardingRoom, room_price: e.target.value})
                        }
                        className="input-form"
                    />
                </div>

                <div className="text-black ml-5 mt-5">
                    <span>N???i dung</span>
                    <br/>
                    <textarea
                        className="mt-4"
                        name="description"
                        value={boardingRoom.description}
                        onChange={(e) =>
                            setBoardingRoom({...boardingRoom, description: e.target.value})
                        }
                    ></textarea>
                </div>
            </div>

            <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
                <div className="bg-blue-600 w-full h-8">H??nh ???nh</div>
                <img
                    className="w-20 h-20 mt-2 mb-5 ml-2"
                    src="https://icon-library.com/images/img-icon/img-icon-11.jpg"
                />
                <button className="upload-btn">Upload ???nh</button>
            </div>
            <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
                <div className="bg-blue-600 w-full h-8">Ng?????i thu??</div>
                <Link to={`/boarding-room/${id}/add-user`}>
                    <button className="update-btn mt-3 mb-3 ml-5">Th??m ng?????i</button>
                </Link>
                <table className="text-black font-normal">
                    <tr>
                        <th>H??? t??n</th>
                        <th>Email</th>
                        <th>S??T</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.length !== 0 && users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone_number}</td>
                                    <td>
                                        <Link to={`/user/update-information/${item.id}`}>
                                            <button className="update-btn">C???p nh???t</button>
                                        </Link>
                                        <button className="delete-btn" onClick={() => {
                                            handleDeleteUser(item.id)
                                        }}>X??a
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

            <button className="button">C???p nh???t</button>

        </>
    );
};
export default UpdateBoardingRoom;
