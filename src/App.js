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
      <h2>SKILLS</h2>
      <div className='skills' >
        <Cards images={CSS} alt={'css icon'} title={'CSS3'} text={'Expert Knowledge in'}></Cards>
        <Cards images={CSS} alt={'css icon'} title={'CSS3'} text={'Expert Knowledge in'}></Cards>
        <Cards images={CSS} alt={'css icon'} title={'CSS3'} text={'Expert Knowledge in'}></Cards>
      </div>

    </div>
  );
}

export default App;
