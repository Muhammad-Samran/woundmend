import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeClinic from "./clinic";
import BookourBestDoctor from "./bookourbestdoctor";
import BrowsebySpecialities from "./browsebySpecialities";
import HomeFeatures from "./features";
import HomeBlog from "./blog";
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  doctor_img,

  services_01,
  services_02,
  services_03,
  book_doctor_01,
  book_doctor_02,
  book_doctor_03,
  book_doctor_04,
  doctor_check,
  news_img,
  blog_11,
  blog_12,
  blog_13,
  icon3,
  icon2,
  icon4,
  icon1,
  googleplay,
  applestore,
} from "./image.jsx";
import Header from "../header";
import Footer from "../footer";
import HomeSlider2 from "./homeslider2";

const Home = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  //mobile
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };
  const toggleSidebarone = (value) => {
    console.log(value);
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    console.log(value);
    setSideMenutwo(value);
  };
  console.log("Working", isSideMenu);

  const settings = {
    width: 400,
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "10px",
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const doctors = {
    width: 400,
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "10px",
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  let pathnames = window.location.pathname;

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  return (
    <div>
      <div className="main-wrapper">
        {/* Home Banner */}
        <div className="home-one-banner">
          {/* <div className="bg-shapes">
            <img
              src={shapes_10}
              className="shape-01 aos"
              alt="img"
              data-aos="fade-right"
            />
            <img
              src={shapes_7}
              className="shape-03 aos"
              alt="img"
              data-aos="zoom-out"
            />
            <img
              src={shapes_8}
              className="shape-04 aos"
              alt="img"
              data-aos="fade-left"
            />
            <img
              src={shapes_6}
              className="shape-02 aos"
              alt="img"
              data-aos="fade-down"
            />
          </div> */}
          <div className="container">{/* <Header /> */}</div>
          <Header />
          <HomeSlider2 />
        </div>
        {/* /Home Banner */}

        {/* Service Section */}
        <section className="service-section">
          <div className="container aos" data-aos="fade-up">
            <div className="section-header text-center aos" data-aos="fade-up">
              <h2 className="color-primary">High Quality Service for you</h2>
              <p className="sub-title color-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="card flex-fill bg-transparent">
                  <img
                    alt="Card Image"
                    src={services_01}
                    className="card-img-top"
                  />
                  <div className="card-header">
                    <h5 className="card-title mb-0 text-center">Step 1</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">
                      Download the WoundMend mobile app, available both for
                      Android and ioS platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="card flex-fill bg-transparent">
                  <img
                    alt="Card Image"
                    src={services_02}
                    className="card-img-top"
                  />
                  <div className="card-header">
                    <h5 className="card-title mb-0 text-center">Step 2</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">
                      Point your phone camera towards the concerned part of the
                      skin. Our app will investigate your injury through the use
                      of our qualified database and high-tech machine learning
                      along with clinically validated algorithm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="card flex-fill bg-transparent">
                  <img
                    alt="Card Image"
                    src={services_03}
                    className="card-img-top"
                  />
                  <div className="card-header">
                    <h5 className="card-title mb-0 text-center">Step 3</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">
                      Wait for WoundMend to determine the type and nature of
                      your wound for a whole list of predictions in no time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Service Section */}
        {/* Doctor Section */}
        <section className="doctor-section">
          <div className="doctor-right-img aos" data-aos="fade-up">
            <img src={doctor_img} className="img-fluid" alt="" />
          </div>
          <div className="container">
            <div className="section-header text-center aos" data-aos="fade-up">
              <h2 className="color-primary">Book Our Doctor</h2>
              <p className="sub-title color-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="doctor-book-slider slider">
                  <Slider {...doctors}>
                    <div className="doctor-profile-widget">
                      <Link to="/patient/doctor-profile">
                        <img
                          src={book_doctor_01}
                          className="img-fluid book-doctor"
                          alt=""
                        />
                      </Link>
                      <div className="pro-content">
                        <div className="provider-info">
                          <div className="pro-icon">
                            <img src={icon2} className="img-fluid" alt="" />
                          </div>
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile" tabIndex={0}>
                              Edward Willey
                              <img src={doctor_check} alt="" />
                            </Link>
                          </h3>
                          <div>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                4.9 ( 82 )
                              </span>
                            </div>
                          </div>
                          <div className="content-info">
                            <div className="booking-btn">
                              <Link
                                to="/patient/booking"
                                className="btn book-btn"
                              >
                                Book Appointment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-profile-widget">
                      <Link to="/patient/doctor-profile">
                        <img
                          src={book_doctor_02}
                          className="img-fluid book-doctor"
                          alt=""
                        />
                      </Link>
                      <div className="pro-content">
                        <div className="provider-info">
                          <div className="pro-icon">
                            <img src={icon3} className="img-fluid" alt="" />
                          </div>
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile" tabIndex={0}>
                              Deborah Angel
                              <img src={doctor_check} alt="" />
                            </Link>
                          </h3>
                          <div>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                4.9 ( 82 )
                              </span>
                            </div>
                          </div>
                          <div className="content-info">
                            <div className="booking-btn">
                              <Link
                                to="/patient/booking"
                                className="btn book-btn"
                              >
                                Book Appointment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-profile-widget">
                      <Link to="/patient/doctor-profile">
                        <img
                          src={book_doctor_03}
                          className="img-fluid book-doctor"
                          alt=""
                        />
                      </Link>
                      <div className="pro-content">
                        <div className="provider-info">
                          <div className="pro-icon">
                            <img src={icon1} className="img-fluid" alt="" />
                          </div>
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile" tabIndex={0}>
                              Merry Anderson
                              <img src={doctor_check} alt="" />
                            </Link>
                          </h3>
                          <p>Gastrologic Specialist</p>
                          <div>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                4.9 ( 82 )
                              </span>
                            </div>
                          </div>
                          <div className="content-info">
                            <div className="social-info">
                              <Link to="" target="_blank">
                                <i className="fab fa-facebook hi-icon" />
                              </Link>
                              <Link to="" target="_blank">
                                <i className="fab fa-linkedin hi-icon" />
                              </Link>
                              <Link to="" target="_blank">
                                <i className="fab fa-instagram hi-icon" />
                              </Link>
                              <Link to="" target="_blank">
                                <i className="fab fa-twitter hi-icon" />
                              </Link>
                            </div>
                            <div className="booking-btn">
                              <Link
                                to="/patient/booking"
                                className="btn book-btn"
                              >
                                Book Appointment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-profile-widget">
                      <Link to="/patient/doctor-profile">
                        <img
                          src={book_doctor_04}
                          className="img-fluid book-doctor"
                          alt=""
                        />
                      </Link>
                      <div className="pro-content">
                        <div className="provider-info">
                          <div className="pro-icon">
                            <img src={icon4} className="img-fluid" alt="" />
                          </div>
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile" tabIndex={0}>
                              David Blackwell
                              <img src={doctor_check} alt="" />
                            </Link>
                          </h3>
                          <div>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                4.9 ( 82 )
                              </span>
                            </div>
                          </div>
                          <div className="content-info">
                            <div className="booking-btn">
                              <Link
                                to="/patient/booking"
                                className="btn book-btn"
                              >
                                Book Appointment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-profile-widget">
                      <Link to="/patient/doctor-profile">
                        <img
                          src={book_doctor_01}
                          className="img-fluid book-doctor"
                          alt=""
                        />
                      </Link>
                      <div className="pro-content">
                        <div className="provider-info">
                          <div className="pro-icon">
                            <img src={icon2} className="img-fluid" alt="" />
                          </div>
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile" tabIndex={0}>
                              Edward Willey
                              <img src={doctor_check} alt="" />
                            </Link>
                          </h3>
                          <div>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span className="d-inline-block average-rating">
                                4.9 ( 82 )
                              </span>
                            </div>
                          </div>
                          <div className="content-info">
                            <div className="booking-btn">
                              <Link
                                to="/patient/booking"
                                className="btn book-btn"
                              >
                                Book Appointment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-end"></div>
            </div>
          </div>
        </section>
        {/* /Doctor Section */}
        {/* Features Section */}
        {/* /Features Section */}
        {/* News Section */}
        <section className="news-letter-bg">
          <div className="news-bg">
            <div className="row">
              <div
                className="col-lg-7 col-md-12 news-left aos"
                data-aos="fade-up"
              >
                <div>
                  <h2>Ready to Take The First Photo ?</h2>
                  <p>
                    Download Woundmend from the App Store or Google Play Now and{" "}
                    <br />
                    start checking your Wounds.
                  </p>
                </div>
                <div>
                  <div className="storeapp d-flex">
                    <div className="mr-1">
                      <img src={applestore} />
                    </div>
                    <div>
                      <img src={googleplay} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 aos" data-aos="fade-up">
                <div className="news-img">
                  <img
                    style={{ height: "350px" }}
                    src={news_img}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /News Section */}
        {/* Faqs Section */}
        <div className="container">
          <section className="news-section">
            <div className="section-header text-center aos" data-aos="fade-up">
              <h2 className="color-primary">Faqs</h2>
              <p className="sub-title color-grey">
                Frequently asked questions about DermPro
              </p>
            </div>
            <div className="container">
              <div
                className="row justify-content-center my-5"
                data-aos="fade-up"
              >
                <div className="col-sm-12 col-md-6">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          style={{ color: "#63AD01" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          What is WoundMend?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          WoundMend offers instant assessment of acute and
                          chronic wounds. The state-of-the-art mobile
                          application operates on Artificial Intelligence
                          technology and helps you scan all sorts of rashes,
                          wounds or pigments.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          style={{ color: "#63AD01" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What is the Most Common Type of Wound?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            The most common types of chronic wounds include
                            ulcers, infectious wounds, ischemic wounds, surgical
                            wounds, and wounds from radiation poisoning. Ulcers
                            are the most common type of chronic wounds.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          style={{ color: "#63AD01" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Where Can I Find WoundMend App?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            WoundMend app is available on both AppStore and
                            Playstore for download.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFour">
                        <button
                          style={{ color: "#63AD01" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Why Should Use WoundMend?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Anyone who has an injury is highly recommended to use
                          WoundMend. It is an extremely easy and effective way
                          to establish and monitor wound health.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFive">
                        <button
                          style={{ color: "#63AD01" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Is There Still Need To See Doctor for Wounds?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            WoundMend is not a substitute to visitng your
                            doctor. WoundMend is there to assist you in
                            assessing your wounds and enables you to seek more
                            timely care.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingSix">
                        <button
                          style={{ color: "#63AD01" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Where Can I Find WoundMend App?
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            WoundMend app is available on both AppStore and
                            Playstore for download.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details-btn text-center">
              <Link to="/faqs" className="btn view-more">
                See All Faqs <i className="fas fa-arrow-right ms-2" />
              </Link>
            </div>
          </section>
        </div>
        {/* /News Section */}
        {/* News Section */}
        <section className="news-section">
          <div className="container">
            <div className="section-header text-center aos" data-aos="fade-up">
              <h2 className="color-primary">Let’s See Our Latest Blog</h2>
              <p className="sub-title color-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="grid-news w-100">
                  <div className="news-image">
                    <Link to="/blog/blog-details">
                      <img
                        className="img-fluid"
                        src={blog_11}
                        alt="News Image"
                      />
                    </Link>
                  </div>
                  <div className="news-content">
                    <ul>
                      <li>
                        <div className="news-date">
                          <Link to="#">
                            <i className="feather-calendar me-2" />
                            <span>4 Dec 2021</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="news-date">
                          <Link to="#" className="news-light-btn">
                            <i className="feather-tag me-2" />
                            {/* <span>Heath Care</span> */}
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <h3 className="news-title">
                      <Link to="/blog/blog-details">
                        How to handle patient body in MRI
                      </Link>
                    </h3>
                    <p>
                      <Link to="/blog/blog-details">Read News</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="grid-news w-100">
                  <div className="news-image">
                    <Link to="/blog/blog-details">
                      <img
                        className="img-fluid"
                        src={blog_12}
                        alt="News Image"
                      />
                    </Link>
                  </div>
                  <div className="news-content">
                    <ul>
                      <li>
                        <div className="news-date">
                          <Link to="#">
                            <i className="feather-calendar me-2" />
                            <span>10 Dec 2021</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="news-date">
                          <Link to="#" className="news-light-btn">
                            <i className="feather-tag me-2" />
                            {/* <span>Surgery</span> */}
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <h3 className="news-title">
                      <Link to="/blog/blog-details">
                        Woundmend – Making your clinic painless visit?
                      </Link>
                    </h3>
                    <p>
                      <Link to="/blog/blog-details">Read News</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="grid-news w-100">
                  <div className="news-image">
                    <Link to="/blog/blog-details">
                      <img
                        className="img-fluid"
                        src={blog_13}
                        alt="News Image"
                      />
                    </Link>
                  </div>
                  <div className="news-content">
                    <ul>
                      <li>
                        <div className="news-date">
                          <Link to="#">
                            <i className="feather-calendar me-2" />
                            <span>15 Dec 2021</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="news-date">
                          <Link to="#" className="news-light-btn">
                            <i className="feather-tag me-2" />
                            {/* <span>General</span> */}
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <h3 className="news-title">
                      <Link to="/blog/blog-details">
                        Benefits of consulting with an Online Doctor
                      </Link>
                    </h3>
                    <p>
                      <Link to="/blog/blog-details">Read News</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details-btn text-center">
              <Link to="/blog/blog-details" className="btn view-more">
                View More <i className="fas fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </section>
        {/* /News Section */}
        {/* Footer One */}
        <Footer {...props} />
        {/* /Footer One*/}
      </div>
    </div>
  );
};

export default Home;
