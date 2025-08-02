import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCardSmall = ({ product }) => {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl"
      onClick={onClick}
    >
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl"
      onClick={onClick}
    >
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex justify-center items-center bg-black/30 flex-col md:mx-2.5  md:px-3.5 py-4 text-white rounded-[8px] shadow-lg shadow-white/20 cursor-pointer md:w-60 w-[100%]">
      <div className="w-[100%]">
        <Slider {...settings} className="w-[100%]">
          {product.image.map((img, index) => (
            <div key={index} className="md:p-2 p-0 ">
              <div className="w-[100%] flex  ">
                <img src={img} className="" />
              </div>
            </div>
          ))}
        </Slider>
        <h1 className="md:text-xl text-[8px] pt-3 md:h-36 h-12 overflow-hidden">{product.description}</h1>
        <h1 className="md:pt-2.5 md:text-lg text-[8px]">₹{product.price}</h1>
        <p className="md:text-lg text-[8px]">(Incl. all Taxes)</p>
      </div>
    </div>
  );
};

export default ProductCardSmall;
