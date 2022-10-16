import './App.css';
import HomePage from './pages/homePage';
import LoadingPage from './pages/isLoagingPage';
import { useState } from "react";
import { useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    const loadingTimer = setTimeout(()=>{
      setIsLoading(true)
      return () => clearTimeout(isLoading)
    }, 3000)
  },[])
  return (
    <div>
      
        {
          isLoading ?
          <HomePage /> :
          <LoadingPage />
        }
      
    </div>
  );
}

export default App;
