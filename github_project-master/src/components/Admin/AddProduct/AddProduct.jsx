import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
    createProduct,
    findAllBrand,
    findAllProducts,
} from "../../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import DetailProduct from "./DetailProduct";

const AddProduct = () => {
    const dispatch = useDispatch();
    const toastaddpro = () => toast("Add Product Success!");
    const toastdelete = () => toast("Delete Product Success!");
    const { products } = useSelector((store) => store);

    const initialProductData = {
        imageUrl: "",
        title: "",
        soldAt: "",
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
        brand: "",
        colors: [{ name: "", sizes: [{ name: "", quantity: "" }] }],
        price: "",
        discountPersent: "",
        description: "",
    };
    const [formData, setFormData] = useState(initialProductData);
    useEffect(() => {
        if (formData.price && formData.discountPersent) {
            const price = parseFloat(formData.price.replace(/,/g, ""));
            const discountPersent = parseFloat(formData.discountPersent);
            if (!isNaN(price) && !isNaN(discountPersent)) {
                const discountedPrice = price - (price * discountPersent) / 100;
                setFormData((prevData) => ({
                    ...prevData,
                    totalPrice: formatInputValue(discountedPrice.toFixed(0)),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                totalPrice: "",
            }));
        }
        dispatch(findAllProducts());
        dispatch(findAllBrand());
    }, [formData.price, formData.discountPersent]);

    const formatInputValue = (value) => {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleColorChange = (index, event) => {
        const newColors = [...formData.colors];
        if (newColors[index]) {
            newColors[index].name = event.target.value;
            setFormData({ ...formData, colors: newColors });
        }
    };

    const handleSizeChange = (colorIndex, sizeIndex, field, event) => {
        const newColors = [...formData.colors];
        if (newColors[colorIndex]?.sizes[sizeIndex]) {
            newColors[colorIndex].sizes[sizeIndex][field] = event.target.value;
            setFormData({ ...formData, colors: newColors });
        }
    };

    const handleAddColor = () => {
        setFormData({
            ...formData,
            colors: [
                ...formData.colors,
                { name: "", sizes: [{ name: "", quantity: "" }] },
            ],
        });
    };

    const handleAddSize = (colorIndex) => {
        const newColors = [...formData.colors];
        if (newColors[colorIndex]) {
            newColors[colorIndex].sizes.push({ name: "", quantity: "" });
            setFormData({ ...formData, colors: newColors });
        }
    };

    const handleRemoveColor = (index) => {
        const newColors = [...formData.colors];
        if (newColors[index]) {
            newColors.splice(index, 1);
            setFormData({ ...formData, colors: newColors });
        }
    };

    const handleRemoveSize = (colorIndex, sizeIndex) => {
        const newColors = [...formData.colors];
        if (newColors[colorIndex]?.sizes[sizeIndex]) {
            newColors[colorIndex].sizes.splice(sizeIndex, 1);
            setFormData({ ...formData, colors: newColors });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createProduct(formData));
        setFormData(initialProductData);
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

                <h2>Product</h2>
            </div>
            <hr />
            <div className="form-AddProduct">
                <button
                    type="button"
                    class="btn btn-primary btn-Addproduct"
                    data-bs-toggle="collapse"
                    data-bs-target="#Addproduct"
                >
                    Add Product
                </button>
                <div id="Addproduct" class="collapse">
                    <div class="container " id="container-Addproduct">
                        <form
                            action=""
                            className="From-addproduct"
                            onSubmit={handleSubmit}
                        >
                            <label for="fname">Image</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Enter your image..."
                                value={formData.imageUrl || ""}
                                onChange={handleInputChange}
                            />
                            <label for="fname">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter your title..."
                                value={formData.title || ""}
                                onChange={handleInputChange}
                            />
                            <label for="fname">Made in</label>
                            <select
                                id="soldAt"
                                name="soldAt"
                                value={formData.soldAt}
                                onChange={handleInputChange}
                            >
                                <option value="null">Select a Country</option>
                                <option value="Việt Nam">Việt Nam</option>
                                <option value="Mỹ">Mỹ</option>
                                <option value="Nhật">Nhật</option>
                                <option value="Đức">Đức</option>
                                <option value="Anh">Anh</option>
                            </select>
                            {/* phan sua moi */}
                            <label for="fname" style={{ marginTop: "10px" }}>
                                Top lavel Category
                            </label>
                            <input
                                type="text"
                                id="topLavelCategory"
                                name="topLavelCategory"
                                placeholder="Your name.."
                                value={formData.topLavelCategory || ""}
                                onChange={handleInputChange}
                            />{" "}
                            <label for="fname">Second lavel Category</label>
                            <input
                                type="text"
                                id="secondLavelCategory"
                                name="secondLavelCategory"
                                placeholder="Your name.."
                                value={formData.secondLavelCategory || ""}
                                onChange={handleInputChange}
                            />{" "}
                            <label for="fname">Third lavel Category</label>
                            <input
                                type="text"
                                id="thirdLavelCategory"
                                name="thirdLavelCategory"
                                placeholder="Your name.."
                                value={formData.thirdLavelCategory || ""}
                                onChange={handleInputChange}
                            />{" "}
                            <label for="fname">Brand</label>
                            <select
                                id="brand"
                                name="brand"
                                value={
                                    formData.brand ||
                                    (products.brands.find(
                                        (brand) => brand.id === 1
                                    ) &&
                                        products.brands.find(
                                            (brand) => brand.id === 1
                                        ).name) ||
                                    ""
                                }
                                onChange={handleInputChange}
                            >
                                <option value="null">Select a Brand</option>

                                {products.brands.map((brand) => (
                                    <option key={brand.id} value={brand.name}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                            <div className="button-group">
                                {formData.colors.map((color, colorIndex) => (
                                    <div
                                        key={colorIndex}
                                        className="List-item-color"
                                    >
                                        <label htmlFor={`color-${colorIndex}`}>
                                            Color
                                        </label>

                                        <input
                                            type="text"
                                            id={`color-${colorIndex}`}
                                            value={color.name}
                                            onChange={(event) =>
                                                handleColorChange(
                                                    colorIndex,
                                                    event
                                                )
                                            }
                                        />
                                        {color.sizes.map((size, sizeIndex) => (
                                            <div key={sizeIndex}>
                                                <label
                                                    htmlFor={`size-${colorIndex}-${sizeIndex}`}
                                                >
                                                    Size
                                                </label>
                                                <input
                                                    type="text"
                                                    id={`size-${colorIndex}-${sizeIndex}`}
                                                    value={size.name}
                                                    onChange={(event) =>
                                                        handleSizeChange(
                                                            colorIndex,
                                                            sizeIndex,
                                                            "name",
                                                            event
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor={`quantity-${colorIndex}-${sizeIndex}`}
                                                >
                                                    Quantity
                                                </label>
                                                <input
                                                    type="number"
                                                    id={`quantity-${colorIndex}-${sizeIndex}`}
                                                    value={size.quantity}
                                                    className="input-quantity"
                                                    onChange={(event) =>
                                                        handleSizeChange(
                                                            colorIndex,
                                                            sizeIndex,
                                                            "quantity",
                                                            event
                                                        )
                                                    }
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleRemoveSize(
                                                            colorIndex,
                                                            sizeIndex
                                                        )
                                                    }
                                                    className="btn-remove-size"
                                                >
                                                    Remove Size
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleAddSize(colorIndex)
                                            }
                                            className="btn-remove-color"
                                        >
                                            Add Size
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveColor(colorIndex)
                                            }
                                            className="btn-remove-color"
                                        >
                                            Remove Color
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn-add-color"
                                    onClick={handleAddColor}
                                >
                                    Add Color
                                </button>
                            </div>
                            <div className="list-value-price">
                                <label for="fname">Price</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Product price.."
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                                <label for="fname">Discount(%)</label>
                                <input
                                    type="text"
                                    id="discountPersent"
                                    name="discountPersent"
                                    placeholder="Discount percentage.."
                                    value={formData.discountPersent}
                                    onChange={handleInputChange}
                                />
                                <label for="fname">Total price</label>
                                <input
                                    type="text"
                                    id="totalPrice"
                                    name="totalPrice"
                                    // value={formData.totalPrice}
                                    value={
                                        formData.totalPrice
                                            ? `${formData.totalPrice.toLocaleString()}.000 đ`
                                            : "0 đ"
                                    }
                                    readOnly
                                    disabled="true"
                                    style={{
                                        backgroundColor: "#d7d7d7",
                                        color: "black",
                                    }}
                                />
                            </div>
                            <label for="fname">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Write something.."
                                value={formData.description || ""}
                                onChange={handleInputChange}
                                style={{ height: "100px" }}
                            ></textarea>
                            {/* vừa thêm vào */}
                            <button
                                className="btn-xac-nhan-them"
                                // onClick={toastaddpro}
                            >
                                Add
                            </button>
                            {/* <ToastContainer /> */}
                        </form>
                    </div>
                </div>
            </div>
            <div
                className="Admin-table-Product"
                style={{ width: "2000px !important" }}
            >
                <div class="container mt-3">
                    <h2>Product Information</h2>
                    <p>List of currently available products :</p>
                    <table class="table-addproduct ">
                        <thead>
                            <tr>
                                <th style={{ width: "20px" }}>ID</th>
                                <th style={{ width: "10%" }}>Image</th>
                                <th style={{ width: "21%" }}>Title</th>
                                <th style={{ paddingLeft: "20px" }}>Made in</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Discount (%)</th>
                                <th>Total Price</th>
                                <th>Stock</th>
                                <th style={{ width: "6%" }}>Action</th>
                            </tr>
                        </thead>
                    </table>
                    <br />
                    <table className="table-showadd">
                        <tbody>
                            {products.products &&
                                products.products?.map((products) => (
                                    <DetailProduct
                                        key={products.id}
                                        products={products}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
