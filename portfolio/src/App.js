import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
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
        <Back/>
      <Navbar onNavClick={setActiveSection} />

      {/* Sections conditionally rendered based on activeSection */}
      {activeSection === 'home' && (
        <section id="home">
          <Hero />
        </section>
      )}

      {activeSection === 'about' && (
        <section id="about">
          <About />
        </section>
      )}

      {activeSection === 'projects' && (
        <section id="projects">
          <Projects />
        </section>
      )}

      {activeSection === 'contact' && (
        <section id="contact">
          <Contact />
        </section>
      )}
    </div>
  );
}

    <footer style={{textAlign: 'center', padding: '1rem', background: '#f4f4f6', color: 'white'}}>
        © {new Date().getFullYear()} Dinesh Naidu | All rights reserved
    </footer>




export default App;

