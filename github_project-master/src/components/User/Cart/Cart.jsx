import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import CheckBox from "./CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { getCart, sentToCheckout, updateCartTotalPriceCheck } from "../../../State/Cart/Action";
import { findCartItemsByCart } from "../../../State/CartItem/Action";

import CartDetail from "./CartDetail";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Cart = () => {
 
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store);
  const { cart } = useSelector((store) => store);
  const [checkedItems, setCheckedItems] = useState([]);
  
  const totalDiscountedPrice = cart.cart?.totalDiscountedPrice;

 
  const handleSubmit = () => {
    dispatch(sentToCheckout(checkedItems))
  }
  useEffect(() => {
    dispatch(getCart());
    dispatch(findCartItemsByCart());

  }, [cart.updateCartItem, cart.deleteCartItem]);
  return (
    <div>
      <main>
        <div className="select-inland-import">
          <ul className="checkbox-inland-import">
            <li>
              <div className="container">
               
              </div>
            </li>
            <li>
              <div className="title-product-cart">
                <img
                  width={48}
                  height={48}
                  src="https://img.icons8.com/parakeet-line/48/shop.png"
                  alt="shop"
                />
                <i>Sản phẩm</i>
              </div>
            </li>
          </ul>
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <ul className="element-product">
            <li>Cách thức giao</li>
            <li>Đơn giá</li>
            <li>Số lượng</li>
            <li>Số tiền</li>
            <li>Thao tác</li>
          </ul>
        </div>
        <section className="group-cart">
          {Array.isArray(cartItems.cartItems) &&
            cartItems.cartItems.map((item) => (
              <CartDetail
                key={item.id}
                item={item}
                handleSubmit={handleSubmit}
                checkedItems={checkedItems} setCheckedItems={setCheckedItems}
              
              />
            ))}
        
        </section>
        {/* bar-pay */}
        <section className="cart-order">
          <div>
            <div className="freeship">
              <img
                src="https://st-fe-v2.fado.vn/desktop/image/page/cart-page/freeship-text.svg"
                alt=""
                className="mz-mr-2"
              />{" "}
              <i></i>
              <i style={{ fontWeight: 500 }}>
                Đơn hàng đã được miễn phí giao hàng trong nước
              </i>
            </div>
            <div className="btn-voucher">
              <input
                // type="text"
                placeholder="Nhập mã giảm giá"
                className="discount-code-input"
              />
              <button>Áp dụng</button>
            </div>
          </div>
          <div />
          <div>
            <ul />
            <ul className="pay">
              <li style={{ color: "rgb(130, 136, 136)" }}>
                Tổng tiền sản phẩm:
              </li>
              <li className="total-price-value-product">
              
                {totalDiscountedPrice ? `${Math.round(totalDiscountedPrice).toLocaleString()},000 đ` : '0 đ'}
              </li>

              <li>
                <Link to="/Thanhtoandathang">
                  <button onClick={handleSubmit}>Đặt hàng</button>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
