import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';

import './App.css';
import CSS from './components/Cards/images/CSSlogo.png'


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Hero></Hero>
     <Cards images={CSS} ></Cards>
    </div>
  );
}

export default App;
