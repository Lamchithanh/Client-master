import React from "react";
import "./Assistant.css";
const Assistant = () => {
    return (
        <div>
            {/* assistant-shopping-smart */}
            <section className="assistant-shopping-smart">
                <div>
                    <h1>TRỢ LÝ MUA SẮM THÔNG MINH</h1>
                    <p>
                        Mang đến dịch vụ mua sắm khắp thế giới với phương châm
                        "Bảo đảm giao dịch - Sản phẩm <br />
                        chất lượng - Chăm sóc tận tình". Mời Quý khách lựa chọn
                        giải pháp yêu thích.
                    </p>
                    <div className="btn-assistant">
                        <a href="#web-link">
                            <button className="tool-shopping">
                                Công cụ mua sắm thông minh
                            </button>
                        </a>
                        <button className="assistant-11">
                            Trợ lý hỗ trợ 1:1
                        </button>
                    </div>
                </div>
            </section>
            {/*  */}
            <section id="tool-smart">
                <div className="tool-smart">
                    <div className="tool-text">
                        <h1>Công cụ mua sắm thông minh</h1>
                        <p>
                            *Công cụ mua sắm thông minh * Cài đặt Ứng dụng T&T
                            Extension vào trình duyệt web (Chrome, Coccoc, Edge,
                            Firefox...) để trải nghiệm giải pháp mua sắm thông
                            minh, báo giá nhanh chóng, thanh toán an toàn.
                        </p>
                        <h4 style={{ fontWeight: 700, margin: "20px 0" }}>
                            Cài đặt Extension T&T
                        </h4>
                        <div className="tool-extension">
                            <img src="https://st-fe-v2.fado.vn/desktop/image/page/extension/chrome.png" />
                            <img src="https://st-fe-v2.fado.vn/desktop/image/page/extension/safari.png" />
                            <img src="https://st-fe-v2.fado.vn/desktop/image/page/extension/microsoft-edge.png" />
                        </div>
                    </div>
                    <div className="tool-img">
                        <img
                            src="https://i.pinimg.com/236x/e7/36/70/e73670ae512b7a916b3c109496b6064d.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <div className="web-cooperation">
                <h1>T&T Extension đang được kích hoạt tại các Website sau</h1>
                <p>
                    Danh sách website được thêm vào liên tục theo xu hướng và sở
                    thích của Quý khách
                </p>
            </div>
            {/* card web link */}
            <section className="list-menu" id="web-link">
                <a href="https://www.amazon.com/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/1-Amazon.jpg"
                                    alt="Amazon img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/1-logo-Amazon.svg"
                                    alt="Amazon logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Amazon</div>
                    </div>
                </a>
                <a href="https://www.nike.com/vn/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/2-Nike.jpg"
                                    alt="Nike img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/2-logo-Nike.svg"
                                    alt="Nike logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Nike</div>
                    </div>
                </a>
                <a href="https://us.pandora.net/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/3-Pandora.jpg"
                                    alt="Pandora img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/3-logo-Pandora.svg"
                                    alt="Pandora logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Pandora</div>
                    </div>
                </a>
                <a href="https://www.hydrogen.it/us/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/6-Hydrogen.jpg"
                                    alt="Hydrogen img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/6-logo-Hydrogen.svg"
                                    alt="Hydrogen logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Hydrogen</div>
                    </div>{" "}
                </a>
                <a href="https://www.adidas.com/us">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/10-Adidas.jpg"
                                    alt="Adidas img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/10-logo-Adidas.svg"
                                    alt="Adidas logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Adidas</div>
                    </div>
                </a>
                <a href="https://vn.iherb.com/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/18-Iherb.jpg"
                                    alt="Iherb img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/18-logo-Iherb.svg"
                                    alt="Iherb logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Iherb</div>
                    </div>
                </a>
                <a href="https://www.jomashop.com/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/8-Jomashop.jpg"
                                    alt="Jomashop img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/8-logo-Jomashop.svg"
                                    alt="Jomashop logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Jomashop</div>
                    </div>
                </a>
                <a href="https://www.gap.com/">
                    <div className="web-card-link">
                        <div className="web-img-name">
                            <div className="item-bg">
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-bg/9-Gap.jpg"
                                    alt="Gap img"
                                    className="item-bg"
                                />
                            </div>
                            <div className="item-titel-logo">
                                <div className="item-bg-trans" />
                                <img
                                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/site-logo/9-logo-Gap.svg"
                                    alt="Gap logo"
                                    className="item-logo"
                                />
                            </div>
                        </div>
                        <div className="web-title">Gap</div>
                    </div>
                </a>
            </section>
            <div className="web-cooperation">
                <h5>
                    Nếu T&T Extension chưa hỗ trợ website Quý khách yêu thích.
                </h5>
                <p>Trợ lý mua sắm 1:1 luôn sẵn sàng</p>
                <a href="#tool-smart">
                    <button>Sử dụng trợ lý mua sắm</button>
                </a>
            </div>
            {/* FADO Extension */}
            <div className="fado-Extension">
                <h1>Tính năng vượt trội của T&T Extension</h1>
                <p>Những lý do bạn nên chọn T&T Extension làm trợ lý mua sắm</p>
            </div>
            <section className="supertool">
                <div style={{ display: "grid", placeItems: "center" }}>
                    <div className="shopping-all-sport">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={64}
                            height={64}
                            viewBox="0 0 64 64"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_326_3570)">
                                <mask
                                    id="mask0_326_3570"
                                    style={{ maskType: "luminance" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={64}
                                >
                                    <path d="M64 0H0V64H64V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_326_3570)">
                                    <path
                                        d="M52.0002 37.3359H44.0002C42.5274 37.3359 41.3335 38.5298 41.3335 40.0026V42.6693C41.3335 44.142 42.5274 45.3359 44.0002 45.3359H52.0002C53.4729 45.3359 54.6668 44.142 54.6668 42.6693V40.0026C54.6668 38.5298 53.4729 37.3359 52.0002 37.3359Z"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M52.0002 33.3333V20H1.3335V57.3333C1.3335 58.7478 1.8954 60.1044 2.89559 61.1046C3.89579 62.1048 5.25234 62.6667 6.66683 62.6667H52.0002V49.3333"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.3335 20V17.3333C1.3335 15.9188 1.8954 14.5623 2.89559 13.5621C3.89579 12.5619 5.25234 12 6.66683 12H21.3335"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M25.3335 16.0026V1.33594H62.6668V25.3359H56.0002"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M62.6667 20H56"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M33.3337 12.0052C34.8064 12.0052 36.0003 10.8113 36.0003 9.33854C36.0003 7.86578 34.8064 6.67188 33.3337 6.67188C31.8609 6.67188 30.667 7.86578 30.667 9.33854C30.667 10.8113 31.8609 12.0052 33.3337 12.0052Z"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M38.6667 12.0052C40.1394 12.0052 41.3333 10.8113 41.3333 9.33854C41.3333 7.86578 40.1394 6.67188 38.6667 6.67188C37.1939 6.67188 36 7.86578 36 9.33854C36 10.8113 37.1939 12.0052 38.6667 12.0052Z"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M45.3335 9.33594H58.6668"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.6668 57.3359C25.2943 57.3359 30.6668 51.9634 30.6668 45.3359C30.6668 38.7085 25.2943 33.3359 18.6668 33.3359C12.0394 33.3359 6.66684 38.7085 6.66684 45.3359C6.66684 51.9634 12.0394 57.3359 18.6668 57.3359Z"
                                        stroke="black"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20.0003 45.3333H17.3337C16.6264 45.3333 15.9481 45.0524 15.448 44.5523C14.9479 44.0522 14.667 43.3739 14.667 42.6667C14.667 41.9594 14.9479 41.2811 15.448 40.781C15.9481 40.281 16.6264 40 17.3337 40H20.0003C20.7076 40 21.3858 40.281 21.8859 40.781C22.386 41.2811 22.667 41.9594 22.667 42.6667"
                                        stroke="black"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.3335 45.3359H20.0002C20.7074 45.3359 21.3857 45.6169 21.8858 46.117C22.3859 46.6171 22.6668 47.2954 22.6668 48.0026C22.6668 48.7098 22.3859 49.3881 21.8858 49.8882C21.3857 50.3883 20.7074 50.6693 20.0002 50.6693H17.3335C16.6263 50.6693 15.948 50.3883 15.4479 49.8882C14.9478 49.3881 14.6668 48.7098 14.6668 48.0026"
                                        stroke="black"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.667 50.6719V53.3385"
                                        stroke="black"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.6668 40.0026V37.3359"
                                        stroke="black"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M46.6668 33.3359V25.3359L40.0002 32.0026H34.6668L30.6668 36.0026"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M46.6668 25.3359H38.6668"
                                        stroke="#757575"
                                        strokeWidth="3.5"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_326_3570">
                                    <rect width={64} height={64} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h5>Hệ thống thanh toán Nội địa, Đa dạng, An toàn</h5>
                        <p>
                            Nhiều lựa chọn thanh toán linh hoạt: chuyển khoản
                            trực tiếp, thẻ tín dụng, thẻ ghi nợ, internet
                            banking, MoMo, hệ thống cửa hàng tiện lợi,...
                        </p>
                    </div>
                    <div className="shopping-all-sport">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={64}
                            height={64}
                            viewBox="0 0 64 64"
                            fill="none"
                        >
                            <path
                                d="M38.5618 44.6751L30.6227 52.6654C30.3095 52.9994 29.9335 53.2683 29.5162 53.4568C29.0989 53.6453 28.6486 53.7497 28.1909 53.764C27.7333 53.7782 27.2773 53.7021 26.8491 53.54C26.4209 53.3779 26.0288 53.1329 25.6954 52.8191L8.85425 35.9984C8.22434 35.3224 7.88792 34.4244 7.91864 33.5009C7.94936 32.5774 8.34471 31.7037 9.01815 31.0711L29.3422 10.8392C29.9692 10.2008 30.8063 9.8114 31.6984 9.74308L51.4693 8.3499C51.6469 8.33221 51.8263 8.35279 51.9954 8.41026C52.1644 8.46772 52.3192 8.56074 52.4492 8.68304C52.5793 8.80534 52.6816 8.95409 52.7494 9.11927C52.8171 9.28445 52.8487 9.46223 52.842 9.64064L51.879 29.975C51.85 30.5158 51.7031 31.0437 51.4488 31.5218"
                                stroke="#757575"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M44.3606 20.3809C46.1443 20.3809 47.5902 18.935 47.5902 17.1514C47.5902 15.3678 46.1443 13.9219 44.3606 13.9219C42.577 13.9219 41.1311 15.3678 41.1311 17.1514C41.1311 18.935 42.577 20.3809 44.3606 20.3809Z"
                                stroke="#757575"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M26.8135 37.3064L25.4033 38.8673L23.5086 37.1449L24.9835 35.5947C23.5063 34.1138 22.6023 32.157 22.4321 30.0722L25.9846 29.2756C26.082 31.1206 26.9019 32.8532 28.2668 34.0984C29.2572 35.0026 30.2691 35.1749 30.7751 34.6043C31.281 34.0338 30.8397 33.0111 29.86 31.6547C28.3422 29.5878 26.1569 26.7243 28.6005 24.033C30.1722 22.3106 32.9066 21.9984 35.5117 23.8931L36.9758 22.2891L38.8704 24.0115L37.3956 25.637C38.561 26.9672 39.3097 28.6106 39.5486 30.3629L36.0284 31.0088C35.7973 29.4368 35.0379 27.9904 33.8754 26.9073C32.9066 26.0246 32.1745 26.0784 31.7224 26.5736C31.2703 27.0688 31.7224 28.0161 32.7343 29.394C34.2522 31.547 36.3514 34.3998 34.0154 36.9296C32.1745 39.0611 29.5586 39.2656 26.8135 37.3064Z"
                                fill="#757575"
                            />
                            <path
                                d="M25.0372 8.54688L4.24983 29.2805C3.6765 29.839 3.21928 30.5054 2.90447 31.2414C2.58966 31.9773 2.42347 32.7682 2.41546 33.5686C2.40746 34.369 2.5578 35.1631 2.85783 35.9051C3.15786 36.6472 3.60167 37.3226 4.16371 37.8925L23.0457 56.7422"
                                stroke="#757575"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                            />
                            <path
                                d="M50.2814 53.7551C56.5241 53.7551 61.5848 48.6945 61.5848 42.4518C61.5848 36.2091 56.5241 31.1484 50.2814 31.1484C44.0388 31.1484 38.9781 36.2091 38.9781 42.4518C38.9781 48.6945 44.0388 53.7551 50.2814 53.7551Z"
                                stroke="black"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M45.7578 42.1543L49.0112 46.3675L55.5584 39.8203"
                                stroke="black"
                                strokeWidth={3}
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h5>Giá cả và Chi phí minh bạch</h5>
                        <p>
                            Giá bạn thấy là giá bạn thanh toán khi nhận hàng tận
                            cửa. Không có chi phí phát sinh thêm và chi phí ẩn.
                        </p>
                    </div>
                </div>
                <div style={{ display: "grid", placeItems: "center" }}>
                    <div className="shopping-all-sport">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={64}
                            height={64}
                            viewBox="0 0 64 64"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_326_3556)">
                                <mask
                                    id="mask0_326_3556"
                                    style={{ maskType: "luminance" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={64}
                                    height={64}
                                >
                                    <path d="M64 0H0V64H64V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_326_3556)">
                                    <path
                                        d="M63.8 31.16C63.48 30.46 65.04 33.6 56.9 17.32C56.4011 16.3207 55.6332 15.4805 54.6827 14.894C53.7322 14.3074 52.6369 13.9978 51.52 14H37.64C37.2274 12.8329 36.4639 11.822 35.4541 11.1059C34.4444 10.3898 33.2379 10.0035 32 10H18C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14H32C32.5304 14 33.0391 14.2107 33.4142 14.5858C33.7893 14.9609 34 15.4696 34 16V46H25.72C25.2594 44.3053 24.254 42.8092 22.8588 41.7425C21.4636 40.6759 19.7562 40.098 18 40.098C16.2438 40.098 14.5364 40.6759 13.1412 41.7425C11.746 42.8092 10.7406 44.3053 10.28 46H6C5.46957 46 4.96086 45.7893 4.58579 45.4142C4.21071 45.0391 4 44.5304 4 44V16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14H10C10.5304 14 11.0391 13.7893 11.4142 13.4142C11.7893 13.0391 12 12.5304 12 12C12 11.4696 11.7893 10.9609 11.4142 10.5858C11.0391 10.2107 10.5304 10 10 10H6C4.4087 10 2.88258 10.6321 1.75736 11.7574C0.632141 12.8826 0 14.4087 0 16V44C0 45.5913 0.632141 47.1174 1.75736 48.2426C2.88258 49.3679 4.4087 50 6 50H10.28C10.7406 51.6947 11.746 53.1908 13.1412 54.2575C14.5364 55.3241 16.2438 55.902 18 55.902C19.7562 55.902 21.4636 55.3241 22.8588 54.2575C24.254 53.1908 25.2594 51.6947 25.72 50H40.28C40.7406 51.6947 41.746 53.1908 43.1412 54.2575C44.5364 55.3241 46.2438 55.902 48 55.902C49.7562 55.902 51.4636 55.3241 52.8588 54.2575C54.254 53.1908 55.2594 51.6947 55.72 50H62C62.5304 50 63.0391 49.7893 63.4142 49.4142C63.7893 49.0391 64 48.5304 64 48C64 30.54 64 31.76 63.8 31.16ZM18 52C17.2089 52 16.4355 51.7654 15.7777 51.3259C15.1199 50.8864 14.6072 50.2616 14.3045 49.5307C14.0017 48.7998 13.9225 47.9956 14.0769 47.2196C14.2312 46.4437 14.6122 45.731 15.1716 45.1716C15.731 44.6122 16.4437 44.2312 17.2196 44.0769C17.9956 43.9225 18.7998 44.0017 19.5307 44.3045C20.2616 44.6072 20.8864 45.1199 21.3259 45.7777C21.7654 46.4355 22 47.2089 22 48C22 49.0609 21.5786 50.0783 20.8284 50.8284C20.0783 51.5786 19.0609 52 18 52ZM48 52C47.2089 52 46.4355 51.7654 45.7777 51.3259C45.1199 50.8864 44.6072 50.2616 44.3045 49.5307C44.0017 48.7998 43.9225 47.9956 44.0769 47.2196C44.2312 46.4437 44.6122 45.731 45.1716 45.1716C45.731 44.6122 46.4437 44.2312 47.2196 44.0769C47.9956 43.9225 48.7998 44.0017 49.5307 44.3045C50.2616 44.6072 50.8864 45.1199 51.3259 45.7777C51.7654 46.4355 52 47.2089 52 48C52 49.0609 51.5786 50.0783 50.8284 50.8284C50.0783 51.5786 49.0609 52 48 52ZM55.72 46C55.2594 44.3053 54.254 42.8092 52.8588 41.7425C51.4636 40.6759 49.7562 40.098 48 40.098C46.2438 40.098 44.5364 40.6759 43.1412 41.7425C41.746 42.8092 40.7406 44.3053 40.28 46H38V18H51.52C51.8927 17.9974 52.2588 18.099 52.5768 18.2934C52.8949 18.4878 53.1523 18.7671 53.32 19.1L58.76 30H44C43.4696 30 42.9609 30.2107 42.5858 30.5858C42.2107 30.9609 42 31.4696 42 32C42 32.5304 42.2107 33.0391 42.5858 33.4142C42.9609 33.7893 43.4696 34 44 34H60V46H55.72Z"
                                        fill="#757575"
                                    />
                                    <path
                                        d="M25.42 26.5804L21.42 22.5804C21.0434 22.2038 20.5326 21.9922 20 21.9922C19.4674 21.9922 18.9566 22.2038 18.58 22.5804C18.2034 22.957 17.9918 23.4678 17.9918 24.0004C17.9918 24.533 18.2034 25.0438 18.58 25.4204L19.18 26.0004H14C13.4696 26.0004 12.9609 26.2111 12.5858 26.5862C12.2107 26.9612 12 27.4699 12 28.0004C12 28.5308 12.2107 29.0395 12.5858 29.4146C12.9609 29.7897 13.4696 30.0004 14 30.0004H19.18L18.58 30.5804C18.2034 30.957 17.9918 31.4678 17.9918 32.0004C17.9918 32.533 18.2034 33.0438 18.58 33.4204C18.9566 33.797 19.4674 34.0086 20 34.0086C20.5326 34.0086 21.0434 33.797 21.42 33.4204L25.42 29.4204C25.6075 29.2344 25.7562 29.0132 25.8578 28.7695C25.9593 28.5258 26.0116 28.2644 26.0116 28.0004C26.0116 27.7363 25.9593 27.4749 25.8578 27.2312C25.7562 26.9875 25.6075 26.7663 25.42 26.5804Z"
                                        fill="black"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_326_3556">
                                    <rect width={64} height={64} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h5>Giao hàng toàn cầu nhanh chóng</h5>
                        <p>
                            Giao hàng 7-10 ngày, dịch vụ vận chuyển nhanh chóng
                            và thuận tiện để đảm bảo bạn nhận được sản phẩm một
                            cách an toàn
                        </p>
                    </div>
                    <div className="shopping-all-sport">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={64}
                            height={64}
                            viewBox="0 0 64 64"
                            fill="none"
                        >
                            <path
                                d="M10.8628 25.2422V59.3668"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M53.1372 25.1719V58.2637"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M62 58H2"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M1.75 11C1.75 11.9665 2.5335 12.75 3.5 12.75C4.4665 12.75 5.25 11.9665 5.25 11H1.75ZM58.75 7V9H62.25V7H58.75ZM5.25 11V7H1.75V11H5.25ZM58.5 9.25H27.6476V12.75H58.5V9.25ZM32 6.75H58.5V3.25H32V6.75ZM22.7089 6.75H32V3.25H22.7089V6.75ZM5.5 6.75H8.7604V3.25H5.5V6.75ZM58.75 9C58.75 9.13807 58.6381 9.25 58.5 9.25V12.75C60.5711 12.75 62.25 11.0711 62.25 9H58.75ZM62.25 7C62.25 4.92893 60.5711 3.25 58.5 3.25V6.75C58.6381 6.75 58.75 6.86193 58.75 7H62.25ZM5.25 7C5.25 6.86193 5.36193 6.75 5.5 6.75V3.25C3.42893 3.25 1.75 4.92893 1.75 7H5.25Z"
                                fill="#757575"
                            />
                            <path
                                d="M32.0001 20.0469C32.0006 20.6976 31.8529 21.3421 31.5653 21.9434C31.2777 22.5448 30.8559 23.0912 30.324 23.5516C29.7921 24.0119 29.1605 24.377 28.4654 24.6262C27.7702 24.8753 27.0251 25.0035 26.2726 25.0035H25.7316C24.9787 25.004 24.2332 24.8761 23.5376 24.6272"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M32 11H44V20.0433C44.0005 20.6941 43.8528 21.3386 43.5652 21.9399C43.2776 22.5413 42.8558 23.0877 42.3239 23.548C41.792 24.0083 41.1604 24.3735 40.4653 24.6226C39.7701 24.8718 39.025 25 38.2725 25H37.7315C36.9786 25.0005 36.2331 24.8726 35.5375 24.6236C34.8419 24.3747 34.2099 24.0096 33.6775 23.5492C33.1452 23.0889 32.7231 22.5423 32.4352 21.9407C32.1474 21.3391 31.9995 20.6944 32 20.0433V11Z"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M44 11H56V20.0433C56.0005 20.6941 55.8528 21.3386 55.5652 21.9399C55.2776 22.5413 54.8558 23.0877 54.3239 23.548C53.792 24.0083 53.1604 24.3735 52.4653 24.6226C51.7701 24.8718 51.025 25 50.2725 25H49.7315C48.9786 25.0005 48.2331 24.8726 47.5375 24.6236C46.8419 24.3747 46.2099 24.0096 45.6775 23.5492C45.1452 23.0889 44.7231 22.5423 44.4352 21.9407C44.1474 21.3391 43.9995 20.6944 44 20.0433V11Z"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M47 24.4141V31.9994C47 33.1039 46.1046 33.9994 45 33.9994H18C16.8954 33.9994 16 33.1039 16 31.9994V25.6948"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M17 56.9985V42.0781C17 40.9736 17.8954 40.0781 19 40.0781H25.9679C27.0725 40.0781 27.9679 40.9736 27.9679 42.0781V57.7283"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M46 40H36C34.8954 40 34 40.8954 34 42V50C34 51.1046 34.8954 52 36 52H46C47.1046 52 48 51.1046 48 50V42C48 40.8954 47.1046 40 46 40Z"
                                stroke="#757575"
                                strokeWidth="3.5"
                                strokeMiterlimit={10}
                            />
                            <path
                                d="M16 26.7344C22.6274 26.7344 28 21.3618 28 14.7344C28 8.10696 22.6274 2.73438 16 2.73438C9.37258 2.73438 4 8.10696 4 14.7344C4 21.3618 9.37258 26.7344 16 26.7344Z"
                                stroke="black"
                                strokeWidth="3.5"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7 19.9979V17.9983H10.9992V15.9987H7V10H12.9987V11.9996H8.99958V13.9991H12.9987V19.9979H7Z"
                                fill="black"
                            />
                            <path
                                d="M14 19.9979V17.9983H17.9992V15.9987H14V10H19.9987V11.9996H15.9996V13.9991H19.9987V19.9979H14Z"
                                fill="black"
                            />
                            <rect
                                x={11}
                                y="11.2656"
                                width={2}
                                height={3}
                                fill="black"
                            />
                            <rect
                                x={18}
                                y="11.2656"
                                width={2}
                                height={3}
                                fill="black"
                            />
                            <rect
                                x={23}
                                y={13}
                                width={1}
                                height={5}
                                fill="black"
                            />
                            <rect
                                x={26}
                                y={15}
                                width={1}
                                height={5}
                                transform="rotate(90 26 15)"
                                fill="black"
                            />
                        </svg>
                        <h5>
                            Mua sắm tại hàng nghìn Website trên toàn thế giới
                        </h5>
                        <p>
                            Hãy trải nghiệm sự thuận lợi của mua sắm không giới
                            hạn - với hơn 5,4 triệu cửa hàng ngay tại đầu ngón
                            tay của bạn.
                        </p>
                    </div>
                </div>
            </section>
            <div className="install-Extension">
                <h1>Dễ dàng Cài đặt và Sử dụng</h1>
                <p>Hãy bắt đầu bằng cách xem hướng dẫn! chỉ với 60s</p>
            </div>
            {/* guide */}
            <div className="guide">
                <img
                    className="img-guide"
                    src="https://st-fe-v2.fado.vn/desktop/image/page/extension/extension-bg.png"
                    alt=""
                />
                <br />
                <h4 style={{ marginTop: "30px" }}>Cài đặt Extension T&T</h4>
                <img src="https://st-fe-v2.fado.vn/desktop/image/page/extension/chrome.png" />
                <img src="https://st-fe-v2.fado.vn/desktop/image/page/extension/safari.png" />
                <img src="https://st-fe-v2.fado.vn/desktop/image/page/extension/microsoft-edge.png" />
            </div>
            {/* footer */}

            {/* go top */}
            
        </div>
    );
};

export default Assistant;
