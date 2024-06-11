import React, { useEffect, useState } from "react";
import "./Megavita.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsByBrands } from "../../../State/Product/Action";
import ProductCard from "../HomePage/ProductCard";
const Megavita = () => {
    const dispatch = useDispatch();
    const [selectedBrands, setSelectedBrands] = useState([]);
    const { products } = useSelector((store) => store);
    useEffect(() => {
        if (selectedBrands.length >= 0) {
            dispatch(findProductsByBrands({ brands: selectedBrands }));
        }
    }, [selectedBrands, dispatch]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedBrands((prevSelectedBrands) => [
                ...prevSelectedBrands,
                value,
            ]);
        } else {
            setSelectedBrands((prevSelectedBrands) =>
                prevSelectedBrands.filter((brand) => brand !== value)
            );
        }
    };
    return (
        <div>
            <div className="nav-head1">
                <div className="img-info">
                    <div className="img-megativa">
                        <img
                            src="https://cdn-beup.woka.io/uploads/banners/2022/07/12/Fado.VN_1657620516.133.jpg"
                            alt=""
                        />
                    </div>
                    <div className="nav-info">
                        <ul className="list-info">
                            <li>
                                <i className="icofont-check-circled" />
                                Mua hàng giá gốc
                            </li>
                            <li>
                                <i className="icofont-check-circled" />
                                Giao hàng thần tốc
                            </li>
                            <li>
                                <i className="icofont-check-circled" />
                                Miễn phí vận chuyển
                            </li>
                            <li>
                                <i className="icofont-check-circled" />
                                Đổi trả linh hoạt
                            </li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="select-country">
                <ul className="line-country">
                    <li>
                        <a href="#">
                            <img
                                width={48}
                                height={48}
                                src="https://img.icons8.com/color-glass/48/home.png"
                                alt="home"
                            />
                            <i>Tất cả</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                className="flags"
                                width={48}
                                height={48}
                                src="https://img.icons8.com/fluency/48/usa-circular.png"
                                alt="usa-circular"
                            />
                            <i>Mỹ</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                className="flags"
                                width={48}
                                height={48}
                                src="https://img.icons8.com/fluency/48/japan-circular.png"
                                alt="japan-circular"
                            />
                            <i>Nhật</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                className="flags"
                                width={48}
                                height={48}
                                src="https://img.icons8.com/fluency/48/germany-circular.png"
                                alt="germany-circular"
                            />
                            <i> Đức</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                className="flags"
                                width={48}
                                height={48}
                                src="https://img.icons8.com/fluency/48/great-britain-circular.png"
                                alt="great-britain-circular"
                            />
                            <i>Anh</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                className="flags"
                                width={48}
                                height={48}
                                src="https://img.icons8.com/fluency/48/australia-circular.png"
                                alt="australia-circular"
                            />
                            <i>Úc</i>
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
            <section className="menu-product">
                <div className="megavita-menu">
                    <br />
                    <div className="option-function">
                        <h3>Danh mục sản phẩm</h3>
                        <a href="#">
                            <div className="item-name">
                                Bổ sung Omega, vitamin, khoáng chất
                            </div>
                        </a>
                        <a href="#">
                            {" "}
                            <div className="item-name">Bồi bổ sức khỏe</div>
                        </a>
                        <a href="#">
                            {" "}
                            <div className="item-name">Gan, mật, phổi</div>
                        </a>
                        <a href="#">
                            <div className="item-name">
                                Giảm đau, hạ sốt, làm diệu cơn ho
                            </div>
                        </a>
                        <a href="#">
                            {" "}
                            <div className="item-name">Giảm cân</div>
                        </a>
                        <a href="#">
                            {" "}
                            <div className="item-name">Hổ trợ hệ tiêu hóa</div>
                        </a>
                        <hr />
                    </div>
                    <h3>Thương hiệu</h3>
                    {/* <ul className="megavita-trademark">
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Horbaach
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Swanson
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Doctor Best
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Fien japan
            </label>
            <br />
            <label className="cyberpunk-checkbox-label">
              <input type="checkbox" className="cyberpunk-checkbox" />
              Now Food
            </label>
            <br />
          </ul> */}
                    <ul className="megavita-trademark">
                        {[
                            "Horbaach",
                            "Swanson",
                            "Doctor Best",
                            "Fien japan",
                            "Now Food",
                        ].map((brand) => (
                            <li key={brand}>
                                <label className="cyberpunk-checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="cyberpunk-checkbox"
                                        value={brand}
                                        onChange={handleCheckboxChange}
                                    />
                                    {brand}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <h3>Dịch vụ &amp; khuyến mãi</h3>
                    <div className="megavita-trademark">
                        <label className="cyberpunk-checkbox-label">
                            <input
                                type="checkbox"
                                className="cyberpunk-checkbox"
                            />
                            Đang giảm giá
                        </label>
                        <br />
                        <label className="cyberpunk-checkbox-label">
                            <input
                                type="checkbox"
                                className="cyberpunk-checkbox"
                            />
                            T&T choice
                        </label>
                    </div>
                </div>

                <div className="megavita-product">
                    {Array.isArray(products?.products) &&
                        products.products.map((products) => (
                            <ProductCard
                                products={products}
                                key={products.id}
                            />
                        ))}
                </div>
            </section>

            {/* go top */}
        </div>
    );
};

export default Megavita;
