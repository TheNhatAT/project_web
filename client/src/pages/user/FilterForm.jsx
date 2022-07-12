import "../../App.css";

export default function FilterForm() {
    return (
        <div className="w-full md:w-3/3 shadow p-5 rounded-lg bg-white">

            <div className="flex items-center justify-between mt-4">
                <p className="title-filter">
                    Bộ lọc tìm kiếm
                </p>
            </div>

            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Tỉnh/Thành phố</option>
                        <option value="city-1">Hà Nội</option>
                        <option value="city-2">Hồ Chí Minh</option>
                    </select>

                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Quận/Huyện</option>
                        <option value="distric-1">Thanh Xuân</option>
                        <option value="distric-2">Hoàng Mai</option>
                        <option value="distric-3">Hai Bà Trưng</option>
                    </select>

                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Đường Phố</option>
                        <option value="street-1">Lương Khánh Thiện</option>
                        <option value="street-2">Nguyễn Đức Cảnh</option>
                        <option value="street-3">Tân Mai</option>
                        <option value="street-4">Giải Phóng</option>
                    </select>

                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Loại BĐS</option>
                        <option value="bds-1">BDS1</option>
                        <option value="bds-2">BDS2</option>
                        <option value="bds-3">BDS3</option>
                        <option value="bds-4">BDS4</option>

                    </select>

                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Mức giá</option>
                        <option value="1">1 bedroom</option>
                        <option value="2">2 bedrooms</option>
                        <option value="3">3 bedrooms</option>
                        <option value="4">4 bedrooms</option>
                        <option value="5">5 bedrooms</option>
                    </select>

                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                        <option value="">Diện tích</option>
                        <option value="1">1 bathroom</option>
                        <option value="2">2 bathrooms</option>
                        <option value="3">3 bathrooms</option>
                        <option value="4">4 bathrooms</option>
                        <option value="5">5 bathrooms</option>
                    </select>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tìm Kiếm
                    </button>
                </div>
            </div>
        </div>
    )
}
