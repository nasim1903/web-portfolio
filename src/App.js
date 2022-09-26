import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import Carasouel from './components/Carasouel/Carasouel';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <h2>SKILLS</h2>
      <div className='skills' >
        <Carasouel></Carasouel>
      </div>
      <h2>ABOUT ME</h2>
    </div>
  );
}

export default App;
