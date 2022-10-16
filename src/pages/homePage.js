import './homePage.css';
import HomePageContainer from '../components/homPageContainer';
import AboutSection from '../components/aboutItem';

const HomePage = () => {
  return ( 
    <div className="homepage-wrapper">
      <HomePageContainer />
      <AboutSection />
    </div>
   );
}
 
export default HomePage;