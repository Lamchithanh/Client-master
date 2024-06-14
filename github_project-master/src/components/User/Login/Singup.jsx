import React from "react";
import "./Singup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../State/Auth/Action";

const Singup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            fullName: data.get("fullName"),
            email: data.get("email"),
            phoneNumber: data.get("phoneNumber"),
            password: data.get("password"),
        };
        dispatch(register(userData));
        navigate("/login");
    };

    return (
        <div className="login-container">
            <main className="main-signup">
                <span
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "20px",
                        textDecoration: "none !important",
                    }}
                >
                    <Link to="/" style={{ textDecoration: "none !important" }}>
                        <i
                            className="icofont-long-arrow-left"
                            style={{
                                fontSize: "100px",
                                color: "#000",
                                textDecoration: "none",
                            }}
                        ></i>
                    </Link>
                </span>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>T&T</h1>
                    <div className="flex-column">
                        <label>Tên</label>
                    </div>
                    <div className="inputForm">
                        <i className="icofont-waiter-alt" />
                        <input
                            required
                            id="fullName"
                            name="fullName"
                            className="input"
                            placeholder="Nhập tên của bạn"
                            autoComplete="fullName"
                        />
                    </div>
                    <div className="flex-column">
                        <label>Email</label>
                    </div>
                    <div className="inputForm">
                        <svg
                            height={20}
                            viewBox="0 0 32 32"
                            width={20}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Layer_3" data-name="Layer 3">
                                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                            </g>
                        </svg>
                        <input
                            required
                            id="email"
                            name="email"
                            className="input"
                            placeholder="Nhập Email của bạn"
                            autoComplete="email"
                        />
                    </div>
                    <div className="flex-column">
                        <label>Mật khẩu</label>
                    </div>
                    <div className="inputForm">
                        <svg
                            height={20}
                            viewBox="-64 0 512 512"
                            width={20}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                        </svg>
                        <input
                            required
                            id="password"
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Nhập mật khẩu của bạn"
                            autoComplete="password"
                        />
                    </div>
                    <div className="flex-column">
                        <label>Số điện thoại</label>
                    </div>
                    <div className="inputForm">
                        <i className="icofont-phone"></i>
                        <input
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            className="input"
                            placeholder="Số điện thoại"
                            autoComplete="tel"
                        />
                    </div>
                    <div className="flex-row">
                        <div>
                            <input type="checkbox" />
                            <label>Nhớ tôi</label>
                        </div>
                    </div>
                    <button className="button-submit" type="submit">
                        Đăng ký
                    </button>
                    <p className="p line">
                        Bạn đã có tài khoản?
                        <span className="span">
                            <Link to="/login">Đăng nhập</Link>
                        </span>
                    </p>
                    <p className="p line">Hoặc với</p>
                    <div className="flex-row">
                        <button className="btn google">
                            <svg
                                version="1.1"
                                width={20}
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                            >
                                <path
                                    style={{ fill: "#fbbb00" }}
                                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
  C103.821,274.792,107.225,292.797,113.47,309.408z"
                                />
                                <path
                                    style={{ fill: "#518ef8" }}
                                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                                />
                                <path
                                    style={{ fill: "#28b446" }}
                                    d="M416.253,455.637l0.014,0.014C372.013,491.307,315.61,512,256,512
  c-97.226,0-180.906-55.172-223.491-137.682l80.961-66.91c22.313,60.192,79.802,103.678,142.53,103.678
  c27.466,0,53.206-7.511,75.251-20.646L416.253,455.637z"
                                />
                                <path
                                    style={{ fill: "#f14336" }}
                                    d="M419.404,56.568l-80.945,66.91c-22.736-14.59-50.014-23.182-78.459-23.182
  c-63.103,0-116.423,40.296-136.042,96.55L43.235,138.268h-0.014C85.34,54.664,165.586,0,256,0
  C317.243,0,374.103,22.126,419.404,56.568z"
                                />
                            </svg>
                        </button>
                        <button className="btn github">
                            <svg
                                height={20}
                                viewBox="0 0 16 16"
                                version="1.1"
                                width={20}
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                />
                            </svg>
                        </button>
                        <button className="btn facebook">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 310 310"
                                style={{ enableBackground: "new 0 0 310 310" }}
                                xmlSpace="preserve"
                                width={20}
                                height={20}
                            >
                                <path
                                    style={{ fill: "#3B5998" }}
                                    d="M81.703,165.51h29.268V310h58.008V165.765h39.107l5.967-46.446h-45.074l0.061-23.261
    c0-12.909,1.232-19.479,19.513-19.479h25.409V50.118h-40.539C111.451,50.118,81.703,78.238,81.703,118.625v25.916H50V191h31.703
    V165.51z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Singup;
