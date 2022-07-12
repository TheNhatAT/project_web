import "./styles.css";
const PostFindARoomate = () => {
  return (
    <>
      <div className="border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20">
        <div className="bg-blue-600 w-full h-8">Địa chỉ nhà trọ</div>
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
          <input className="input-form" />
        </div>

        <div className="text-black ml-5">
          <span>Diện tích</span> <br />
          <input className="input-form" />
        </div>
        <div className="text-black ml-5">
          <span>Giá cho thuê</span>
          <br />
          <input className="input-form" />
        </div>
        <div className="text-black ml-5 mb-10">
          <span>Mô tả</span>
          <br />
          <textarea></textarea>
        </div>
      </div>

      <button className="button">Đăng tin</button>
    </>
  );
};
export default PostFindARoomate;
