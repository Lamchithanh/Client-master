import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { findAllBrand } from "../../../State/Product/Action";
import "./AdminUser.css";
import { getAllUserById } from "../../../State/Auth/Action";

const MoreUser = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    useEffect(() => {}, []);
    const goback=()=> {
      window.history.go(-1);
    }
    return (
        <div className="form-AddProduct">
            <div className="container back-home">
               <button onClick={goback}><i class="icofont-rounded-double-left"></i></button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20" }}>
                <h2
                    style={{
                        marginLeft: "50px",
                        marginTop: "30px",
                        paddingBottom: "30px",
                    }}
                >
                    User Information
                </h2>
                <br />
                <br />
                <br />
                <br />
            </div>
            <div class="container " id="container-Addproduct">
                <form action="" className="From-addproduct">
                    <label for="fname">Full Name</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.user.fullName}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname">Email</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.user.email}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname">Phone Number</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.user.phoneNumber}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname">City</label>
                    <input
                        className="address-css"
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.addresses?.city}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname" style={{ marginLeft: "20px" }}>
                        District
                    </label>
                    <input
                        className="address-css"
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.addresses?.district}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname" style={{ marginLeft: "20px" }}>
                        Ward
                    </label>
                    <input
                        className="address-css"
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.addresses?.ward}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname">Street Address</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.addresses?.streetAddress}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname">Date of birth</label>
                    <input
                        className="date-of-birth"
                        type="date"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.user.dateOfBirthDateTime}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />
                    <label for="fname" style={{ marginLeft: "50px" }}>
                        Create At
                    </label>
                    <input
                        className="date-of-birth"
                        type="date"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter your image..."
                        value={auth.user.createAt}
                        disabled={true}
                        style={{ backgroundColor: "white" }}
                    />

                    <div className="form-check-userfillter">
                        <div class="radio-group">
                            <input
                                class="radio-input"
                                name="gender"
                                id="radio1"
                                type="radio"
                                value="nam"
                                // checked={auth.auth?.gender === "nam"}
                                // onChange={handleGenderChange}
                                disabled={true}
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
                                disabled={true}

                                //   checked={auth.auth?.gender === "nữ"}
                                //   onChange={handleGenderChange}
                            />
                            <label class="radio-label" for="radio2">
                                <span class="radio-inner-circle"></span>
                                Nữ
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default MoreUser;
