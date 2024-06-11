import React from "react";

const CheckoutDetail = ({item}) => {
    return (
        <div className="orderpay-product-card">
        <div className="orderpay-miczone">
          <i class="icofont-ui-home"></i>
          <span>Miczone LLC</span>
        </div>
        <div className="orderpay-product-item">
          <div className="orderpay-item-img">
            <img
              src={item.product.imageUrl}
              alt=""
            />
          </div>
          <div className="orderpay-item-name">
            <div className="item-name">
              <b>
              {item.product.title}
              </b>
            </div>
            <div className="meta-item-wrap">
              <div className="meta-item">
                <div className="content">Xuất xứ : Việt Nam</div>
              </div>
              <div className="seperate-item">  </div>
              <div className="meta-item"  style={{ marginLeft: '15px' }}>
                <div class="label" >Thương hiệu : </div>
                <div className="content">
                  <span target="_blank" style={{ marginLeft: '5px' }}> {item.product.brand.name}</span>
                </div>
              </div>
            </div>


            <div className="meta-item-wrap">
              <div className="meta-item" >
              <div class="label">Màu sắc : </div>
                <div className="content">
                <span target="_blank" style={{ marginLeft: '5px' }}>{item.color}</span>
                </div>
              </div>
              <div className="seperate-item">  </div>
              <div className="meta-item" style={{ marginLeft: '31px' }}>
                <div class="label">Kích thước : </div>
                <div className="content">
                  <span target="_blank" style={{ marginLeft: '5px' }}> {item.size}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="orderpay-shipdate">
            <b>Giao Tiêu chuẩn</b> <br />
            Dự kiến giao hàng <br />
            <span className="shipdate"> 11-05-2024 - 15-05-2024</span>
          </div>
          <div className="orderpay-item-price">
            <div className="orderpay-item-value">
              {item.totalPrice ? `${Math.round(item.totalPrice).toLocaleString()},000 đ` : '0 đ'}
              
            </div>
            <div className="quantity-buy">
              Số lượng: <span className="">{item.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CheckoutDetail