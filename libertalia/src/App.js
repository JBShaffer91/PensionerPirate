import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      {/* You can add other components below */}
    </div>
  );
}

export default App;
