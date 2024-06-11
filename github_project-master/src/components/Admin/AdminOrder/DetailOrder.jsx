import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { deleteProduct } from "../../../State/Product/Action";
import { NavLink } from "react-router-dom";
import { getAllOrderItems, updateOrderStatus } from "../../../State/Cart/Action";

const DetailProduct = ({ item }) => {
  const dispatch = useDispatch();
 

  const handleCheck = (orderId) => {
   
    dispatch(updateOrderStatus(orderId));
  };
  const handlerFind = (orderId) => {
    dispatch(getAllOrderItems(orderId));
  };
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.user?.fullName}</td>
      <td>{item.user?.email}</td>
      <td>{item.user?.phoneNumber}</td>
      <td>{item.orderStatus}</td>
      <td>{item.totalItem}</td>
      <td>{item.totalPrice}</td>
      <td>{item.createAt}</td>
      <td>{item.deliveryDate}</td>
      <td style={{ width: "5%" }}>
      <button
          onClick={() => handleCheck(item.id)}
          class=" btn-outline-delete"
          style={{width:"60px"}}
        >
          received
        </button>
        <NavLink to="/DetailOrderItem" style={{ textDecoration: "none" }}>
          <button
            class=" btn-outline-edit"
            onClick={() => handlerFind(item.id)}
            style={{width:"60px"}}
          >
            More
          </button>
        </NavLink>

       
      </td>
    </tr>
  );
};
export default DetailProduct;
