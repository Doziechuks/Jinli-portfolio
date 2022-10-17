import './homePage.css';
import HomePageContainer from '../components/homPageContainer';
import AboutSection from '../components/aboutItem';
import ProductSection from '../components/productsSection';

const HomePage = () => {
  return ( 
    <div className="homepage-wrapper">
      <HomePageContainer />
      <AboutSection />
      <ProductSection />
    </div>
   );
}
 
export default HomePage;