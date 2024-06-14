import React, { useEffect, useState } from "react";
import "./UserFillter.css";
import Editinfouser from "./Editinfouser";
import Example from "../Cart/modal";
import { getUser, updateUserProfile } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
    findAllProductFavourite,
    removeFavourite,
} from "../../../State/Product/Action";

const UserFillter = () => {
    const dispatch = useDispatch();
    const { auth, products } = useSelector((store) => store);
    const [gender, setGender] = useState("");

    useEffect(() => {
        dispatch(getUser());
        dispatch(findAllProductFavourite());
    }, [dispatch]);

    useEffect(() => {
        if (auth.auth?.gender === "nam" || auth.auth?.gender === "nữ") {
            setGender(auth.auth?.gender);
        }
    }, [auth]);

    useEffect(() => {
        // Cuộn lên đầu trang khi component được mount
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            fullName: data.get("fullName"),
            phoneNumber: data.get("phoneNumber"),
            dateOfBirthDateTime: data.get("dateOfBirthDateTime"),
            gender: gender,
        };
        dispatch(updateUserProfile(userData));
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleDelete = (productId) => {
        dispatch(removeFavourite(productId));
    };

    return (
        <div className="profile-main">
            <Editinfouser />
            <ul className="nav nav-tabs container" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                    >
                        Tài khoản
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">
                        Sổ địa chỉ
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu2">
                        Tài khoản trả trước
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu3">
                        Quản lý mua hàng
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu4">
                        Mã giảm giá
                    </a>
                </li>
                <li className="nav-item" id="product-like">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu5">
                        Sản phẩm yêu thích
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu6">
                        Đại sứ T&T
                    </a>
                </li>
            </ul>

            <div className="tab-content">
                <div id="home" className="container tab-pane active">
                    <div class="container btn-UserFillter mt-3">
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="collapse"
                            data-bs-target="#demo"
                        >
                            Thông tin tài khoản
                        </button>
                        <div id="demo" class="collapse content-UserFillter">
                            <h2>Thông tin tài khoản</h2>
                            <hr />
                            <form
                                action=""
                                className="form-content-UserFillter"
                                onSubmit={handleSubmit}
                            >
                                <p>Họ tên</p>
                                <input
                                    type="text"
                                    name="fullName"
                                    id=""
                                    defaultValue={auth.auth?.fullName}
                                />
                                <p>Số điện thoại</p>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    defaultValue={auth.auth?.phoneNumber}
                                />
                                <p>Email</p>
                                <input
                                    type="text"
                                    name="Email"
                                    id="Email"
                                    defaultValue={auth.auth?.email}
                                    disabled={true}
                                    style={{
                                        backgroundColor: "#c6c3c2",
                                    }}
                                />
                                <p>Ngày sinh</p>
                                <input
                                    className="date"
                                    type="date"
                                    name="dateOfBirthDateTime"
                                    id="dateOfBirthDateTime"
                                    defaultValue={
                                        auth.auth?.dateOfBirthDateTime
                                    }
                                />
                                <div className="form-check-userfillter">
                                    <div class="radio-group">
                                        <input
                                            class="radio-input"
                                            name="gender"
                                            id="radio1"
                                            type="radio"
                                            value="nam"
                                            checked={
                                                auth.auth?.gender === "nam"
                                            }
                                            onChange={handleGenderChange}
                                        />
                                        <label class="radio-label" for="radio1">
                                            <span class="radio-inner-circle"></span>
                                            Nam
                                        </label>

                                        <input
                                            class="radio-input"
                                            name="gender"
                                            id="radio2"
                                            type="radio"
                                            value="nữ"
                                            // checked={gender === "nữ"}
                                            // onClick={handleGenderNu}
                                            checked={auth.auth?.gender === "nữ"}
                                            onChange={handleGenderChange}
                                        />
                                        <label class="radio-label" for="radio2">
                                            <span class="radio-inner-circle"></span>
                                            Nữ
                                        </label>
                                    </div>
                                </div>
                                <div className="btn-xac-nhan-reset">
                                    <button type="submit">Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="container btn-UserFillter mt-3">
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="collapse"
                            data-bs-target="#demo1"
                        >
                            Thay đổi mật khẩu
                        </button>
                        <div id="demo1" class="collapse content-UserFillter">
                            <h2>Thay đổi Mật khẩu</h2>
                            <hr />
                            <form
                                action=""
                                className="form-content-UserFillter"
                            >
                                <p>Mật khẩu hiện tại</p>
                                <input type="text" name="" id="" />
                                <p>Mật khẩu mới</p>
                                <input type="text" name="" id="" />
                                <p>Nhập lại mặt khẩu mới</p>
                                <input type="text" name="" id="" />
                                <div className="btn-xac-nhan-reset">
                                    <button type="reset">Nhập lại</button>
                                    <button>Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="menu1" className="container tab-pane fade">
                    <h3>Sổ địa chỉ</h3>
                    <Example />
                </div>
                <div id="menu2" className="container tab-pane fade">
                    {/* Nội dung của tab Tài khoản trả trước */}
                </div>
                <div id="menu3" className="container tab-pane fade">
                    {/* Nội dung của tab Quản lý mua hàng */}
                </div>
                <div id="menu4" className="container tab-pane fade">
                    {/* Nội dung của tab Mã giảm giá */}
                </div>
                <div id="menu5" className="container tab-pane fade">
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="3">
                                    <h4>Sản phẩm</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(products?.products) &&
                                products.products.map((products) => (
                                    <div className="san-pham-yeu-thich">
                                        <div className="item-img-yeu-thich">
                                            <img
                                                src={products?.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item-name-yeu-thich">
                                            <h5>{products?.title}</h5>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleDelete(products?.id)
                                            }
                                        >
                                            Xóa
                                        </button>
                                        <ToastContainer />
                                    </div>
                                ))}
                        </tbody>
                        <div className="danh-sach-sp-yeu-thich"></div>
                    </table>
                </div>
                <div id="menu6" className="container tab-pane fade">
                    {/* Nội dung của tab Đại sứ T&T */}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserFillter;
