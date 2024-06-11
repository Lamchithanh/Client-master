import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrand, findAllBrand, findAllProducts } from "../../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import DetailBrand from "./DetailBrand";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const toastedit = () => toast("Đã cập nhật sản phẩm thành công!");
  console.log("data allProduct", products.brands);
  


  const initialProductData = {
    imageUrl: "",
    name: "",
  };
  const [brandData, setBrandData] = useState(initialProductData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBrandData({ ...brandData, [name]: value });
  };
  useEffect(() => {
    dispatch(findAllBrand());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBrand(brandData));
    setBrandData(initialProductData);
  };
  return (
    <div className="Addproduct-main">
      <div style={{ display: "flex", alignItems: "center", gap: "20" }}>
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/nolan/96/sell.png"
          alt="sell"
        />

        <h2>Brand</h2>
      </div>
      <hr />
      <div className="form-AddProduct">
        <button
          type="button"
          class="btn btn-primary btn-Addproduct"
          data-bs-toggle="collapse"
          data-bs-target="#Addproduct"
        >
          Add Brand
        </button>
        <div id="Addproduct" class="collapse">
          <div class="container " id="container-Addproduct">
            <form action="" className="From-addproduct" onSubmit={handleSubmit}>
              <label for="fname">Image</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Your name.."
                value={brandData.imageUrl || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                value={brandData.name || ""}
                onChange={handleInputChange}
              />
             
              <button className="btn-xac-nhan-them" >
                Add
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <div
        className="Admin-table-Product"
        style={{ width: "2000px !important" }}
      >
        <div class="container mt-3">
          <h2>Brand</h2>
          <p>List of currently available brands:</p>
          <table class="table-addproduct ">
            <thead>
              <tr>
                <th style={{ width: "600px"  , paddingLeft:"180px"}}>ID</th>
                <th style={{ width: "600px" ,paddingLeft:"140px"}}>Image</th>
                <th style={{ width: "600px",paddingLeft:"140px" }}>Name</th>
                <th style={{ width: "600px" ,paddingLeft:"140px"}}>Action</th>
              </tr>
            </thead>
          </table>
          <br />
          <table className="table-showadd">
            <tbody>
              {products.brands &&
                products.brands.map((brands) => (
                  <DetailBrand key={brands.id} brands={brands} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
