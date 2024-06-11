import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalorder.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Cart/Action";
function Examples() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    handleShow();
    dispatch(createOrder())
  };

  return (
    <>
    <div className="btn-dat-mua">
      <Button variant="black" onClick={handleSubmit}>
          MUA
      </Button></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Đơn hàng của bạn đã được tiếp nhận !</Modal.Body>
        <Modal.Footer>
          <NavLink to="/">
            {" "}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Examples;
