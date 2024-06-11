import React, { useEffect, useState } from "react";
import "./Filterproduct.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsByCategory } from "../../../State/Product/Action";
import { searchProductsBySoldAt } from "../../../State/Product/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";

const Filterproduct = () => {
    const updata = () => toast("Đang được cập nhật!");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const param = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store);

    useEffect(() => {
        const data = {
            category: param.lavelThree,
        };
        dispatch(findProductsByCategory(data));
    }, [param.lavelThree]);
    const handleSoldAt = (soldAt) => {
        dispatch(searchProductsBySoldAt(soldAt));
        navigate("/filterproduct");
    };
    return (
        <div>
            <main className="select-col">
                <section>
                    <ul className="made-in-country">
                        <label style={{ fontSize: "20px", fontWeight: 600 }}>
                            Sản phẩm
                        </label>
                        <Link to="/filterproduct">
                            <li onClick={() => handleSoldAt("Việt Nam")}>
                                Việt Nam
                            </li>
                        </Link>
                        <Link to="/filterproduct">
                            <li onClick={() => handleSoldAt("Mỹ")}>Mỹ</li>
                        </Link>
                        <Link to="/filterproduct">
                            <li onClick={() => handleSoldAt("Nhật")}>Nhật</li>
                        </Link>
                        <Link to="/filterproduct">
                            <li onClick={() => handleSoldAt("Đức")}>Đức</li>
                        </Link>
                        <Link to="/filterproduct">
                            <li onClick={() => handleSoldAt("Anh")}>Anh</li>
                        </Link>
                        <Link onClick={updata} to="">
                            <li>Giao hàng</li>
                        </Link>
                        <Link onClick={updata} to="">
                            <li>Hàng cao cấp</li>
                        </Link>
                        <Link to="/">
                            <li>Tất cả</li>
                        </Link>
                        <ToastContainer />
                    </ul>
                </section>
                <section>
                    <ul className="title-product">
                        <li>Kết quả tìm kiếm cho</li>
                        <li className="title-search-product">"Đồng hồ"</li>
                    </ul>
                    <ul className="list-card-result">
                        <li>Danh sách sản phẩm</li>
                        <li className="title-search-product">"đồng hồ"</li>
                        <li>chính hãng từ </li>
                        <li className="title-product-made-in"> Mỹ</li>
                    </ul>
                    <div className="list-search-product">
                        {Array.isArray(products?.products) &&
                            products.products.map((products) => (
                                <ProductCard
                                    products={products}
                                    key={products.id}
                                />
                            ))}
                    </div>
                </section>
            </main>
            <hr />
            <section className="info-depict">
                <div>
                    <p>
                        Với
                        <span className="totail-quantity-product select-county">
                            65,642
                        </span>{" "}
                        sản phẩm
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        được tìm thấy tại{" "}
                        <span className="title-product-made-in select-county">
                            Mỹ
                        </span>{" "}
                        , bạn sẽ có cơ hội mua sắm và sở hữu món đồ như ý phù
                        hợp nhu cầu cũng như túi tiền. Để tìm hiểu thêm về
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        hãy cùng theo dõi thông tin bên dưới.
                    </p>
                    <p>
                        Chọn Chọn
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        hàng hiệu chính hãng, chất lượng tại T&T hàng hiệu chính
                        hãng, chất lượng tại T&T
                    </p>
                    <p>
                        Là sàn TMĐT xuyên biên giới hàng đầu, T&T cam kết mang
                        đến sản phẩm chính hãng, đảm bảo chất lượng. Tất cả
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        đều có nguồn gốc xuất xứ rõ ràng đi kèm thông tin chi
                        tiết. Khi chọn mua, bạn có thể tham khảo và tìm được sản
                        phẩm như ý.
                    </p>
                    <p>
                        Bên cạnh đó, sản phẩm tại đây còn có nhiều chủng loại
                        với mức giá khác nhau. Tùy theo nhu cầu, sở thích, ngân
                        sách mà mỗi người sẽ có sự lựa chọn phù hợp.
                    </p>
                    <p>
                        Làm sao để chọn
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        phù hợp, đảm bảo chất lượng?
                    </p>
                    <p>
                        Rất nhiều sản phẩm
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        được tìm thấy từ{" "}
                        <span className="title-product-made-in select-county">
                            Mỹ
                        </span>{" "}
                        dành cho bạn, làm sao để chọn được món đồ phù hợp ưng ý
                        vừa đảm bảo chất lượng vừa có giá cả phù hợp. Dưới đây
                        là những bí quyết đơn giản mà bạn có thể bỏ túi khi mua
                        sắm sản phẩm này
                    </p>
                    <p>Xem kỹ thông tin sản phẩm</p>
                    <p>
                        Trước khi chọn mua, bạn cần phải xem kỹ thông tin của
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>
                        . Tất cả thông tin về sản phẩm sẽ được thể hiện đầy đủ,
                        minh bạch và rõ ràng trên website. Như vậy, bạn mới có
                        thể dễ dàng đưa ra quyết định và đưa ra lựa chọn thích
                        hợp.
                    </p>
                    <p>Chú ý mức độ độ đánh giá của sản phẩm</p>
                    <p>
                        Dưới tên sản phẩm hiển thị đều có phần đánh giá của
                        người mua. Dựa vào đó bạn có thể dễ dàng chọn sản phẩm
                        chất lượng cho bản thân. <br />- Những sản phẩm có số
                        người mua cao và được đánh giá tốt (4-5 sao) của người
                        dùng bạn nên ưu tiên chọn mua. <br />- Những sản phẩm có
                        đánh giá từ 3 sao trở xuống và rất ít người mua thì cần
                        phải cân nhắc và tìm hiểu kỹ trước khi lựa chọn để dễ
                        dàng sở hữu được món đồ ưng ý.
                    </p>
                    <p>Tham khảo mức giá từ các nhà cung cấp</p>
                    <p>
                        Mức giá của quần áo nữ được hiển thị bên dưới tên sản
                        phẩm, giá bạn thấy sẽ bằng giá bạn trả khi mua hàng, giá
                        sản phẩm luôn cập nhật mới chuẩn xác theo thời gian. Lúc
                        này, bạn có thể quan sát và tìm ra sản phẩm phù hợp để
                        cho vào giỏ hàng. Ngoài ra bạn cũng lưu ý giá ưu đãi,
                        T&T luôn luôn cập nhật các chương trình ưu đãi hấp dẫn
                        nhằm mang đến cho khách hàng trải nghiệm mua sắm tốt
                        nhất với mức giá phải chăng.
                    </p>
                    <p>
                        Sản phẩm
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        có giá bao nhiêu?
                    </p>
                    <p>
                        Có lẽ khi chọn mua bất kỳ sản phẩm nào, mọi người sẽ băn
                        khoăn về giá cả. Bạn có thể tham khảo mức giá của
                        <span className="totail-quantity-product select-county">
                            65,642
                        </span>{" "}
                        sản phẩm này và cân nhắc lựa chọn. Đồng thời, hãy click
                        vào bên trong để xem xét thêm thông tin chi tiết cũng
                        như mức giá do các nhà bán khác cung cấp.
                    </p>
                    <p>
                        Góc phải bên cạnh thông tin là phần hiển thị các nhà
                        cung cấp khác với mức giá khác nhau và có sự chênh lệch.
                        Tại đây, bạn có thể so sánh giá bán của các đơn vị bán
                        này. Từ đó, cân nhắc và quyết định chọn mua sản phẩm
                        chất lượng hợp với túi tiền.
                    </p>
                    <p>
                        Mua{" "}
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        ở đâu đảm bảo chính hãng, giá tốt?
                    </p>
                    <p>
                        Như mọi người đã biết, tình trạng hàng giả, hàng nhái,
                        hàng kém chất lượng trà trộn vào thị trường ngày càng
                        phổ biến với chiêu trò tinh vi. Rất nhiều nơi vì một
                        chút lợi nhuận mà bỏ qua lợi ích của khách hàng. Chính
                        điều này đã khiến, việc tìm kiếm nơi bán hàng hiệu chính
                        hãng trở nên khó khăn hơn. Vậy khi có nhu cầu, chúng ta
                        nên mua sản phẩm
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        ở đâu đảm bảo chất lượng, chính hãng với giá tốt?
                    </p>
                    <p>
                        Sàn TMĐT xuyên biên giới <b>T&T.vn</b> với hàng tỷ sản
                        phẩm từ
                        <span className="title-product-made-in select-county">
                            Mỹ
                        </span>
                        , Nhật, Anh, Đức, Úc,...sẽ giúp bạn chọn được
                        <span className="title-search-product name-search">
                            quần áo nữ
                        </span>{" "}
                        như ý. Không chỉ đảm bảo chất lượng, cam kết nguồn gốc,
                        T&T còn mang đến rất nhiều chương trình hấp dẫn dành cho
                        khách hàng; đặc biệt là các ngày hội mua sắm lớn như:
                        Primeday, Black Friday, Cyber Monday,... Khi mua vào
                        thời điểm này, khách hàng sẽ nhận được nhiều voucher
                        khuyến mãi cùng nhiều ưu đãi bất ngờ. Đi kèm với đó là
                        chương trình tích điểm đổi mã giảm giá.
                    </p>
                    <p>
                        Bên cạnh đó, khách hàng khi mua sắm tại T&T còn có cơ
                        hội là thành viên của T&T VIP CLUB với nhiều đặc quyền
                        và ưu đãi riêng có 1-0-2 như nhận chiết khấu trực tiếp
                        trên từng sản phẩm, ưu tiên hỗ trợ nhanh chóng, hỗ trợ
                        vận chuyển siêu tốc, nhận quà mừng sinh nhật,...
                    </p>
                    <p>
                        Ngoài ra, tại T&T, mọi người còn dễ dàng thanh toán với
                        nhiều hình thức khác nhau như: <br />
                        - Thanh toán trực tuyến <br />
                        - Chuyển khoản cho T&T, <br />
                        - Thanh toán qua cổng VNPAY <br />
                        - Thanh toán trả góp 0% qua tín dụng <br />- …
                    </p>
                    <p>
                        Rất nhiều <span /> và các sản phẩm hàng hiệu chính hãng
                        từ nhiều ngành hàng khác nhau như thời trang, công nghệ,
                        điện tử, gia dụng, chăm sóc sức khỏe - sắc đẹp, đồ
                        chơi,...từ các thương hiệu nổi tiếng khác nhau có trên
                        T&T cho bạn thoải sức mua sắm. Nếu bạn đang muốn sở hữu
                        sản phẩm này hay bất kỳ mặt hàng nào từ
                        <span className="title-product-made-in select-county">
                            Mỹ
                        </span>
                        , Nhật, Anh, Đức, Úc,...thì còn chần chờ gì mà không
                        truy cập và trải nghiệm ngay.
                    </p>
                </div>
            </section>

            {/* go top */}
        </div>
    );
};

export default Filterproduct;
