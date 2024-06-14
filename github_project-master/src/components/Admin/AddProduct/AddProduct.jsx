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
    const toastaddpro = () => toast("Thêm Sản Phẩm Thành Công!");
    const toastdelete = () => toast("Xóa Sản Phẩm Thành Công!");
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

                <h2>Sản Phẩm</h2>
            </div>
            <hr />
            <div className="form-AddProduct">
                <button
                    type="button"
                    class="btn btn-primary btn-Addproduct"
                    data-bs-toggle="collapse"
                    data-bs-target="#Addproduct"
                >
                    Thêm Sản Phẩm
                </button>
                <div id="Addproduct" class="collapse">
                    <div class="container " id="container-Addproduct">
                        <form
                            action=""
                            className="From-addproduct"
                            onSubmit={handleSubmit}
                        >
                            <label for="fname">Hình Ảnh</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Nhập hình ảnh của bạn..."
                                value={formData.imageUrl || ""}
                                onChange={handleInputChange}
                            />
                            <label for="fname">Tiêu Đề</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Nhập tiêu đề của bạn..."
                                value={formData.title || ""}
                                onChange={handleInputChange}
                            />
                            <label for="fname">Nơi Sản Xuất</label>
                            <select
                                id="soldAt"
                                name="soldAt"
                                value={formData.soldAt}
                                onChange={handleInputChange}
                            >
                                <option value="null">Chọn Quốc Gia</option>
                                <option value="Việt Nam">Việt Nam</option>
                                <option value="Mỹ">Mỹ</option>
                                <option value="Nhật">Nhật</option>
                                <option value="Đức">Đức</option>
                                <option value="Anh">Anh</option>
                            </select>
                            {/* phan sua moi */}
                            <label for="fname" style={{ marginTop: "10px" }}>
                                Danh Mục Cấp Trên
                            </label>
                            <input
                                type="text"
                                id="topLavelCategory"
                                name="topLavelCategory"
                                placeholder="Tên của bạn.."
                                value={formData.topLavelCategory || ""}
                                onChange={handleInputChange}
                            />{" "}
                            <label for="fname">Danh Mục Cấp Hai</label>
                            <input
                                type="text"
                                id="secondLavelCategory"
                                name="secondLavelCategory"
                                placeholder="Tên của bạn.."
                                value={formData.secondLavelCategory || ""}
                                onChange={handleInputChange}
                            />{" "}
                            <label for="fname">Danh Mục Cấp Ba</label>
                            <input
                                type="text"
                                id="thirdLavelCategory"
                                name="thirdLavelCategory"
                                placeholder="Tên của bạn.."
                                value={formData.thirdLavelCategory || ""}
                                onChange={handleInputChange}
                            />{" "}
                            <label for="fname">Thương Hiệu</label>
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
                                <option value="null">Chọn Thương Hiệu</option>

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
                                            Màu
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
                                                    Kích Cỡ
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
                                                    Số Lượng
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
                                                    Xóa Kích Cỡ
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
                                            Thêm Kích Cỡ
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveColor(colorIndex)
                                            }
                                            className="btn-remove-color"
                                        >
                                            Xóa Màu
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn-add-color"
                                    onClick={handleAddColor}
                                >
                                    Thêm Màu
                                </button>
                            </div>
                            <div className="list-value-price">
                                <label for="fname">Giá</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Giá sản phẩm.."
                                    value={formData.price}
                                    onChange={handleInputChange}
                                />
                                <label for="fname">Giảm Giá (%)</label>
                                <input
                                    type="text"
                                    id="discountPersent"
                                    name="discountPersent"
                                    placeholder="Phần trăm giảm giá.."
                                    value={formData.discountPersent}
                                    onChange={handleInputChange}
                                />
                                <label for="fname">Tổng Giá</label>
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
                            <label for="fname">Mô Tả</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Viết gì đó.."
                                value={formData.description || ""}
                                onChange={handleInputChange}
                                style={{ height: "100px" }}
                            ></textarea>
                            {/* vừa thêm vào */}
                            <button
                                className="btn-xac-nhan-them"
                                // onClick={toastaddpro}
                            >
                                Thêm
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
                    <h2>Thông Tin Sản Phẩm</h2>
                    <p>Danh sách các sản phẩm hiện có :</p>
                    <table class="table-addproduct ">
                        <thead>
                            <tr>
                                <th style={{ width: "20px" }}>ID</th>
                                <th style={{ width: "10%" }}>Hình Ảnh</th>
                                <th style={{ width: "21%" }}>Tiêu Đề</th>
                                <th style={{ paddingLeft: "20px" }}>
                                    Nơi Sản Xuất
                                </th>
                                <th>Thương Hiệu</th>
                                <th>Danh Mục</th>
                                <th>Giá</th>
                                <th>Giảm Giá (%)</th>
                                <th>Tổng Giá</th>
                                <th>Tồn Kho</th>
                                <th style={{ width: "6%" }}>Hành Động</th>
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
