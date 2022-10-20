import './footer.css';
import { DiAndroid } from "react-icons/di";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillClockCircle } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { Link, withRouter } from 'react-router-dom';

const FooterSection = ({ history }) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-logo-box">
          <Link to='/'>
            <DiAndroid className="footer-logo" />
          </Link>
          <p className="footer-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            dolorum.
          </p>
          <div className="footer-media-logo">
            <div className="d-media-logo">
              <a href="#">
                <RiWhatsappFill className="footer-whatsapp" />
              </a>
              <a href="#">
                <BsFacebook className="footer-facebook" />
              </a>
              <a href="#">
                <AiFillTwitterCircle className="footer-twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h3>quick links</h3>
          <ul>
            <li onClick={() => history.push("/about")}>about</li>
            <li onClick={() => history.push("/products")}>products</li>
            <li onClick={() => history.push("/contact")}>contact</li>
          </ul>
        </div>
        <div className="footer-contact-info">
          <h3>contact info</h3>
          <div className="footer-contact">
            <GiRotaryPhone className="footer-phone-icon" />
            <p>123-679-0123</p>
          </div>
          <div className="footer-contact">
            <MdEmail className="footer-phone-icon" />
            <p>example@info.com</p>
          </div>
          <div className="footer-contact">
            <MdLocationOn className="footer-phone-icon" />
            <p>no.3 Lorem, ipsum. nnewi</p>
          </div>
          <div className="footer-contact">
            <AiFillClockCircle className="footer-phone-icon" />
            <div className="time">
              <p>Monday - Saturday</p>
              <p>8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line" />
      <p className="copyright">
        &copy;2022 <span className="company">Lorem, ipsum dolor.</span> all rights
        reserved
      </p>
    </div>
  );
}
 
export default withRouter(FooterSection);