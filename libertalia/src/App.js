import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import './App.css';

function App() {
  console.log("App component rendered");
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      {/* Add other components here as needed */}
      <AboutPage />
    </div>
  );
}

export default App;
