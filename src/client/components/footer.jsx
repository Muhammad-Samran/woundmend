import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/footer-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { footer_logo } from "./home/image.jsx";

const Footer = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  console.log(props.location, "location");
  return (
    <>
      {!props.location.pathname.includes("/home4") &&
        !props.location.pathname.includes("/home6") &&
        !props.location.pathname.includes("/home7") &&
        !props.location.pathname.includes("/home8") && (
          <footer className="footer footer-one">
            {/* Footer Top */}
            <div className="footer-top aos" data-aos="fade-up">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-about">
                      <div className="footer-logo">
                        <img
                          style={{ width: "220px" }}
                          src={footer_logo}
                          alt="logo"
                        />
                      </div>
                      <div className="footer-about-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <div className="social-icon">
                          <ul>
                            <li>
                              <Link to="#" target="_blank">
                                <i className="fab fa-facebook" />{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="#" target="_blank">
                                <i className="fab fa-linkedin" />
                              </Link>
                            </li>
                            <li>
                              <Link to="#" target="_blank">
                                <i className="fab fa-instagram" />
                              </Link>
                            </li>
                            <li>
                              <Link to="#" target="_blank">
                                <i className="fab fa-twitter" />{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-4  col-sm-6">
                    <h2 className="footer-title">QUICK LINKS</h2>
                    <div className="row footer-widget footer-menu">
                      <div className=" col-6">
                        <ul>
                          <li>
                            <Link to="/">
                              HOME
                            </Link>
                          </li>
                          <li>
                            <Link to="/admin/login">BLOGS</Link>
                          </li>
                          <li>
                            <Link to="/terms">TERMS & CONDITIONS</Link>
                          </li>
                        </ul>
                      </div>
                      <div className=" col-6">
                        <ul>
                          <li>
                            <Link to="/aboutus">ABOUT US</Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">PRIVACY POLICY</Link>
                          </li>
                          <li>
                            <Link to="/contactus">CONTACT US</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /Footer Widget */}

                  <div className="col-lg-4  col-sm-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>

                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <span>
                            <i
                              style={{ fontSize: "15px" }}
                              className="feather-map-pin fa fa-map"
                            />
                          </span>
                          <p>
                            5 Emerald Hills Blvd,
                            <br />
                            Leppington NSW <br />
                            2179, AU
                          </p>
                        </div>
                        <p>
                          <i
                            style={{ fontSize: "15px" }}
                            className="feather-phone fa fa-phone"
                          />
                          +1 315 369 5943
                        </p>
                        <p className="mb-0">
                          <i
                            style={{ fontSize: "15px" }}
                            className="feather-mail fa fa-envelope"
                          />
                          woundmend@example.com
                        </p>
                      </div>
                    </div>
                    {/* /Footer Bottom */}
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">© 2022 WoundMend. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                {/* Copyright Menu */}
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <Link to="/terms">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Policy</Link>
                    </li>
                  </ul>
                </div>
                {/* /Copyright Menu */}
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
