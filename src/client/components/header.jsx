import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useEffect } from "react";
import config from "config";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Header = (props) => {
  //Aos
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  let pathnames = window.location.pathname;

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  return (
    <>
      <header className="header">
        <div className="nav-bg">
          <nav
            className={`navbar navbar-expand-lg header-nav nav-transparent header-nav-one justify-content-between ${
              pathnames.includes("home1") ? "nav-transparent" : ""
            }`}
          >
            <div className="navbar-header">
              <Link
                to="#0"
                id="mobile_btn"
                onClick={() => onHandleMobileMenu()}
              >
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  to="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>

              <ul className="main-nav black-font">
                <li className={`${pathnames === "/" ? "active" : ""}`}>
                  <Link to="/">Home</Link>
                </li>
                <li className={`${pathnames === "/aboutus" ? "active" : ""}`}>
                  <Link to="/aboutus">About</Link>
                </li>
                <li className={`${pathnames === "/contactus" ? "active" : ""}`}>
                  <Link to="/contactus">Contact</Link>
                </li>
                <li className={`${pathnames === "/blog" ? "active" : ""}`}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className={`${pathnames === "/support" ? "active" : ""}`}>
                  <Link to="/howtouse">How to Use</Link>
                </li>
              </ul>

              <ul className="nav header-navbar-rht right-menu">
                {auth?.isLoggedIn ? (
                  <li className="nav-item">
                    <button
                      className="nav-link login-blue-bg"
                      onClick={() => (window.location.href = "/admin")}
                    >
                      Dashboard
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <button
                        className="nav-link login-blue-bg"
                        onClick={() => (window.location.href = "/admin/login")}
                      >
                        Sign In
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link signup-white-bg"
                        onClick={() =>
                          (window.location.href = "/admin/register")
                        }
                      >
                        Sign Up
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
