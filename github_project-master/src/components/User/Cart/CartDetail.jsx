import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    removeItemToCart,
    updateCartTotalPriceCheck,
    updateCartTotalPriceNotCheck,
    updateCartTotalPriceOnCheck,
    updateItemToCart,
} from "../../../State/Cart/Action";
import { IconButton } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

export const CartDetail = ({ item, checkedItems, setCheckedItems }) => {
    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(item?.checkStatus);

    useEffect(() => {
        if (item?.checkStatus === false || item?.checkStatus === "false") {
            setIsChecked(false);
            console.log("false");
        } else if (item?.checkStatus === true || item?.checkStatus === "true") {
            setIsChecked(true);
            console.log("true");
        }
    }, [checkedItems, item.id, item?.checkStatus]);

    const handleUpdateCartItem = (num) => {
        const newQuantity = item.quantity + num;
        if (newQuantity >= 1) {
            const data = {
                data: { quantity: newQuantity },
                cartItemId: item.id,
            };
            dispatch(updateItemToCart(data));
            console.log("quantity", data);
        }
    };

    const handleRemoveCartItem = () => {
        dispatch(removeItemToCart(item.id));
    };

    const handleChange = (cartItemId) => {
        const isCheckedExist = checkedItems.includes(cartItemId);
        let updatedItems;

        if (isCheckedExist) {
            updatedItems = checkedItems.filter((id) => id !== cartItemId);
        } else {
            updatedItems = [...checkedItems, cartItemId];
        }

        setCheckedItems(updatedItems);
        setIsChecked(!isCheckedExist);
        dispatch(updateCartTotalPriceCheck(cartItemId));
    };

    return (
        <div className="cart-product">
            <ul className="cart-name">
                <li>
                    <div className="container">
                        <label className="container">
                            <input
                                type="checkbox"
                                className="checkboxchirl"
                                checked={isChecked}
                                onChange={() => handleChange(item.id)}
                            />

                            <svg viewBox="0 0 64 64" height="21px" width="21px">
                                <path
                                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                    pathLength="575.0541381835938"
                                    className="path"
                                ></path>
                            </svg>
                        </label>
                    </div>
                </li>
                <li className="cart-product-img">
                    <a href="$">
                        <img
                            // data-src="https://cdn-amz.woka.io/images/I/71zdEncDbPS._SR200,200_.jpg"
                            src={item.product?.imageUrl}
                            alt="Womens Fruit"
                            className="product-img lazyloaded"
                        />
                    </a>
                </li>
                <li className="content-product-cart">
                    <div className="cart-name-product">
                        <a href="$">{item.product?.title}</a>
                    </div>
                    <div>
                        Từ :{" "}
                        <b>
                            <span className="product-cart-made-in">
                                {item.product?.soldAt}
                            </span>
                        </b>
                    </div>
                    <div className="cart-size-product">
                        Size :{" "}
                        <b>
                            <span className="cart-size-product value-size">
                                {item?.size}
                            </span>
                        </b>
                    </div>
                    <div className="product-cart-text-color">
                        Color :
                        <b>
                            <span className="cart-color-product">
                                {item?.color}
                            </span>
                        </b>
                    </div>
                    <div className="product-cart-text-color">
                        Thương hiệu :
                        <b>
                            <span className="cart-color-product">
                                {item.product?.brand.name}
                            </span>
                        </b>
                    </div>
                </li>
            </ul>
            <ul className="info-bill-product">
                <li className="ship-product">
                    <p>
                        Giao tiêu chuẩn <br />
                        Giao nhanh, tiêt kiệm
                    </p>
                </li>

                <li className="initial-value">
                    {item?.price
                        ? `${Math.round(item?.price).toLocaleString()},000 đ`
                        : "0 đ"}
                </li>
                <li
                    className="quantity-input-value"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <IconButton
                        onClick={() => handleUpdateCartItem(-1)}
                        disable={item.quantity <= 1}
                    >
                        <RemoveCircleOutline
                            style={{ color: "black", fontSize: "25px" }}
                        />
                    </IconButton>
                    <span
                        className="initial-value"
                        style={{ fontSize: "18px", lineHeight: "18px" }}
                    >
                        {item?.quantity}
                    </span>
                    <IconButton onClick={() => handleUpdateCartItem(1)}>
                        <AddCircleOutline
                            style={{ color: "black", fontSize: "25px" }}
                        />
                    </IconButton>
                </li>
                <li className="price-value-product">
                    {" "}
                    {item?.totalPrice
                        ? `${Math.round(
                              item?.totalPrice
                          ).toLocaleString()},000 đ`
                        : "0 đ"}
                </li>
                <li>
                    <button
                        onClick={handleRemoveCartItem}
                        style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            textDecoration: "underline",
                            color: "inherit",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width={100}
                            height={100}
                            viewBox="0 0 48 48"
                        >
                            <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};
export default CartDetail;
