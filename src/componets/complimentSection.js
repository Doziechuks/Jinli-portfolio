import "./complimentSection.css";
import { HiOutlineThumbUp } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const ComplimentSection = () => {
  return (
    <div
      className="compliment-wrapper"
      style={{ backgroundImage: `url(${"./images/luxury.avif"})` }}
    >
      <div className="compliment-header">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid
          perferendis odio officiis inventore libero itaque! Quo, molestias!
        </p>
        <div className="compliment-icon">
          <div className="compliment-icon-box">
            <HiOutlineThumbUp className="d-icon" />
          </div>
          <div className="compliment-icon-box">
            <FaHandsHelping className="d-icon" />
          </div>
          <div className="compliment-icon-box">
            <GiNotebook className="d-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplimentSection;
