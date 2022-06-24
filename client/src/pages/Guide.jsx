// import {Link} from "react-router-dom";

import {Link} from "react-router-dom";

export default function Guide() {
    
    return (
        <>
            <h1 className="font-bold px-10">Manual:</h1>
            <div className="px-20">
                <div>
                    <h2 className="font-bold">Hướng dẫn đăng tin cho thuê trọ (đối với người thuê trọ)</h2>
                    <p className="px-10">
                        Chào bạn, sau đây là hướng dẫn sử dụng cho thành viên website của chúng tôi: <br></br>
                        Nếu bạn chưa có tài khoản, hãy <Link className="text-green-600" to="/register">Đăng ký</Link> tại đây trước khi bắt đầu đăng tin mới. <br></br>
                        Nếu đã có tài khoản, sau khi <Link className="text-green-600" to="/login">Đăng nhập</Link> vào website, bạn bấm nút <Link className="text-green-600" to="/">Đăng tin</Link> để bắt đầu. <br></br>
                        Khi bạn đăng tin, các bạn đọc kỹ mô tả từng bước, nhập đầy đủ và chính xác nội dung cho tin đăng, đặc biệt là mục Giá và Diện tích. 
                        Những tin có nội dung hình ảnh rõ ràng, đầy đủ sẽ có tỉ lệ xem cao hơn 50%. <br></br>
                    </p>
                    <ul className="list-disc list-inside px-10"><h3 className="font-bold">Lưu ý khi đăng tin</h3>
                        <li>Điền đầy đủ các thông tin bắt buộc vào các ô nhập liệu trong phần đăng tin.</li>
                        <li>Phần giá cho thuê, vui lòng nhập chính xác 1 giá duy nhất và chọn đúng đơn vị giá là triệu/tháng. Ví dụ:
                            <ul className="list-disc list-inside">
                                <li className="px-4">Bạn nhập giá thuê là: 3.5. Tương ứng với giá thuê là 3 triệu 500 nghìn đồng trong 1 tháng.</li>
                            </ul>
                        </li>
                        <li>Diện tích nhập đúng 1 diện tích duy nhất với đơn vị là m2. Ví dụ:
                            <ul className="list-disc list-inside">
                                <li className="px-4">Bạn nhập: 30. Tương ứng với diện tích phòng trọ cần cho thuê là 30m2.</li>
                            </ul>
                        </li>
                        <li>Sau khi nhập đầy đủ các thông tin, bấm ĐĂNG TIN NGAY và chờ vài giây để tin bạn hiển thị trên website, 
                            nếu đăng tin thành công hệ thống sẽ báo bạn đã đăng tin thành công, nếu hệ thống cảnh báo màu đỏ, 
                            các ô chọn màu bị sai, vui lòng nhập lại cho chính xác và bấm <Link className="text-green-600" to="/dangtin">Đăng tin ngay</Link> lại.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">Hướng dẫn tạo tài khoản cho người đã thuê trọ (đối với người cho thuê trọ)</h2>
                    <p className="px-10">
                        Sau khi đăng nhập vào tài khoản của bạn, chọn <Link className="text-green-600" to="/register">Tạo tài khoản cho người thuê trọ</Link> và làm theo hướng dẫn.
                    </p>
                    <ul className="list-disc list-inside px-10"><h3 className="font-bold">Lưu ý</h3>
                        <li>Nhập đúng định dạng tên đăng nhập và mật khẩu được yêu cầu. </li>
                        <li>Mỗi phòng trọ được cho thuê bởi 1 người đại diện, hãy chọn phòng trọ và nhập đúng thông tin của người đại diện thuê trọ đó.</li>
                        <li>Sau khi nhập đầy đủ thông tin, bấm <Link className="text-green-600" to="/register">Tạo tài khoản</Link>.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">Hướng dẫn đăng nhập và xem thông tin điện nước hàng tháng (đối với người đã thuê trọ)</h2>
                    <p className="px-10">
                        Nếu bạn đã thuê được 1 phòng trọ được đăng trên website của chúng tôi, bạn sẽ được người thuê trọ của bạn cung cấp tài khoản và mật khẩu để đăng nhập vào hệ thống. Hãy chọn <Link className="text-green-600" to="/login">Đăng nhập</Link>. <br></br>
                        Nếu bạn chưa thuê được trọ, hãy vào <Link className="text-green-600" to="/dashboard">Trang chủ</Link> để tìm trọ.
                    </p>
                    <p className="px-10">
                        Bạn sẽ xem được các thông tin: Thông tin tiền trọ, điện nước hàng tháng,.., thống kê tiền đã thanh toán,..
                    </p>
                </div>
            </div>
        </>
    );
}