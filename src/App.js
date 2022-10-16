import './App.css';
import HomePage from './pages/homePage';
import LoadingPage from './pages/isLoagingPage';
import NavBar from './components/navBar';
import MobileNavBar from './components/mobileNavBar';
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
            <Route exact path="/" component={ HomePage } />
          </Switch>
        </ div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
