import React from 'react';
import './App.css';
import  headshot from './Pics/headshot.jpeg';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Aboutme from './components/Aboutme';
import { HashLink } from 'react-router-hash-link';


function App() {
  return (
    <div className='App'>
      <div className='headshot'>
        <img 
        src={headshot} 
        alt='Headshot' 
        className='Headshot'
        />
        </div>
        <div className='header'>
              <h1 className='Name'>
        John Connolly
      </h1>
      </div>
      <span className='navbar'>
        <HashLink to='/destination-page#portfolio' className='subject'>Portfolio</HashLink>
        <HashLink to='/destination-page#aboutme' className='subject'>About Me</HashLink>
        <HashLink to='/destination-page#cv' className='subject'>Resume</HashLink>
        <HashLink to='/destination-page#contact' className='subject'>Contact</HashLink>
        <HashLink to='/destination-page#slider' className='subject'>Projects</HashLink>
      </span>
      <Aboutme/>
        <div className='contact' id='contact'>
          <Contact />
        </div>
        <Portfolio />
    </div>
  );
}

export default App;
