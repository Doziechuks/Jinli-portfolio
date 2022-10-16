import './aboutItem.css';
import CustomButton from './customButton';
import { withRouter } from 'react-router-dom';

const AboutSection = ({ history }) => {
  return (
    <div className="about-section-wrapper">
      <div className="about-section-title-wrapper">
        <h1 className="about-section-title">who we are</h1>
        <div className="about-underline"></div>
      </div>
      <div className="about-section-content-container">
        <div className="info-container">
          <p className="about-section-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vero
            tempore eius eveniet eum ipsa minima libero beatae, cupiditate
            reprehenderit nisi nulla laudantium doloribus ipsum quia, eligendi
            veniam deleniti voluptatibus.
          </p>
          <p className="about-section-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vero
            tempore eius eveniet eum ipsa minima libero beatae, cupiditate
            reprehenderit nisi nulla laudantium doloribus ipsum quia, eligendi
            veniam deleniti voluptatibus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ratione vero quidem ab ad iusto ipsum
            quod quae dolorum, veniam alias itaque ut nisi. Accusantium, maxime.
          </p>
          <CustomButton onClick={()=>history.push('/about')}>see more</CustomButton>
        </div>
        <div className="about-section-image-box">
          <img src="./images/jinlithumbsup.jpg" />
        </div>
      </div>
    </div>
  );
}
 
export default withRouter(AboutSection);