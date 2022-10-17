import './homePage.css';
import HomePageContainer from '../componets/homPageContainer';
import AboutSection from '../componets/aboutItem';
import ProductSection from '../componets/productsSection';
import TestimonialSection from '../componets/testimonial';
import ContactSection from '../componets/contactSection';

const HomePage = () => {
  return ( 
    <div className="homepage-wrapper">
      <HomePageContainer />
      <AboutSection />
      <ProductSection />
      <TestimonialSection />
      <ContactSection />
    </div>
   );
}
 
export default HomePage;