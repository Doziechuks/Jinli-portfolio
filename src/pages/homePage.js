import "./homePage.css";
import HomePageContainer from "../componets/homPageContainer";
import AboutSection from "../componets/aboutItem";
import ProductSection from "../componets/productsSection";
import TestimonialSection from "../componets/testimonial";
import ContactSection from "../componets/contactSection";
import ComplimentSection from "../componets/complimentSection";
import FooterSection from "../componets/footer";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <HomePageContainer />
      <AboutSection />
      <ProductSection />
      <TestimonialSection />
      <ContactSection />
      <ComplimentSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
