import './aboutPage.css'
import AboutPageItem from '../componets/aboutPageItems';
import ComplimentSection from "../componets/complimentSection";
import FooterSection from "../componets/footer";

const AboutPage = () => {
  return ( 
    <div className="about-page-wrapper">
      <AboutPageItem />
      <ComplimentSection />
      <FooterSection />
    </div>
   );
}
 
export default AboutPage;