import './aboutPageItem.css';

const AboutPageItem = () => {
  const backgorundImage = "./images/officedesk.jpg";
  return (
    <div className="aboutPage-item-wrapper">
      <div
        className="about-item-title"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${backgorundImage})`,
        }}
      >
        <h1>who we are</h1>
        <div className="aboutpage-underline" />
      </div>
      <div className="aboutus-info-box">
        <div className="about-info">
          <h1>our story in Lorem, ipsum.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, recusandae? Accusantium necessitatibus enim dolorem
            obcaecati sunt nostrum provident non recusandae? Reiciendis
            reprehenderit illo fugit explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea
            ratione amet, nemo pariatur, facere cum minima qui quos iusto esse
            delectus voluptate, excepturi nisi praesentium. Iusto quisquam
            mollitia labore vel temporibus omnis, cupiditate ad!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio non
            natus ut cum aliquam debitis neque veniam at amet nihil ipsam
            aperiam alias enim vero atque voluptatibus repudiandae et animi
            velit placeat quia, maiores adipisci. Ipsum excepturi atque omnis
            ipsa!
          </p>
        </div>
        <div className="about-image-box">
          <div className="about-image">
            <img src="./images/bosspic.jpg" className="about-page-image" />
          </div>
        </div>
      </div>
      <div
        className="cac-wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${"./images/mission.jpg"})`,
        }}
      >
        <div className="cac-content">
          <img src="./images/mainblackman1.jpg" className="cac-image" />
          <div className="mission-vision">
            <div className="mission">
              <h2>
                <span>our</span> mission
              </h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div className="mission">
              <h2>
                <span>our</span> vision
              </h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AboutPageItem;