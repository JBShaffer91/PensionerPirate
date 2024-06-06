import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* You can add other components below */}
      <header className="App-header">
        {/* Placeholder for other sections, e.g., HeroSection */}
        <p>Welcome to Pensioner Pirate</p>
      </header>
    </div>
  );
}

export default App;
