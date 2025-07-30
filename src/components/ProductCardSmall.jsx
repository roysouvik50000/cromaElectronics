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
    <div className="flex justify-center items-center bg-black/30 flex-col mx-2.5  px-3.5 py-4 text-white rounded-[8px] shadow-lg shadow-white/20 cursor-pointer w-60">
      <div className="w-[100%]">
        <Slider {...settings} className="w-[100%]">
          {product.image.map((img, index) => (
            <div key={index} className="p-2 ">
              <div className="w-[100%] flex  ">
                <img src={img} className="" />
              </div>
            </div>
          ))}
        </Slider>
        <h1 className="text-xl pt-3 h-36 overflow-hidden">{product.description}</h1>
        <h1 className="pt-2.5">₹{product.price}</h1>
        <p>(Incl. all Taxes)</p>
      </div>
    </div>
  );
};

export default ProductCardSmall;
