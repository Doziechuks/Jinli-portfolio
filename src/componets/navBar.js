import './navBar.css';
import { DiAndroid } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {
  const { pathname } = useLocation();
  const [path, setPath] = useState('');

  useEffect(()=> {
    setPath(pathname)
    console.log(pathname);
  }, [pathname])

  return (
    <div className="navbar-wrapper">
      <Link
        to="/"
      >
        <DiAndroid className="nav-icon" />
      </Link>
      <div className="nav-options">
        <Link
          to="/"
          className={`option ${path === "/" ? "active" : ""}`}
        >
          home
        </Link>
        <Link
          to="/about"
          className={`option ${path.includes("/about") ? "active" : ""}`}
        >
          about
        </Link>
        <Link
          to="/products"
          className={`option ${path.includes("/products") ? "active" : ""}`}
        >
          products
        </Link>
        <Link
          to="/contact"
          className={`option ${path.includes("/contact") && "active"}`}
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