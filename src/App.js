import React from 'react';

import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import Carasouel from './components/Carasouel/Carasouel';
import About from './components/About/About';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <h2>SKILLS</h2>
      <div className='skills' >
        <Carasouel/>
      </div>
      <h2>ABOUT ME</h2>
      <About/>
    </div>
  );
}

export default App;
