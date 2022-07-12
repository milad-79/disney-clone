import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

function Silder() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
      <Slider {...settings} className="slider">
        <div className="wrap">
          <span>
          <img src="/images/slider-badag.jpg" alt="" />
          </span>
        </div>

        <div className="wrap">
          <span>
          <img src="/images/slider-badging.jpg" alt="" />
          </span>
        </div>

        <div className="wrap">
          <span>
          <img src="/images/slider-scale.jpg" alt="" />
          </span>
        </div>

        <div className="wrap">
          <span>
          <img src="/images/slider-scales.jpg" alt="" />
          </span>
        </div>
      </Slider>

  );
}

export default React.memo(Silder);
