import './App.css';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import LoadingPage from './pages/isLoagingPage';
import NavBar from './componets/navBar';
import MobileNavBar from './componets/mobileNavBar';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    const loadingTimer = setTimeout(()=>{
      setIsLoading(true)
      return () => clearTimeout(loadingTimer)
    }, 1000)
  },[])
  return (
    <div>
      {isLoading ? (
        <div>
          <NavBar />
          <MobileNavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
