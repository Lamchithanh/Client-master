import React, { useEffect, useState } from "react";
import "./UserFillter.css";
import Editinfouser from "./Editinfouser";
import Example from "../Cart/modal";
import { getUser, updateUserProfile } from "../../../State/Auth/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
    findAllProductFavourite,
    removeFavourite,
} from "../../../State/Product/Action";

const UserFillter = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);
    const { products } = useSelector((store) => store);
    const [gender, setGender] = useState("");
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    useEffect(() => {
        if (auth.auth?.gender === "nam" || auth.auth?.gender === "nữ") {
            setGender(auth.auth?.gender);
        }
        dispatch(findAllProductFavourite());
    }, [auth]);

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
            <div>
                {" "}
                <Editinfouser />
            </div>

            <ul class="nav nav-tabs container" role="tablist">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                    >
                        Tài khoản
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu1">
                        Sổ địa chỉ
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu2">
                        Tài khoản trả trước
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu3">
                        Quản lý mua hàng
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu4">
                        Mã giảm giá
                    </a>
                </li>
                <li class="nav-item" id="product-like">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu5">
                        Sản phẩm yêu thích
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu6">
                        Đại sứ T&T
                    </a>
                </li>
            </ul>

            <div class="tab-content">
                <div id="home" class="container tab-pane active">
                    <br />
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
                <div id="menu1" class="container tab-pane fade">
                    <br />
                    <h3>Sổ địa chỉ</h3>
                    <img
                        src="https://st-fe-v2.fado.vn/desktop/image/character/empty-address-book.svg"
                        alt=""
                    />
                    <Example />
                </div>
                <div id="menu2" class="container tab-pane fade1">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                    <div></div>
                </div>
                <div id="menu3" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                </div>{" "}
                <div id="menu4" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                </div>{" "}
                <div id="menu5" class="container tab-pane fade">
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="3">Sản phẩm</th>
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
                    </table>
                  
                    <div className="danh-sach-sp-yeu-thich">
                        
                    </div>
                </div>{" "}
                <div id="menu6" class="container tab-pane fade">
                    <br />
                    {/* <h3>Hiện chưa cập nhật!</h3> */}
                </div>
            </div>
            <div>{/* <UserProfile /> */}</div>
        </div>
    );
};
export default UserFillter;
