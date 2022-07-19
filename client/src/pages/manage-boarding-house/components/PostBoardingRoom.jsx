import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PostBoardingRoom = () => {
  const [boardingRoom, setBoardingRoom] = useState({
    name: "",
    room_price: "",
    area: "",
    description: "",
    category: "",
    address: "",
    water_price: "",
    electricity_price:"",
    parking_price: "",
    other_price: ""
  });
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);
  const [cityname, setCityname] = useState("");
  const [districtname, setDistrictname] = useState("");
  const [subdistrictname, setSubdistrictname] = useState("");
  const [missingInforNoti, setMissingInforNoti] = useState(false);

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
        alert("Đăng tin cho thuê nhà trọ thất bại!")
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
  const handleAddBoardingRoom = async (e) => {
    e.preventDefault();
    if (
      boardingRoom.name.length == 0 ||
      boardingRoom.room_price.length == 0 ||
      boardingRoom.address.length ||
      0 ||
      boardingRoom.area.length == 0
    ) {
      setMissingInforNoti(true);
      alert("Bạn cần điền đầy đủ thông tin yêu cầu");
      return;
    }
    let res;
    try {
      res = await addBoardingRoom(boardingRoom);
      window.alert("Đăng tin thành công!")
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <div
        id="head"
        className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20"
      >
        <div className="bg-blue-600 w-full h-8">Địa chỉ nhà trọ cho thuê</div>
        <div className="text-black ml-5 mt-2">
          <span>
            Tỉnh/Thành phố{" "}
            <div className="require">* Thông tin này là bắt buộc</div>
          </span>
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
        </div>
        <div className="district">
          <span>
            Quận/Huyện{" "}
            <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <div>
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
          </div>
        </div>
        <div className="text-black ml-5 mt-3">
          <span>
            Phường/Xã <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <div>
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
          </div>
        </div>
        <div className=" text-black ml-5 mt-3">
          <span>Địa chỉ cụ thể </span>
          <br />
          <textarea
            className="shadow rounded w-3/4 py-2 px-3 text-gray-700 mt-3 focus:shadow-outline"
            placeholder="Điền địa chỉ phòng trọ"
          ></textarea>
        </div>
      </div>

      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Thông tin cho thuê</div>
        <div className="text-black ml-5 mt-2">
          <span>
            Tiêu đề tin{" "}
            <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <input
            name="name"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, name: e.target.value })
            }
            className="input-form -mt-1"
          />
        </div>
        <div className="chuyen-muc">
          <span>
            Chuyên mục{" "}
              <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <select
            className="input-form -mt-2"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, category: e.target.value })
            }
            name="category"
          >
            <option value="Chung cư">Chung cư</option>
            <option value="Phòng trọ">Phòng trọ</option>
            <option value="Nhà nguyên căn">Nhà nguyên căn</option>
          </select>
        </div>
        <div className="text-black ml-5 mt-4">
          <span>
            Diện tích{" "}
            <div className="require">* Thông tin này là bắt buộc</div>
          </span>{" "}
          <br />
          <input
            name="area"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, area: e.target.value })
            }
            className="input-form"
          />
        </div>
        <div className="gia-thue">
          <span>
            Giá cho thuê{" "}
              <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <input
            name="room_price"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, room_price: e.target.value })
            }
            className="input-form-right -mt-2"
          />
        </div>
        <div className="text-black ml-5">
          <span>
            Giá nước{" "}
              <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <input
            name="water_price"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, water_price: e.target.value })
            }
            className="input-form -mt-2"
          />
        </div>
        <div className="gia-thue">
          <span>
            Giá điện{" "}
              <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <input
            name="electricity_price"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, electricity_price: e.target.value })
            }
            className="input-form-right -mt-2"
          />
        </div>
        <div className="text-black ml-5">
          <span>
            Phí gửi xe{" "}
              <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <input
            name="parking_price"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, parking_price: e.target.value })
            }
            className="input-form -mt-2"
          />
        </div>
        <div className="gia-thue">
          <span>
            Phí dịch vụ {" "}
              <div className="require">* Thông tin này là bắt buộc</div>
          </span>
          <br />
          <input
            name="other_price"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, other_price: e.target.value })
            }
            className="input-form-right -mt-2"
          />
        </div>
        <div className="text-black ml-5 mt-5">
          <span>Nội dung</span>
          <br />
          <textarea
              className="mt-4"
              name="description"
              onChange={(e) =>
                  setBoardingRoom({...boardingRoom, description: e.target.value})
              }
            />
        </div>
      </div>

      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Hình ảnh</div>
        <img
          className="w-20 h-20 mt-2 mb-5 ml-2"
          src={"https://icon-library.com/images/img-icon/img-icon-11.jpg"}
        />
        <button className="upload-btn">Upload ảnh</button>
      </div>

      <button className="button" onClick={handleAddBoardingRoom} type="submit">
        Đăng tin
      </button>
    </>
  );
};
export default PostBoardingRoom;
