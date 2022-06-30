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
  });
  const [city, setCity] = useState([]);
  const [cityname, setCityname] = useState("");
  const [districtname, setDistrictname] = useState("");
  const [subdistrictname, setSubdistrictname] = useState("");
  const [missingInforNoti, setMissingInforNoti] = useState(false);

  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/?depth=3").then((response) => {
      setCity(response.data);
    });
  }, [city]);

  async function addBoardingRoom(boardingRoom) {
    console.log("user: ", JSON.stringify(boardingRoom));
    return await axios.post("http://localhost:8000/boarding-rooms/add", {
      name: boardingRoom.name,
      room_price: boardingRoom.room_price,
      area: boardingRoom.area,
      description: boardingRoom.description,
      category: boardingRoom.category,
      address: cityname + ", " + districtname + ", " + subdistrictname,
    });
  }
  const handlecity = (event) => {
    const getcityname = event.target.value;
    setCityname(getcityname);
  };

  const handledistrict = (event) => {
    const getdistrictname = event.target.value;
    setDistrictname(getdistrictname);
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
    } catch (error) {
      console.log("error: ", error);
    }
  };
  /*useEffect( () => {
        axios.get(`https://provinces.open-api.vn/api/p/${}?depth=3`).then((response) =>{
            console.log(cityid)
            setDistrict(response.data.districts)
        })
    },[]);*/

  return (
    <>
      <div
        id="head"
        className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20"
      >
        <div className="bg-blue-600 w-full h-8">Địa chỉ nhà trọ cho thuê</div>
        <div className="text-black ml-5">
          <span>
            Tỉnh/Thành phố{" "}
            {cityname.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <div>
            <input
              className="input-form"
              onChange={(e) => handlecity(e)}
              name="city"
            ></input>
          </div>
        </div>
        <div className="district">
          <span>
            Quận/Huyện{" "}
            {districtname.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <div>
            <input
              className="input-form"
              onChange={(e) => handledistrict(e)}
              name="district"
            />
          </div>
        </div>
        <div className="text-black ml-5">
          <span>
            Phường/Xã{" "}
            {subdistrictname.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <div>
            <input
              className="input-form"
              onChange={(e) => handlesubdistrict(e)}
              name="subdistrict"
            ></input>
          </div>
        </div>
        <div className=" text-black ml-5">
          <span>Địa chỉ cụ thể </span>
          <br />
          <textarea
            className="shadow rounded w-3/4 py-2 px-3 text-gray-700 focus:shadow-outline"
            placeholder="Điền địa chỉ phòng trọ"
          ></textarea>
        </div>
      </div>

      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Thông tin cho thuê</div>
        <div className="text-black ml-5">
          <span>
            Tiêu đề tin{" "}
            {boardingRoom.name.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <br />
          <input
            name="name"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, name: e.target.value })
            }
            className="input-form"
          />
        </div>
        <div className="chuyen-muc">
          <span>
            Chuyên mục{" "}
            {boardingRoom.category.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <br />
          <select
            className="input-form"
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
        <div className="text-black ml-5">
          <span>
            Diện tích{" "}
            {boardingRoom.area.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
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
            {boardingRoom.room_price.length == 0 && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <br />
          <input
            name="room_price"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, room_price: e.target.value })
            }
            className="input-form-right"
          />
        </div>
        <div className="text-black ml-5">
          <span>Nội dung</span>
          <br />
          <textarea
            name="description"
            onChange={(e) =>
              setBoardingRoom({ ...boardingRoom, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="text-black ml-5">
          <span>
            Tên liên hệ{" "}
            {missingInforNoti && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <br />
          <input className="input-form" />
        </div>
        <div className="sdt mb-5">
          <span>
            Số điện thoại{" "}
            {missingInforNoti && (
              <div className="require">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <br />
          <input className="input-form-right" />
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
        <div className="bg-blue-600 w-full h-8">Lịch đăng tin</div>
        <table className="text-black font-normal">
          <tr>
            <th>Loại tin</th>
            <th>Gói ngày</th>
            <th>Gói tuần</th>
            <th>Gói tháng</th>
          </tr>
          <tr>
            <td>Tin HOT</td>
            <td>30.000 đ/ngày</td>
            <td>189.000 đ/tuần</td>
            <td>720.000 đ/tháng</td>
          </tr>
          <tr>
            <td>Tin VIP 1</td>
            <td>20.000 đ/ngày</td>
            <td>126.000 đ/tuần</td>
            <td>550.000 đ/tháng</td>
          </tr>
          <tr>
            <td>Tin VIP 2</td>
            <td>15.000 đ/ngày</td>
            <td>95.000 đ/tháng</td>
            <td>360.000 đ/tháng</td>
          </tr>
          <tr>
            <td>Tin thường</td>
            <td>2.000 đ/ngày</td>
            <td>12.000 đ/tuần</td>
            <td>48.000 đ/tháng</td>
          </tr>
        </table>
        <div>
          <span className="text-black ml-5">Loại tin</span>
          <div className="text-black ml-5">
            <select
              className="shadow background-form-select rounded w-1/3 py-2 px-3 text-gray-700 focus:shadow-outline"
              id="new"
              name="new"
            >
              <option value="Tin HOT">Tin HOT</option>
              <option value="Tin VIP 1">Tin VIP 1</option>
              <option value="Tin VIP 2">Tin VIP 2</option>
              <option value="Tin thường">Tin thường</option>
            </select>
          </div>
        </div>
        <div>
          <span className="text-black ml-5">Gói tin</span>
          <div className="text-black ml-5">
            <select
              className="shadow background-form-select rounded w-1/3 py-2 px-3 text-gray-700 focus:shadow-outline"
              id=""
              name=""
            >
              <option value="Theo ngày">Đăng tin theo ngày</option>
              <option value="Theo tuần">Đăng tin theo tuần</option>
              <option value="Theo tháng">Dăng tin theo tháng</option>
            </select>
          </div>
        </div>
        <div>
          <span className="text-black ml-5">
            Thời gian đăng{" "}
            {missingInforNoti && (
              <div className="requireFinal">* Thông tin này là bắt buộc</div>
            )}
          </span>
          <div className="ml-5">
            <input
              className="mb-5 input-form text-black"
              placeholder="nhập theo đơn vị gói tin bạn chọn"
            />
          </div>
        </div>
      </div>

      <button className="button" onClick={handleAddBoardingRoom} type="submit">
        Đăng tin
      </button>
    </>
  );
};
export default PostBoardingRoom;
