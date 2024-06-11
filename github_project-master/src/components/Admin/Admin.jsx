import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./AdiminCss/Admin.css";
import Sidebar from "./AdminSidebar/Sidebar";
import AdminHome from "./AdminContent/AdminHome";
import AddProduct from "./AddProduct/AddProduct";
import AdminUser from "./AdminUser/AdminUser";
import AddBrand from "./AddProduct/AddBrand";
import AdminDealhot from "./AdminDealhot/AdminDealhot";
import AddOrder from "./AdminOrder/AddOrder";

const Admin = () => {
    return (
        <div className="Playout-Admin">
            <div className="header-container">
                <Sidebar />
            </div>
            <div className="main-container container">
                <Outlet />

                <Routes>
                    <Route index path="/AdminHome" element={<AdminHome />} />
                    <Route path="/AddProduct" element={<AddProduct />} />
                    <Route path="/AddBrand" element={<AddBrand />} />
                    <Route path="/AddOrder" element={<AddOrder />} />
                    <Route path="/AdminUser" element={<AdminUser />} />
                    <Route path="/AdminDealhot" element={<AdminDealhot />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
