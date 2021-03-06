import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../../App.css'
import {useNavigate} from "react-router";
import './stylesForRoom.css'

export default function RoomTag() {

    const [boardingRooms, setBoardingRooms] = useState([]);
    const [cityN, setCityN] = useState(null);

    useEffect(() => {
        async function fetchData() {
            return await axios.get(`http://localhost:8000/home`);
        }
        fetchData().then((res) => {
            setBoardingRooms(res.data.content);
        });
    }, []);

    const navigate = useNavigate();
    const handleClickItem = (id) => {
        navigate(`/boarding-room/detail/${id}`);
    }

    const handleClickCity = (city) => {
        axios.get(`http://localhost:8000/address?address=${city}`).then((res) => {
            setBoardingRooms(res.data.content);
        });
    }

    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [subdistrict, setSubdistrict] = useState([]);
    const [cityname, setCityname] = useState("");
    const [districtname, setDistrictname] = useState("");
    const [subdistrictname, setSubdistrictname] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState({
        lowPrice: 0,
        highPrice: 0,
    });
    const [area, setArea] = useState({
        lowArea: 0,
        highArea: 0,
    });

    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
            setCity(response.data);
        });
    }, []);

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

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleLowPrice = (e) => {
        setPrice({...price, lowPrice: Number(e.target.value)});
    }

    const handleHighPrice = (e) => {
        setPrice({...price, highPrice: Number(e.target.value)});
    }

    const handleLowArea = (e) => {
        setArea({...area, lowArea: Number(e.target.value)});
    }

    const handleHighArea = (e) => {
        setArea({...area, highArea: Number(e.target.value)});
    }

    const handleSearch = () => {
        let address = "";
        if (cityname != "") {
            address = cityname;
            if (districtname != "") {
                address = districtname + ',' + cityname;
                if (subdistrictname != "") {
                    address = subdistrictname + ',' + districtname + ',' + cityname;
                }
            }
        }
        axios.get(`http://localhost:8000/filter?minimal_room_price=${price.lowPrice}&maximal_room_price=${price.highPrice}&minimal_area=${area.lowArea}&maximal_area=${area.highArea}&address=${address}&category=${category}`).then((res) => {
            setBoardingRooms(res.data.content);
        });
    }
    return (
        <>
            <div className="w-full md:w-3/3 shadow p-5 rounded-lg bg-white">
                <div className="flex items-center justify-between mt-4">
                    <p className="title-filter">
                        B??? l???c t??m ki???m
                    </p>
                </div>

                <div className="flex flex-col ">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                onChange={(e) => handlecity(e)}
                        >
                            <option value="">--Ch???n t???nh/tp--</option>
                            {city.map((getcity, code) => (
                                <option key={code} value={getcity.name}>
                                    {getcity.name}{" "}
                                </option>
                            ))}
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                onChange={(e) => handledistrict(e)}
                        >
                            <option value="">--Ch???n qu???n/huy???n--</option>
                            {district.map((dist, code) => (
                                <option key={code} value={dist.name}>
                                    {dist.name}{" "}
                                </option>
                            ))}
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                onChange={(e) => handlesubdistrict(e)}
                        >
                            <option value="">--Ch???n ph?????ng/x??--</option>
                            {subdistrict.map((dist, code) => (
                                <option key={code} value={dist.name}>
                                    {dist.name}{" "}
                                </option>
                            ))}
                        </select>

                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                onChange={handleCategory}
                        >
                            <option value="">Lo???i nh?? tr???</option>
                            <option value="Chung c??">Chung c??</option>
                            <option value="Ph??ng tr???">Ph??ng tr???</option>
                            <option value="Nh?? nguy??n c??n">Nh?? nguy??n c??n</option>
                        </select>

                        <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <label >M???c gi?? t???i thi???u</label>
                            <input onChange={handleLowPrice}/>
                        </div>

                        <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <label >M???c gi?? t???i ??a</label>
                            <input onChange={handleHighPrice} />
                        </div>

                        <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <label >Di???n t??ch t???i thi???u</label>
                            <input onChange={handleLowArea} />
                        </div>

                        <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <label >Di???n t??ch t???i ??a</label>
                            <input onChange={handleHighArea} />
                        </div>
                    </div>
                    <button onClick={handleSearch} className="bg-blue-500 mt-4 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        T??m Ki???m
                    </button>
                </div>
            </div>

            <div className="title-addr">T??m ki???m nh?? tr??? theo ?????a ch??? ph??? bi???n</div>
            <div>
                <ul className="list-home">
                    <img onClick={() => {setCityN("H?? N???i"); handleClickCity(cityN)}} src="https://sanvemaybay.vn/includes/uploads/2016/12/ve-may-bay-di-ha-noi-gia-re-tham-quan-ho-hoan-kiem-2.jpg" alt="" />
                    <img onClick={() => {setCityN("???? N???ng"); handleClickCity(cityN)}} src="https://i-dulich.vnecdn.net/2020/07/01/shutterstock-1169930359-4299-1593590420.jpg" alt="" />
                    <img onClick={() => {setCityN("S??i G??n"); handleClickCity(cityN)}} src="https://tphcm.cdnchinhphu.vn/Uploaded/tranthithom/2017_07_06/TPHCM.jpg" alt="" />
                    <img onClick={() => {setCityN("H???i Ph??ng"); handleClickCity(cityN)}} src="https://hdproland.com/media/posts/ban-do-hai-phong.jpg" alt="" />
                    <img onClick={() => {setCityN("Hu???"); handleClickCity(cityN)}} src="https://file3.qdnd.vn/data/images/0/2022/06/17/vuongha/tha_7400%20sua%202.jpg?dpi=150&quality=100&w=870" alt=""/>

                </ul>
            </div>

            <div>
                <h2 className="title">{cityN == null ? `Nh?? tr??? m???i nh???t` : `Nh?? tr??? m???i nh???t t???i ${cityN}`}</h2>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {boardingRooms.map((item, index) => {
                    return (
                        <div className="flex flex-col card" key={index}>
                            <img onClick={() => { handleClickItem(item.id)}} src="https://wedo.vn/wp-content/uploads/2018/12/chi-phi-nha-tro-moi-xay-can-tho-2-370x260.jpg" alt="" />
                            <h4 className="name">{item.name}</h4>
                            {/*<h1 className="description">{item.description}</h1>*/}
                            <img className="addr-icon" src="https://cdn-icons-png.flaticon.com/512/1275/1275302.png"/>
                            <p className="address"> {item.address}</p>
                            <img className="desc" src="https://www.seekpng.com/png/full/520-5202827_luxembourg-residents-house-land-icon-png.png"/>
                            <p className="area" >{item.area} m2</p>
                            <button >
                                Gi?? ti???n : {item.room_price}
                            </button>
                        </div>
                    )
                })}
            </div>

        </>

    )
}   
