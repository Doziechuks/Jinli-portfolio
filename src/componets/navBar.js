import './navBar.css';
import { DiAndroid } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState('home');
  return (
    <div className="navbar-wrapper">
      <Link to="/" onClick={() => setActive("home")}>
        <DiAndroid className="nav-icon" />
      </Link>
      <div className="nav-options">
        <Link
          to="/"
          className={`option ${active === "home" ? "active" : ""}`}
          onClick={() => setActive("home")}
        >
          home
        </Link>
        <Link
          to="/about"
          className={`option ${active === "about" ? "active" : ""}`}
          onClick={() => setActive("about")}
        >
          about
        </Link>
        <Link
          to="/products"
          className={`option ${active === "products" ? "active" : ""}`}
          onClick={() => setActive("products")}
        >
          products
        </Link>
        <Link
          to="/contact"
          className={`option ${active === "contact" ? "active" : ""}`}
          onClick={() => setActive("contact")}
        >
          contact us
        </Link>
      </div>
      <div className="contact-info-box">
        <div className="phone">
          <GiRotaryPhone className="phone-icon" />
          <p>123-4567-1980</p>
        </div>
        <a href="#">
          <FaWhatsapp />
        </a>
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <AiFillTwitterCircle />
        </a>
      </div>
    </div>
  );
}
 
export default NavBar;