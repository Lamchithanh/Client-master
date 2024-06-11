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
  return (
    <div className="Addproduct-main">
      <div
        className="Admin-table-Product"
        style={{ width: "2000px !important" }}
      >
        <div class="container mt-3">
          <h2>Order Items Information</h2>
          <p>List of currently available order items :</p>
          <table class="table-addproduct ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Product's name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Color</th>
                <th>Size</th>
                <th>Price</th>
                <th>Total Item</th>
                <th>Total Price</th>
              </tr>
            </thead>
          </table>
          <br />
          <table className="table-showadd">
            <tbody>
              {Array.isArray(cart.orderItems) &&
                cart.orderItems.map((item) => (
                  <tr>
                    <td>{item?.id}</td>

                    <td>
                      <img
                        src={item.product?.imageUrl}
                        alt=""
                        style={{ width: "80%", height: "80%" }}
                      />
                    </td>
                    <td>{item.product?.title}</td>
                    <td>{item.product?.brand.name}</td>
                    <td>{item.product?.category.name}</td>
                    <td>{item.color} white</td>
                    <td>{item.size} S</td>
                    <td> {item.product?.discountedPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice}</td>
                   
                   
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
