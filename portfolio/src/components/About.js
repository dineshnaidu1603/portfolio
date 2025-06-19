import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import './About.css'; // Import your CSS file for styling
function About() {
  return (
    <section id="about" style={{ padding: '2rem', textAlign: 'center' }}>
      <FaUserGraduate size={30} />
      <h2>About Me</h2>
      <p>
        Hello! I’m Venkata Dinesh Naidu Narni, a final-year B.Tech student in AIML.
        I enjoy building scalable web apps, working with React, Django, and learning about ML and system design.
      </p>
    </section>
  );
}

export default About;
