import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createOrder} from "../../../State/Order/Action";
import { createAddress, getAddress, getUser } from "../../../State/Auth/Action";

function Example() {
  const [show, setShow] = useState(false);
  const formRef = useRef(null);
  const { auth } = useSelector((store) => store);



  const shoot = () => {
    alert("Great Shot!");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current); 
    const address = {
      fullName: data.get("fullName"),
      city: data.get("city"),
      district: data.get("district"),
      ward: data.get("ward"),
      phoneNumber: data.get("phoneNumber"),
      streetAddress: data.get("streetAddress"),

    };

    const orderData = { address, navigate };
    dispatch(createAddress(orderData))
    .then(() => {
      dispatch(getAddress());
    });
  
  };

  const handleButtonClick = (event) => {
    if (event) {
      event.preventDefault();
    }
    handleClose();
    handleSubmit(event);
  };


  return (
    <>
      <div className="btn-thong-tin-dat-hang">
        <Button variant="black" onClick={handleShow}>
          Nhập thông tin đặt hàng
        </Button>
      </div>

      <Modal className="model-big" show={show} onHide={handleClose} style={{width:"0 !important" , height:"0 !important" }}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo địa chỉ mới</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modalbody"   >
          <form
            ref={formRef}
            action=""
            className="form-updata-info"
            onSubmit={handleSubmit}
          >
            <div className="modal-ten-sdt">
              <label htmlFor="fullName">Họ tên đầy đủ</label>
              <br />
              <input
                type="text"
                placeholder="Họ tên đầy đủ"
                id="fullName"
                name="fullName"
                defaultValue={auth?.address?.fullName}
              />
             
              <label htmlFor="phoneNumber">Điện thoại</label>
              <br />
              <input
                type="text"
                placeholder="Điện thoại"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={auth?.address?.phoneNumber}
              />
              <p style={{ fontSize: "13px", margin: "5px 0" }}>
                T&T sẽ cần liên hệ theo số điện thoại này để xác nhận hoặc thông
                báo hẹn thời gian giao hàng / thu tiền trước.
              </p>
            </div>
         
            <div className="modal-dia-diem">
              <label htmlFor="address">Địa điểm</label>
              <br />
              <div className="modal-option-dia-diem">
                <select name="city" aria-label="Default select example" defaultValue={auth?.address?.city}>
                  <option value="">chọn tỉnh / thành</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="An Giang">An Giang</option>
                  <option value="Sóc Trăng">Sóc Trăng</option>
                  <option value="Sóc Trăng">TP. Hồ Chí Minh</option>
                  <option value="Sóc Trăng">Bạc Liêu</option>
                  <option value="Sóc Trăng">Long An</option>
                  <option value="Sóc Trăng">Tiền Giang</option>
                </select>
                <br />
                <select name="district"  aria-label="Default select example" defaultValue={auth?.address?.district}>
                  <option value="">Chọn Quận / Huyện</option>
                  <option value="Ninh Kiều">Ninh Kiều</option>
                  <option value="Bình Thủy">Bình Thủy</option>
                  <option value="Cái Răng">Cái Răng</option>
                  <option value="Ô Môn">Ô Môn</option>
                  <option value="Thốt Nốt">Thốt Nốt</option>
                  <option value="Phong Điền">Phong Điền</option>
                  <option value="Thới Lai">Thới Lai</option>
                  <option value="Cờ Đỏ">Cờ Đỏ</option>
                  <option value="Vĩnh Thạnh">Vĩnh Thạnh</option>
                </select>
                <br />
                <select name="ward" aria-label="Default select example" defaultValue={auth?.address?.ward}>
                  <option value="">Chọn phường / Xã</option>
                  <option value="An Bình">An Bình</option>
                  <option value="An Cư">An Cư</option>
                  <option value="An Hòa">An Hòa</option>
                </select>
              </div>
            </div>
            <div className="modal-dia-chi-chinh-xac">
              <p>
                {" "}
                <span>Địa chỉ chính xác</span> (nhập chính xác và chi tiết địa
                chỉ để đảm bảo nhận hàng đúng thời gian)
              </p>
              <textarea
                name="streetAddress"
                type="text"
                placeholder="địa chỉ chính xác: chung cư, số nhà, tên đường... "
                class="mz-form-control__input correct-address-input"
                defaultValue={auth?.address?.streetAddress}
                style={{ height: "16px;" }}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: "100px" }}
          >
            <span>Hủy bỏ</span>
          </Button>
          <Button
            variant="primary"
            onClick={handleButtonClick}
            style={{
              width: "100px",
              color: "#fff",
              background: "#000",
              border: "none",
            }}
            className="btn-lg"
          >
            <span>Cập nhật</span>
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
