import React, { useState } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCardSmall from "./ProductCardSmall";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/productSlice";
import { useNavigate } from "react-router";


const AllProductSlider = ({ categoryToView }) => {
  const navigate = useNavigate();
  const allProduct = useSelector(state => state.allProduct.allProduct)

  const dispatch = useDispatch();
  // next arrow
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl"
      onClick={onClick}
    >
      <img src={rightArrow} alt="LF-arrow" className="h-5.5 w-auto" />
    </div>
  );

  // Prev Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl"
      onClick={onClick}
    >
      <img src={leftArrow} alt="RT-arrow" className="h-5.5 w-auto" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const viewProductHandler = (product) => {
    dispatch(setProduct(product));
    window.scrollTo({top:0 , behavior:'smooth'});
    navigate('/productCard')
  };

  return (
    <>
      <div className="flex justify-center items-center md:px-5">
        <div className="w-[100%] relative">
          <Slider {...settings} className="w-[100%]">
            {allProduct && allProduct.map((product, index) => {
              if (product.category === categoryToView) {
                return (
                  <div
                    key={index}
                    className="md:px-12 px-3 "
                    onClick={(e) => `
                      ${viewProductHandler(product)}
                      ${e.preventDefault()}
                    `}
                  >
                    <ProductCardSmall product={product} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AllProductSlider;
