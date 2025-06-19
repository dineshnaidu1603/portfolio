import React from 'react';
import './Navbar.css';

import { FaHome, FaUser, FaCode, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

function Navbar({ onNavClick }) {
 return (
    <nav className="navbar">
      <ul>
<h1 style={{ marginRight: '580px' }}> Venkata Dinesh Naidu</h1>
        <li onClick={() => onNavClick('home')}><FaHome /> Home</li>
        <li onClick={() => onNavClick('about')}><FaUser /> About me</li>
        <li onClick={() => onNavClick('projects')}><FaProjectDiagram /> Projects </li>
        <li onClick={() => onNavClick('contact')}><FaEnvelope /> Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
