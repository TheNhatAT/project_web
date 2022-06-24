const UpdateBoardingRoom = () => {
    return (
        <>
            <div>
                <div>Địa chỉ nhà trọ</div>
                <div>
                    <span>Tỉnh/Thành phố</span>
                    <form>
                        <select id="district" name="district">
                        <option value="Ha Noi">Hà Nội</option>
                        <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                     </select>
                    </form>
                </div>
                <div>
                    <span>Quận/Huyện</span>
                    <form>

                    </form>
                </div>
                <div>
                    <span>Phường/Xã</span>
                    <form>

                    </form>
                </div>
                <div>
                    <span>Địa chỉ</span>
                    <textarea placeholder="Điền địa chỉ phòng trọ"></textarea>
                </div>
            </div>
            <div>
                <div>Thông tin cho thuê</div>
                <div>
                    <span>Tiêu đề tin</span>
                    <input/>
                </div>
                <div>
                    <span>Chuyên mục</span>
                    <form>
                        <select id="district" name="district">
                        <option value="Ha Noi">Hà Nội</option>
                        <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                     </select>
                    </form>
                </div>
                <div>
                    <span>Diện tích</span>
                    <input/>
                </div>
                <div>
                    <span>Giá cho thuê</span>
                    <input/>
                </div>
                <div>
                    <span>Nội dung</span>
                    <textarea></textarea>
                </div>
                <div>
                    <span>Tên liên hệ</span>
                    <input/>
                </div>
                <div>
                    <span>Số điện thoại</span>
                    <input/>
                </div>
            </div>
            <div>
                <div>Hình ảnh</div>
            </div>
            <div>
                <div>Người thuê</div>
                <table>
                    <tr>
                        <th>Họ và tên</th>
                        <th>CCCD</th>
                        <th>SĐT</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <th>Jackuno</th>
                        <th>090909090</th>
                        <th>0322454656</th>
                        <th><button>Xóa</button><button>Update</button></th>
                    </tr>
                </table>
            </div>
            <div>
                <h3>Lịch đăng tin</h3>
                
                <div>
                    <span>Loại tin</span>
                    <form>
                        <select id="new" name="new">
                        <option value="Tin HOT">Tin HOT</option>
                        <option value="Tin VIP 1">Tin VIP 1</option>
                        <option value="Tin VIP 2">Tin VIP 2</option>
                        <option value="Tin thường">Tin thường</option>
                     </select>
                    </form>
                </div>
                <div>
                    <span>Gói tin</span>
                    <form>
                        <select id="" name="">
                        <option value="Theo ngày">Đăng tin theo ngày</option>
                        <option value="Theo tuần">Đăng tin theo tuần</option>
                        <option value="Theo tháng">Dăng tin theo tháng</option>
                     </select>
                    </form>
                </div>
                <div>
                    <span>Thời gian đăng</span>
                    <form>
                        <input placeholder="nhập theo đơn vị gói tin bạn chọn"/>
                    </form>
                </div>
                <button>Cập nhật tin</button>
            </div>
        </>
    )
}
export default UpdateBoardingRoom;