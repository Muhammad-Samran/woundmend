import React, { useState, useEffect } from "react";
import HomeClinic from "./clinic";
import BookourBestDoctor from "./bookourbestdoctor";
import BrowsebySpecialities from "./browsebySpecialities";
import HomeFeatures from "./features";
import HomeBlog from "./blog";
import Slider from "react-slick";
import { Slider1, Slider2, Slider3 } from "./image.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSlider2 = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    speed: 600,
    infinite: true,
    arrows: true,
    rtl: true,
    slidesToShow: 1,
    cssEase: "ease-out",
  };
  return (
    <div className="">
      {/* Home Banner */}
      <section id="home" className="divider">
        <div className="container-fluid p-0">
          {/*- slider --*/}
          <Slider {...settings}>
            <div className="carousel-item active ">
              <img className="d-block w-100" src={Slider1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider3} alt="Third slide" />
            </div>
          </Slider>

          {/*- /slider --*/}
        </div>
      </section>
    </div>
  );
};

export default HomeSlider2;
