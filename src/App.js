import './App.css';
import HomePage from './pages/homePage';
import LoadingPage from './pages/isLoagingPage';
import NavBar from './components/navBar';
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

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
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </ div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
