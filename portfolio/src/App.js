import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import './App.css';
import Hero from "./components/Hero"; // Import your CSS file for styling
import Back from './components/back';
function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (

      <div className="App">
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>

          <title>Dinesh Naidu's Portfolio</title>


          <Back/>
          <Navbar onNavClick={setActiveSection}/>

          <div className="main-container">

              {/* Sections conditionally rendered based on activeSection */}
              {activeSection === 'home' && (
                  <section id="home">
                      <Hero/>
                  </section>
              )}

              {activeSection === 'about' && (
                  <section id="about">
                      <Skills/>
                  </section>
              )}

              {activeSection === 'projects' && (
                  <section id="projects">
                      <Projects/>
                  </section>
              )}

              {activeSection === 'contact' && (
                  <section id="contact">
                      <Contact/>
                  </section>
              )}
          </div>

      </div>

  );
}


export default App;

