import "./styles.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
const PostFindARoomate = () => {
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
  const [cityname, setCityname] = useState("");
  const [districtname, setDistrictname] = useState("");
  const [subdistrictname, setSubdistrictname] = useState("");

  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
      setCity(response.data);
    });
  }, []);

  function addBoardingRoom(boardingRoom) {
    console.log("user: ", JSON.stringify(boardingRoom));
    axios.post("http://localhost:8000/boarding-rooms/add", {
      name: boardingRoom.name,
      room_price: boardingRoom.room_price,
      area: boardingRoom.area,
      description: boardingRoom.description,
      category: boardingRoom.category,
      address: cityname + ", " + districtname + ", " + subdistrictname,
      user_id: localStorage.getItem("userId")
    }).catch(error => {
      if (error)
        alert("Đăng tin tìm người ở ghép thất bại!")
      else
        alert("Đăng tin cho thuê nhà trọ thành công!")
    });
  }

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


  return (
    <>
      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Địa chỉ nhà trọ</div>
        <div className="text-black ml-5">
          <span>Tỉnh/Thành phố</span>
          <form>
            <select
                name="city"
                className="input-form mt-4"
                onChange={(e) => handlecity(e)}
            >
              <option value="">--Chọn tỉnh/tp--</option>
              {city.map((getcity, code) => (
                  <option key={code} value={getcity.name}>
                    {getcity.name}{" "}
                  </option>
              ))}
            </select>
          </form>
        </div>
        <div className="district">
          <span>Quận/Huyện</span>
          <form>
            <select
                name="district"
                className="input-form mt-4"
                onChange={(e) => handledistrict(e)}
            >
              <option value="">--Chọn quận/huyện--</option>
              {district.map((dist, code) => (
                  <option key={code} value={dist.name}>
                    {dist.name}{" "}
                  </option>
              ))}
            </select>
          </form>
        </div>
        <div className="text-black ml-5">
          <span>Phường/Xã</span>
          <form>
            <select
                name="city"
                className="input-form mt-4"
                onChange={(e) => handlesubdistrict(e)}
            >
              <option value="">--Chọn phường/xã--</option>
              {subdistrict.map((dist, code) => (
                  <option key={code} value={dist.name}>
                    {dist.name}{" "}
                  </option>
              ))}
            </select>
          </form>
        </div>
        <div className=" text-black ml-5">
          <span>Địa chỉ cụ thể</span>
          <br />
          <textarea
            className="shadow rounded w-3/4 py-2 px-3 text-gray-700 focus:shadow-outline"
            placeholder="Điền địa chỉ phòng trọ"
          ></textarea>
        </div>
      </div>
      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Thông tin</div>
        <div className="upload-img-in-find-roomate">
          <img
            className="w-20 h-20 mt-2 mb-5 ml-2"
            src="https://icon-library.com/images/img-icon/img-icon-11.jpg"
          />
          <button className="upload-btn">Upload ảnh</button>
        </div>
        <div className="find-roommate-infor text-black ml-5">
          <span>Tiêu đề tin</span>
          <br />
          <input onChange={(e) =>
                  setBoardingRoom({ ...boardingRoom, name: e.target.value })
              }
              className="input-form" />
        </div>

        <div className="text-black ml-5">
          <span>Diện tích</span> <br />
          <input onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, area: e.target.value })
          } className="input-form" />
        </div>
        <div className="text-black ml-5">
          <span>Giá cho thuê</span>
          <br />
          <input onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, room_price: e.target.value })
          } className="input-form" />
        </div>
        <div className="text-black ml-5 mb-10">
          <span>Mô tả</span>
          <br />
          <textarea onChange={(e) =>
              setBoardingRoom({...boardingRoom, description: e.target.value})
          }/>
        </div>
      </div>

      <button className="button">Đăng tin</button>
    </>
  );
};
export default PostFindARoomate;
