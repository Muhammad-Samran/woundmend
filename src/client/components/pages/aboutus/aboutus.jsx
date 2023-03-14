import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { aboutus,applestore,googleplay} from "./img.jsx";

const Aboutus = (props) => {
  useEffect(() => {
    document.body.classList.add("about-page");

    return () => document.body.classList.remove("about-page");
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    autoplay: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">About Us</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <section className="contact-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h3 className="mb-4">About us</h3>
              <p style={{ width: "100%" }}>
                WoundMend is based in Australia and is known to provide instant
                wound assessment globally. WoundMend is a brainchild project of
                skin and wound specialist doctors, who aim to provide instant
                assessment within the comfort of your homes. The
                state-of-the-art mobile application operates on Artificial
                Intelligence technology and helps you scan all sorts of rashes,
                wounds or pigments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <div className="row">
        <div className="col-md-12">
          <div className="card flex-fill">
            <div className="card-header">
              <h5 className="card-title">What we offer:</h5>
            </div>
            <div className="card-body">
              <ul className="mb-0 bullets">
                <li>Instant Assessment</li>
                <li>Timely Detection</li>
                <li>Remote Access</li>
                <li>A general idea before you approach your doctor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
          <div className="news-img">
            <img
              // style={{ height: "350px" }}
              src={aboutus}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 news-left aos" data-aos="fade-up">
          <div>
            <h2>Ready to Take The First Photo ?</h2>
            <p>
              Download Woundmend from the App Store or Google Play Now and{" "}
              <br />
              start checking your Wounds.
            </p>
          </div>
          <div className="news-section">
            <button className="btn view-more">Download WoundMend</button>
              {/* <Link to="/blog/blog-details" className="btn view-more">
                View More
              </Link> */}
              <div className="d-flex mt-3">
              <div className="mr-1"><img src={applestore} /></div>
              <div><img src={googleplay} /></div>
            </div>
            </div>
            
        </div>
      </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default Aboutus;
