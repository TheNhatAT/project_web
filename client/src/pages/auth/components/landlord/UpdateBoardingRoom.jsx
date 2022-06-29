import "./styles.css";
const UpdateBoardingRoom = () => {
  return (
    <>
      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Địa chỉ nhà trọ cho thuê</div>
        <div className="text-black ml-5">
          <span>Tỉnh/Thành phố</span>
          <form>
            <select
              className="shadow background-form-select rounded w-1/3 py-2 px-3 text-gray-700 focus:shadow-outline"
              name="district"
            >
              <option value="Ha Noi">Hà Nội</option>
              <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </form>
        </div>
        <div className="district">
          <span>Quận/Huyện</span>
          <form>
            <select
              className="shadow background-form-select rounded w-3/4 py-2 px-3 text-gray-700 focus:shadow-outline"
              name="district"
            >
              <option value="Ha Noi">Hai Bà Trưng</option>
              <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </form>
        </div>
        <div className="text-black ml-5">
          <span>Phường/Xã</span>
          <form>
            <select
              className="shadow background-form-select rounded w-1/3 py-2 px-3 text-gray-700 focus:shadow-outline"
              name="district"
            >
              <option value="Ha Noi">Bách Khoa</option>
              <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </form>
        </div>
        <div className=" text-black ml-5">
          <span>Địa chỉ</span>
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
          <span>Tiêu đề tin</span>
          <br />
          <input className="input-form" />
        </div>
        <div className="chuyen-muc">
          <span>Chuyên mục</span>
          <form>
            <select
              className="shadow background-form-select rounded w-3/4 py-2 px-3 text-gray-700 focus:shadow-outline"
              id="district"
              name="district"
            >
              <option value="Chung cư">Chung cư</option>
              <option value="Phòng trọ">Phòng trọ</option>
              <option value="Nhà nguyên căn">Nhà nguyên căn</option>
            </select>
          </form>
        </div>
        <div className="text-black ml-5">
          <span>Diện tích</span> <br />
          <input className="input-form" />
        </div>
        <div className="gia-thue">
          <span>Giá cho thuê</span>
          <br />
          <input className="input-form-right" />
        </div>
        <div className="text-black ml-5">
          <span>Nội dung</span>
          <br />
          <textarea></textarea>
        </div>
        <div className="text-black ml-5">
          <span>Tên liên hệ</span>
          <br />
          <input className="input-form" />
        </div>
        <div className="sdt mb-5">
          <span>Số điện thoại</span>
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
        <div className="bg-blue-600 w-full h-8">Người thuê</div>

        <table className="text-black font-normal">
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

      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Lịch đăng tin</div>
        <div>
          <span className="text-black ml-5">Loại tin</span>
          <form className="text-black ml-5">
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
          </form>
        </div>
        <div>
          <span className="text-black ml-5">Gói tin</span>
          <form className="text-black ml-5">
            <select
              className="shadow background-form-select rounded w-1/3 py-2 px-3 text-gray-700 focus:shadow-outline"
              id=""
              name=""
            >
              <option value="Theo ngày">Đăng tin theo ngày</option>
              <option value="Theo tuần">Đăng tin theo tuần</option>
              <option value="Theo tháng">Dăng tin theo tháng</option>
            </select>
          </form>
        </div>
        <div>
          <span className="text-black ml-5">Thời gian đăng</span>
          <form className="ml-5">
            <input
              className="mb-5 input-form text-black"
              placeholder="nhập theo đơn vị gói tin bạn chọn"
            />
          </form>
        </div>
      </div>
      <button className="button">Đăng tin</button>
    </>
  );
};
export default UpdateBoardingRoom;
