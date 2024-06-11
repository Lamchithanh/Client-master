import React from "react";
import "../AdiminCss/Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import logo from "../../../assets/imgs/logo2.png";

const Sidebar = () => {
    return (
        <div>
            <div class="Admin-sidebar">
                <div class="Admin-logo">
                <Link to="/" class="nav-item active">
                <img src={logo} alt="" />
                    </Link>
                   
                </div>
                <div class="Admin-nav">
                    <Link to="/Admin/AdminHome" class="nav-item active">
                        DASHBOARD
                    </Link>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="">
                                Quản lý
                            </Accordion.Header>
                            <Accordion.Body>
                                {" "}
                                <NavLink to="/Admin/AddBrand">
                                    <Button variant="outline-user">
                                        Brand
                                    </Button>{" "}
                                </NavLink>
                                <NavLink to="/Admin/AddProduct">
                                    <Button variant="outline-sanpham" className="btn-product-css">
                                        Product
                                    </Button>
                                </NavLink>

                                <NavLink to="/Admin/AdminUser">
                                    <Button variant="outline-user">
                                        User
                                    </Button>{" "}
                                </NavLink>
                                <NavLink to="/Admin/AdminDealhot">
                                    <Button variant="outline-dealhot" className="btn-deal-hot-css">
                                        Dealhot
                                    </Button>{" "}
                                </NavLink>
                                <NavLink to="/Admin/AddOrder">
                                    <Button variant="outline-sanpham" className="btn-product-css">
                                        Order
                                    </Button>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
