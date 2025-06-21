import React from 'react';
import './Navbar.css';

import { FaHome, FaUser, FaCode, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

function Navbar({ onNavClick }) {
 return (
    <nav className="navbar">
      <ul>
<h1 style={{ marginLeft:'25px',marginRight: '350px',fontSize:'30px' ,fontStyle:"italic"}}> Dinesh Naidu</h1>
        <li onClick={() => onNavClick('home')} style={{fontSize:'25px' }}><FaHome /> Home</li>
        <li onClick={() => onNavClick('about')} style={{fontSize:'25px' }}><FaUser /> About me</li>
        <li onClick={() => onNavClick('projects')} style={{fontSize:'25px' }}><FaProjectDiagram /> Projects </li>
        <li onClick={() => onNavClick('contact')}style={{fontSize:'25x' }}><FaEnvelope /> Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
