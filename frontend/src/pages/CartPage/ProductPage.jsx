import React from 'react';

import './general.css';
import  './media.css';
import './style.css';
const ProductPage = () => {
  return (
    <div>
      <header className="header" role="banner"></header>

      <main role="main">
        <section className="section-hero">
          <div className="hero container grid grid-2-cols">
            <div className="hero-img-box">
              <div className="operation-content-box">

{/* MAIN IMAGE FOR THE LEFT */}

                <img src="/imgs/shoe_0.jpg" className="product-image operation-content-1 active" alt="shoes1" width="400" />
                {/* <img src="./imgs/shoe_1.jpg" className="product-image operation-content-2 " alt="shoes" width="400" />
                <img src="./imgs/shoe_2.jpg" className="product-image operation-content-3 " alt="shoes" width="400" />
                <img src="./imgs/shoe_3.jpg " className="product-image operation-content-4 " alt="shoes" width="400" /> */}
              </div>
            </div>

            <div className="hero-text-box">
              <h3>Sneaker company</h3>
              <h1 className="headings-primary">
                Fall Limited Edition Sneakers
              </h1>
              <p className="description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>
              <div className="price-section">
                <div className="price">₹125.00 <span>50%</span></div>
                <div className="old-price"> <del>₹250.00</del></div>
              </div>
              <div className="btn-list grid">
                <div className="number-box">
                  <button id="decrease">
                    <img src="./imgs/minus.png" alt="icon-minus" />
                  </button>
                  <span id="quanity">0</span>
                  <button id="increase">
                    <img src="./imgs/plus.svg" alt="icon-plus" />
                  </button>
                </div>
                <button className="btn center">
                  <span>
                    <svg className="h-logo" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                      <path id="btn-icon" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero" />
                    </svg>
                  </span>
                  Buy
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="main-ovarlay center">
        <div className="ovarlay-hero-img-box ">
          <div className="hero-slider">
            <div className="slider">
              <div className="slide"><img src="./imgs/image-product-1.jpg" alt="Photo 1" /></div>
              <div className="slide"><img src="./imgs/image-product-2.jpg" alt="Photo 2" /></div>
              <div className="slide"><img src="./imgs/image-product-3.jpg" alt="Photo 3" /></div>
              <div className="slide"><img src="./imgs/image-product-4.jpg" alt="Photo 4" /></div>
            </div>
            <button className="slider__btn slider__btn--left " aria-label="left align">
              <svg className="btn-right" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
                <path className="arrow-icon" d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
              </svg>
            </button>
            <button className="slider__btn slider__btn--right" aria-label="right align">
              <svg className="btn-right" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
                <path className="arrow-icon" d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
              </svg>
            </button>
            <button className="slider-delete">
              <svg id="cross-icon-p" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                <path id="cross-icon" d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="ovarlay-operation-tab-box center">
            <img src="\CartPage\imgs\shoe_0.jpg" className="slider-dot" data-tab="0" alt="shoe" />
            <img src="images/image-product-2-thumbnail.jpg" className="slider-dot" data-tab="1" alt="shoe" />
            <img src="images/image-product-3-thumbnail.jpg" className="slider-dot" data-tab="2" alt="shoe" />
            <img src="images/image-product-4-thumbnail.jpg" className="slider-dot" data-tab="3" alt="shoe" />
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default ProductPage;
