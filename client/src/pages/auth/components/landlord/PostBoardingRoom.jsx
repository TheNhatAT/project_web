import './styles.css'
const PostBoardingRoom = () => {
    return (
        <>
            <div className='border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20'>
                <div className='bg-blue-600 w-full h-8'>Địa chỉ nhà trọ cho thuê</div>
                <div className='text-black ml-5'>
                    <span>Tỉnh/Thành phố</span>
                    <form >
                        <select className='shadow rounded w-1/4 py-2 px-3 text-gray-700 focus:shadow-outline' name="district">
                        <option value="Ha Noi">Hà Nội</option>
                        <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                     </select>
                    </form>
                </div>
                <div className='district'>
                    <span>Quận/Huyện</span>
                    <form>
                    <select className='shadow rounded w-1/2 py-2 px-3 text-gray-700 focus:shadow-outline' name="district">
                        <option value="Ha Noi">Hai Bà Trưng</option>
                        <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                     </select>
                    </form>
                </div>
                <div className='text-black ml-5'>
                    <span>Phường/Xã</span>
                    <form>
                    <select className='shadow rounded w-1/4 py-2 px-3 text-gray-700 focus:shadow-outline' name="district">
                        <option value="Ha Noi">Bách Khoa</option>
                        <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                     </select>
                    </form>
                </div>
                <div className=' text-black ml-5'>
                    <span>Địa chỉ</span><br/>
                    <textarea className='shadow rounded w-1/2 py-2 px-3 text-gray-700 focus:shadow-outline' placeholder="Điền địa chỉ phòng trọ"></textarea>
                </div>
            </div>
            <div className='border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20'>
                <div className='bg-blue-600 w-full h-8'>Thông tin cho thuê</div>
                <div className='text-black ml-5'>
                    <span>Tiêu đề tin</span><br/>
                    <input/>
                </div>
                <div className='chuyen-muc'>
                    <span >Chuyên mục</span>
                    <form>
                        <select id="district" name="district">
                        <option value="Ha Noi">Hà Nội</option>
                        <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                     </select>
                    </form>
                </div>
                <div className='text-black ml-5'>
                    <span>Diện tích</span> <br/>
                    <input/>
                </div>
                <div className='gia-thue'>
                    <span>Giá cho thuê</span><br/>
                    <input/>
                </div>
                <div className='text-black ml-5'>
                    <span>Nội dung</span><br/>
                    <textarea></textarea>
                </div>
                <div className='text-black ml-5'>
                    <span>Tên liên hệ</span><br/>
                    <input/>
                </div>
                <div className='sdt mb-5'>
                    <span>Số điện thoại</span><br/>
                    <input/>
                </div>
            </div>
            <div className='border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20'>
                <div className='bg-blue-600 w-full h-8'>Hình ảnh</div>
                <img className='w-20 h-20 mt-2 mb-5 ml-2' src='https://icon-library.com/images/img-icon/img-icon-11.jpg' />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-2 mb-2 px-4 rounded'>Upload ảnh</button>
            </div>
            
            <div className='border-4 mt-6 text-white font-bold border-blue-600 w-3/4 rounded ml-20'>
                <div className='bg-blue-600 w-full h-8'>Lịch đăng tin</div>
                <table className='text-black font-normal'>
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
                    <span className='text-black ml-5'>Loại tin</span>
                    <form className='text-black ml-5'>
                        <select id="new" name="new">
                        <option value="Tin HOT">Tin HOT</option>
                        <option value="Tin VIP 1">Tin VIP 1</option>
                        <option value="Tin VIP 2">Tin VIP 2</option>
                        <option value="Tin thường">Tin thường</option>
                     </select>
                    </form>
                </div>
                <div>
                    <span className='text-black ml-5'>Gói tin</span>
                    <form className='text-black ml-5'>
                        <select id="" name="">
                        <option value="Theo ngày">Đăng tin theo ngày</option>
                        <option value="Theo tuần">Đăng tin theo tuần</option>
                        <option value="Theo tháng">Dăng tin theo tháng</option>
                     </select>
                    </form>
                </div>
                <div>
                    <span className='text-black ml-5'>Thời gian đăng</span>
                    <form className='ml-5'>
                        <input className='mb-5 text-black' placeholder="nhập theo đơn vị gói tin bạn chọn"/>
                    </form>
                </div>
            </div>
            <button className='button'>Đăng tin</button>
        </>
    )
}
export default PostBoardingRoom;