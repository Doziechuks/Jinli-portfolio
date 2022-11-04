import "./mobileNavBar.css";
import { DiAndroid } from "react-icons/di";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="mobile-navbar-wrapper">
      <div className="inner-wrapper">
         <div className="mobile-icon">
          <Link to="/">
            <DiAndroid className="mobile-nav-icon" />
          </Link>
          {showNav ? (
            <div onClick={() => setShowNav(!showNav)}>
              <FaTimes className="drop-down-icon" />
            </div>
          ) : (
            <div onClick={() => setShowNav(!showNav)}>
              <FaBars className="drop-down-icon" />
            </div>
          )}
        </div>

        <div className={`mobile-nav-options ${showNav && 'show-links'}`}>
          <div className="mobile-links">
            <Link
              to="/"
              className="mobile-option"
              onClick={() => setShowNav(!showNav)}
            >
              home
            </Link>
            <Link
              to="/about"
              className="mobile-option"
              onClick={() => setShowNav(!showNav)}
            >
              about
            </Link>
            <Link
              to="/products"
              className="mobile-option"
              onClick={() => setShowNav(!showNav)}
            >
              products
            </Link>
            <Link
              to="/contact"
              className="mobile-option"
              onClick={() => setShowNav(!showNav)}
            >
              contact us
            </Link>
          </div>
          <div className="mobile-media-handle">
            <div className="social-media">
              <a href="#">
                <FaWhatsapp className="media-handle" />
              </a>
              <a href="#">
                <BsFacebook className="media-handle" />
              </a>
              <a href="#">
                <AiFillTwitterCircle className="media-handle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
