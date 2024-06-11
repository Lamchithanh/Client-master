import React, { useEffect, useState } from "react";
import "./AddOrder.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  createProduct,
  findAllBrand,
  findAllProducts,
} from "../../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import DetailOrder from "./DetailOrder";
import { getAllOrders } from "../../../State/Cart/Action";

const AddProduct = () => {
  const dispatch = useDispatch();

  
  const { cart } = useSelector((store) => store);


  useEffect(() => {

    dispatch(getAllOrders());
  }, []);
  const orders = Array.isArray(cart.orders) ? cart.orders : [];
  return (
    <div className="Addproduct-main">
      <div style={{ display: "flex", alignItems: "center", gap: "20" }}>
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/nolan/96/sell.png"
          alt="sell"
        />

        <h2>Order</h2>
      </div>
      <div
        className="Admin-table-Product"
        style={{ width: "2000px !important" }}
      >
        <div class="container mt-3">
          <h2>Order Information</h2>
          <p>List of currently available orders :</p>
          <table class="table-addproduct ">
            <thead>
              <tr>
               
                <th>ID</th>
                <th>Person Ordering</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Order Status</th>
                <th>Total Items</th>
                <th>Total Price</th>
                <th>Create At</th>
                <th>Delivery Date</th>
             
                <th>Action</th>
              </tr>
            </thead>
          </table>
          <br />
          <table className="table-showadd">
            <tbody>
              {cart.orders &&
               cart.orders.map((item) => (
                  <DetailOrder key={item.id} item={item} />
                ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
