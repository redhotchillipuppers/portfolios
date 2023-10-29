import React from 'react';
import './App.css';
import  headshot from './Pics/headshot.jpeg';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact'
import Slider from './components/Slider';
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
      <span className='projectsbar'>
        <HashLink to='/destination-page#portfolio' className='subject'>Portfolio</HashLink>
        <HashLink to='/destination-page#aboutme' className='subject'>About Me</HashLink>
        <HashLink to='/destination-page#cv' className='subject'>Resume</HashLink>
        <HashLink to='/destination-page#contact' className='subject'>Contact</HashLink>
        <HashLink to='/destination-page#testimonials' className='subject'>Testimonials</HashLink>
      </span>
      <div className='container' id='portfolio'>
        <Portfolio />
      </div>
      <div className='container' id='aboutme'>
        <h1 className='header'>About Me</h1>
        <p>
Welcome to my digital corner of the world! I'm John Connolly,
a 28-year-old developer hailing from the picturesque town of Grimsby, England. 
I'm thrilled to have you here on my website, 
which serves as a showcase of my knowledge and abilities in the realm of web development.
</p>
<h2>Professional Journey</h2>
<p>
My journey into the world of software development has been an exciting one. For the past six years, 
I worked as a multiskilled engineer, honing my craft in various fields. 
This diverse experience has not only given me a unique perspective but has also equipped me with the problem-solving skills 
and attention to detail that are invaluable in the world of development.
A desire for new challenges led me to transition into software development,
where I've dived headfirst into a world of coding and creativity. My expertise lies in HTML, CSS, JavaScript, and React JS,
and I'm constantly striving to expand my knowledge and stay at the forefront of this ever-evolving field.
</p>
<h2>Hobbies and Interests</h2>
<p>
When I'm not knee-deep in code, you'll find me pursuing my passions outside the digital realm. 
I have a fascination for craftsmanship and enjoy creating things with my own hands. Whether it's 3D printing, 
tinkering with blacksmithing, or any other DIY project, I relish the process of bringing ideas to life through craftsmanship.
Additionally, I share my life with two wonderful canine companions, Thor and Sif. 
They bring joy and inspiration to my daily routine and have a special place in my heart.
</p>
<h2>Connect with Me</h2>
<p>I'm always excited to connect with fellow developers, creators, and enthusiasts. 
  If you share an interest in web development, 3D printing, or any of my other hobbies, 
  or if you just want to chat about software and technology, please don't hesitate to reach out.
   Feel free to explore my website to learn more about my work and projects. 
   Thank you for visiting, and I look forward to connecting with you!</p>
      </div>
      <div className='container' id='cv'>
        <Resume />
        </div>
        <div className='contact' id='contact'>
          <Contact />
        </div>
        <div className='container' id='testimonials'>
          <h1>Testimonials</h1>
          <Slider/>
        </div>
    </div>
  );
}

export default App;
