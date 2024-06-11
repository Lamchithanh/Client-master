import React, { useEffect } from "react";
import "./AdminHome.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../State/Admin/Action";

const AdminHome = () => {
    const dispatch = useDispatch();
    const { admin } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getData());
    }, []);
    return (
        <div className="Admin-main">
            <h2 style={{ marginTop: "30px" }}>Admin Application</h2>
            <div className="Admin-table-value">
                <div id="Product" className="Admin-card-table-value">
                    <h2>Sản phẩm</h2>
                    <div id="" className="Actual-data">
                        <img
                            width="96"
                            height="96"
                            src="https://img.icons8.com/pulsar-color/96/shopping-bag.png"
                            alt="shopping-bag"
                        />
                        <p className="item-data-right">
                            <strong>{admin.data.productQuantity}</strong>
                        </p>
                    </div>
                </div>
                <div id="User" className="Admin-card-table-value">
                    <h2>Người dùng</h2>
                    <div className="Actual-data">
                        <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/cotton/64/user.png"
                            alt="user"
                        />
                        <p className="item-data-right">
                            <strong>{admin.data.userQuantity}</strong>
                        </p>
                    </div>
                </div>{" "}
                <div id="Dealhot" className="Admin-card-table-value">
                    <h2>Dealhot</h2>
                    <div className="Actual-data">
                        <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/cotton/64/mega-sales--v2.png"
                            alt="mega-sales--v2"
                        />
                        <p className="item-data-right">
                            <strong>{admin.data.dealhotQuantity}</strong>
                        </p>
                    </div>
                </div>{" "}
                <div id="statistical" className="Admin-card-table-value">
                    <h2>Thống kê</h2>
                    <div className="Actual-data">
                        <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/dusk/64/price-tag-euro.png"
                            alt="price-tag-euro"
                        />
                        <p className="item-data-right">
                            <strong>
                                ${" "}
                                {admin.data.saleAmountQuantity
                                    ? `${Math.round(
                                          admin.data.saleAmountQuantity
                                      ).toLocaleString()},000 đ`
                                    : "0 đ"}
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <h5>Thông tin thêm</h5>
            <hr />
            <div className="Admin-show-add"></div>
        </div>
    );
};

export default AdminHome;
