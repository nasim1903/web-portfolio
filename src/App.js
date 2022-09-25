import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';

import './App.css';
import CSS from './components/Cards/images/CSSlogo.png'
import JS from './components/Cards/images/JSlogo.png'
import HTML from './components/Cards/images/HTMLsign.png'
import Reactlogo from './components/Cards/images/Reactlogo.png'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <h2>SKILLS</h2>
      <div className='skills' >
        <Cards images={JS} alt={'JS icon'} title={'Javascript'} text={'Proficient experience in'}></Cards>
        <Cards images={Reactlogo} alt={'React icon'} title={'React'} text={'Professional experience in react'}></Cards>
        <Cards images={CSS} alt={'css icon'} title={'CSS3'} text={'Expert Knowledge in'}></Cards>
        <Cards images={HTML} alt={'HTML icon'} title={'HTML5'} text={'Knowledge in'}></Cards>
        <Cards images={HTML} alt={'HTML icon'} title={'HTML5'} text={'Knowledge in'}></Cards>
        <Cards images={HTML} alt={'HTML icon'} title={'HTML5'} text={'Knowledge in'}></Cards>
      </div>

    </div>
  );
}

export default App;
