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
        I love software development, cloud computing, backend development and android app development.
          I know a little bit of machine learning and NLP too !
          Want to discuss regarding any project or just want to say a Hi? I am always available to listen you :)
      </p>
    </section>
  );
}

export default About;
