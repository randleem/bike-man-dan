import React, { useState, useEffect } from "react";
import LoginButton from "../Login/Login";
import logo from "./newLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

let potenchColor = [
  "#1f1f1f",
  "#134328",
  "#0D2615",
  "#1F6F42",
  "#B7245C",
  "#EF476F",
  "#DAB001",
  "#CF5C36",
  "#EFF2F1",
  "#2C8C99",
  "#7C7C7C",
  "#F7F7F7",
  "#574B60",
  "#514663",
];

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [seeNav, setSeeNav] = useState(true);
  const [seeMenu, setSeeMenu] = useState(false);
  const [mobileView, setMobileView] = useState(true);

  // Function to display Burger Menu
  function handleClick() {
    setSeeMenu(!seeMenu);
  }

  function handleClose() {
    setSeeMenu(false);
  }

  // Hides NavBar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setSeeNav(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 100) ||
          currentScrollPos < prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
      setSeeMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, seeNav]);

  // looks for the size of the window and puts the book now btn in the burger menu if on mobile
  useEffect(() => {
    const inMobileView = () => {
      if (window.innerWidth <= 700) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };
    window.addEventListener("resize", inMobileView);
    return () => window.removeEventListener("resize", inMobileView);
  }, [mobileView]);

  return (
    <div>
      <nav className="navbar" style={{ top: seeNav ? "0" : "-120px" }}>
        <div className="navbar-container">
          <a href="http://bikemandan.co.uk/">
            <div className="nav-title">
              {/* <h1 > BIKE MAN DAN <i className="fas fa-home"></i> </h1> */}
              <img
                src={logo}
                alt="bike man dan logo"
                className="nav-title-logo"
              />
            </div>
          </a>

          <div className="nav-item-container">
            <a href="tel:07817925929" className="nav-number">
              <i className="fas fa-phone-volume"></i> 07817 925 929
            </a>
            {!mobileView && (
              <button className="nav-book-now-button">
                {/* <Link to="/booking-form">
                  Book Now <i className="fas fa-angle-right"></i>
                </Link> */}
              </button>
            )}
            {/* {!seeMenu && <button onClick={handleClick} className='nav-burger-menu-btn'><i className="fas fa-bars"></i></button>} */}
            <button onClick={handleClick} className="nav-burger-menu-btn">
              <i className="fas fa-bars"></i>
            </button>
            {seeMenu && seeNav && (
              <div className="nav-burger-menu">
                <a href="#about" onClick={handleClose}>
                  <div className="nav-item">
                    <h2> About </h2>
                  </div>
                </a>
                <a href="#areas" onClick={handleClose}>
                  <div className="nav-item">
                    <h2> Areas </h2>
                  </div>
                </a>
                <a href="#services" onClick={handleClose}>
                  <div className="nav-item">
                    <h2> Services </h2>
                  </div>
                </a>
                <a href="#prices" onClick={handleClose}>
                  <div className="nav-item">
                    <h2> Individual Jobs </h2>
                  </div>
                </a>
                <a href="#booking-form" onClick={handleClose}>
                  <div className="nav-item">
                    <h2> Booking Form </h2>
                  </div>
                </a>
                <div>
                  <LoginButton />
                </div>
                {mobileView && (
                  <button className="nav-book-now-button">
                    <a href="#prices"> Book Now </a>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

{
  /* <i className="fas fa-wrench"></i>
<i className="fas fa-cog"></i> 
<i className="fas fa-bicycle"></i>  */
}
