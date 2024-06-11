import "./Footer.css";
import logo from "../../../assets/imgs/logo2.png"

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="columne-logo">
          <img
            src={logo}
            alt=""
          />
          <div className="conten-introduce">
            T&T.VN - Nền tảng cung cấp giải pháp mua hàng quốc tế phục vụ nhu
            cầu cao cấp, dịch vụ nhanh chóng &amp; tin cậy, nhằm mang đến cho
            bạn những sự lựa chọn thời thượng &amp; độc đáo nhất. Tại đây, quý
            khách hàng có thể lựa chọn không giới hạn với hơn 5 tỷ sản phẩm chất
            lượng chính hãng, từ khắp nơi trên thế giới đặc biệt là từ các nước
            phát triển Mỹ, Đức, Nhật, Úc, Anh, Đức...
          </div>
          <div>
            <ul className="icon-info">
              <li>
                <a href="$">
                  <i className="fab fa-facebook" style={{ fontSize: "36px" }} />
                </a>
              </li>
              <li>
                <a href="$">
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "36px" }}
                  />
                </a>
              </li>
              <li>
                <a href="$">
                  <i
                    className="fab fa-youtube-square"
                    style={{ fontSize: "36px" }}
                  />
                </a>
              </li>
            </ul>
            <ul className="appstore">
              <li>
                <a href="$">
                  <img
                    src="https://st-fe-v2.fado.vn/desktop/image/logo/app_store_logo_black_v3.png?v=3.239.3.12"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="$">
                  <img
                    src="https://st-fe-v2.fado.vn/desktop/image/logo/google_play_store_logo_black_v3.png?v=3.239.3.12"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="list-columne">
          <div className="footer-columne">
            <ul className="columne">
              <h6 className="footer-title">Hỗ trợ khách hàng</h6>
              <li>
                <a href="$">Bảo vệ ngươi mua</a>
              </li>
              <li>
                <a href="$">Hướng dẫn mua hàng</a>
              </li>
              <li>
                <a href="$">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="$">Chính sách đổi trả hàng</a>
              </li>
              <li>
                <a href="$">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="$">Cách thức giao nhận</a>
              </li>
              <li>
                <a href="$">Chính sách giao dịch</a>
              </li>
              <li>
                <a href="$">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="$">Chính sách giải quyết khiếu nại</a>
              </li>
            </ul>
            <ul className="columne">
              <h6 className="footer-title">Về T&T.VN</h6>
              <li>
                <a href="$">Giới thiệu T&T</a>
              </li>
              <li>
                <a href="$">Phản hồi khách hàng</a>
              </li>
              <li>
                <a href="$">Báo chí nói về T&T</a>
              </li>
              <li>
                <a href="$">Trung tâm hỗ trợ</a>
              </li>
              <li>
                <a href="$">tin tức</a>
              </li>
              <li>
                <a href="$">Quy chế hoạt động</a>
              </li>
              <li>
                <a href="$">Cơ hội nghề nghiệp</a>
              </li>
              <li>
                <a href="$">Nghĩa vụ thuế</a>
              </li>
              <li>
                <a href="$">Liên kết hợp tác</a>
              </li>
            </ul>
            <ul className="columne">
              <h6 className="footer-title">Hợp tác &amp; liên kết</h6>
              <li>
                <a href="$">Bán hàng cùng T&T</a>
              </li>
              <li>
                <a href="$">Chính sách đại lý</a>
              </li>
            </ul>
            <ul className="columne ship">
              <h6 className="footer-title">Dịch vụ giao hàng</h6>
              <li>
                <a href="$">
                  <img
                    src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_express_v2.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="$">
                  <img
                    src="https://st-fe-v2.fado.vn/desktop/image/logo/proship.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <ul className="columne card">
              <h6 className="footer-title">Chấp nhận thanh toán</h6>
              <ul className="bg-card">
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__payment-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/list-bank/mastercard.png"
                      alt="payment icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__payment-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/list-bank/visa.png"
                      alt="payment icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__payment-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/list-bank/jcb.png"
                      alt="payment icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__payment-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/list-bank/zalopay.png"
                      alt="payment icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__payment-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/list-bank/payoo.png"
                      alt="payment icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="$">
                    <img
                      className="footer-mini-block__payment-item-img"
                      src="https://st-fe-v2.fado.vn/desktop/image/list-bank/napas_v2.jpg"
                      alt="payment icon"
                    />
                  </a>
                </li>
              </ul>
            </ul>
            <ul className="columne certify">
              <h6 className="footer-title">Chứng nhận bởi</h6>
              <li>
                <a href="$">
                  <img
                    className="footer-mini-block__certify-item-img"
                    src="https://st-fe-v2.fado.vn/desktop/image/logo/tnm.png"
                    alt="Chung nhan Tin Nhiem Mang FADO"
                  />
                </a>
              </li>
              <li>
                <a href="$">
                  <img
                    className="footer-mini-block__certify-item-img ls-is-cached lazyloaded"
                    src="https://st-fe-v2.fado.vn/desktop/image/icons/bo-cong-thuong_v2.png?v=3.239.3.12"
                    data-src="https://st-fe-v2.fado.vn/desktop/image/icons/bo-cong-thuong_v2.png?v=3.239.3.12"
                    alt="chung nhan bo cong thuong"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <div className="footer-foot-clo">
          <h6>TÊN DOANH NGHIỆP: CÔNG TY CỔ PHẦN T&T GLOBAL</h6>
          <p>
            Địa chỉ công ty: 60 Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1, Thành
            phố Hồ Chí Minh, Việt Nam Giấy phép số 0316534223. Chịu trách nhiệm:
            T&T GLOBAL
          </p>
        </div>
        <div className="footer-foot-clo">
          <h6>TRỤ SỞ</h6>
          <p>
            21Bis Hậu Giang, Phường 4, Quận Tân Bình, TP. HCM 95-97 Lê Duẩn,
            Phường Cửa Nam, Quận Hoàn Kiếm, TP. Hà Nội
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
