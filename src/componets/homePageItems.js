import "./homePageItems.css";
import CustomButton from "./customButton";
import { withRouter } from "react-router-dom";

const HomePageItems = ({ items, match, history }) => {
  const { title, info, imageUrl, linkUrl } = items;
  return (
    <div className="homepageitems-wrapper">
      <div
        className="homepageitem-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${imageUrl})`,
        }}
      />
      <div className="homeItem-content">
        <h1 className="homepage-title">{title}</h1>
        <p className="homepage-info">{info}</p>
        <CustomButton
          isHomePage
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
          know more
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(HomePageItems);
