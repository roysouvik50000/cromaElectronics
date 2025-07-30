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

export default function HeroAdSection() {
    const heroAdSection =[
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/July/26072025/Desktop/HP_Rotating_IFB_25July2025_8lsR2o445A.jpg?updatedAt=1753444378703',
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/Jul/26072025/HP_Rotating_TV_26July2025_ig62v68-if.jpg?updatedAt=1753505823448',
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/July/25072025/Desktop/HP_Rotating_Galaxy-Fold-&-Flip7_24July2025_UCtMTeacB.jpg?updatedAt=1753447338384',
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/Jul/25072025/HP_LaptopMania_25July2025_S5BwbUHXE.jpg?updatedAt=1753428400033',
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Sanity/HP/Jul/25072025/HP_LaptopMania_25July2025_S5BwbUHXE.jpg?updatedAt=1753428400033',
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/HP%20Rotating%20Banners/July/26072025/Desktop/HP_Rotating_Nothing_26July2025_qEm9e9S2-I.jpg?updatedAt=1753444205858'
    ];
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl"
      onClick={onClick}
    >
      <img src={rightArrow} alt="LF-arrow" className="h-20 w-auto" />
    </div>
  );

  // Prev Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl"
      onClick={onClick}
    >
      <img src={leftArrow} alt="RT-arrow" className="h-20 w-auto" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[100%] relative">
          <Slider {...settings}>
            {heroAdSection.map((url, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={url} alt={`Slide ${index}`} className="p-0" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
