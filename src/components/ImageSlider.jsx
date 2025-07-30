import React from "react";
import leftArrow from "../assets/left-arrow.png"
import rightArrow from "../assets/right-arrow.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  // next arrow
  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl" onClick={onClick}>
      <img src={rightArrow} alt="LF-arrow"  className="h-7 w-auto" />
    </div>
  );

  // Prev Arrow
  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-white text-3xl" onClick={onClick}>
      <img src={leftArrow} alt="RT-arrow" className="h-7 w-auto" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[100%] relative">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={url} alt={`Slide ${index}`} className="p-8"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
