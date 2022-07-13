
import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
    const redirectPagePath = location.pathname + location.search;
    const id = redirectPagePath[redirectPagePath.length - 1];

  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
      setCity(response.data);
      
    });
  }, []);

  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
        return await axios.get(`http://localhost:8000/boarding-rooms/id/${id}`);
    }
    fetchData().then((res) => {
        console.log('data: ', res.data.content);
        setBoardingRoom(res.data.content.boarding_room);
        setUsers(res.data.content.owner);
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
            value={boardingRoom.name}
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
            value={boardingRoom.category}
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
            value={boardingRoom.area}
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
            value={boardingRoom.room_price}
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, room_price: e.target.value })
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
            value={boardingRoom.description}
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, description: e.target.value })
            }
          ></textarea>
        </div>
      </div>

      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Hình ảnh</div>
        <img
          className="w-20 h-20 mt-2 mb-5 ml-2"
          src="https://icon-library.com/images/img-icon/img-icon-11.jpg"
        />
        <button className="upload-btn">Upload ảnh</button>
      </div>
      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Người thuê</div>
        <Link to={'/boarding-room/user'}><button className="update-btn mt-3 mb-3 ml-5" >Thêm người</button></Link>
        <table className="text-black font-normal">
          {

          }
          <tr>
            <th>Họ tên</th>
            <th>CCCD</th>
            <th>SĐT</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Nguyễn Văn A</td>
            <td>03119098276</td>
            <td>0977666554</td>
            <td>
              <button className="update-btn">Cập nhật</button>
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>Nguyễn Văn B</td>
            <td>03130085644</td>
            <td>0313456789</td>
            <td>
              <button className="update-btn">Cập nhật</button>
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>Nguyễn Văn C</td>
            <td>03130085333</td>
            <td>0313657789</td>
            <td>
              <button className="update-btn">Cập nhật</button>
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
        </table>
      </div>

      <button className="button">Đăng tin</button>
      
    </>
  );
};
export default UpdateBoardingRoom;