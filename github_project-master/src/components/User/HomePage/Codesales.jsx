import React from "react";
import "./Codesales.css";
const Codesales = () => {
  return (
    <div>
     
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={0}
            className="active"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={1}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={2}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={3}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={4}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={5}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={6}
          />
        </div>
        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2024/01/15/Fado.VN_1705298825.4553.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2024/01/15/Fado.VN_1705298825.4553.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480795.525.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480795.525.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2024/02/27/Fado.VN_1708999308.9194.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2024/02/27/Fado.VN_1708999308.9194.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/07/10/Fado.VN_1688966521.7044.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/07/10/Fado.VN_1688966521.7044.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/08/11/Fado.VN_1691734617.131.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/08/11/Fado.VN_1691734617.131.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/12/27/Fado.VN_1703659346.2122.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/12/27/Fado.VN_1703659346.2122.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/10/02/Fado.VN_1696219891.285.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/10/02/Fado.VN_1696219891.285.jpg"
              alt=""
              height={272}
            />
          </div>
        </div>
        {/* Left and right controls/icons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
      <main className="main-codesales">
        <h1 className="voucher">VOUCHER TỪ T&T</h1>
      </main>
   
    </div>
  );
};

export default Codesales;
