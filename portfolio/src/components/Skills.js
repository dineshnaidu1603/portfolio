import React from 'react';
import { FaLaptopCode,FaPython, FaJava, FaLinux, FaGithub, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import './skills.css';

function Skills() {
  return (
      <section className="skills" style={{padding: '2rem', textAlign: 'center'}}>
          <FaLaptopCode size={30}/>
          <h2>Skills</h2>
          <h2><span className="highlight">What I do</span></h2>
          <p>I love all aspects of technology and want to explore as much as I can!</p>
          <ul style={{listStyle: 'none', padding: 0}}>
              <li>Python, SQL, Java, HTML5, CSS, React.</li>
              <li> Pandas, Django, NumPy, Android, Matplotlib, TensorFlow, Keras, Scikitlearn.</li>
              <li>Cloud Computing, Artificial Intelligence, Machine Learning, Networking, NLP,
                  Git, Cybersecurity, Firebase.
              </li>
          </ul>
          <div className="icon-grid">
              <FaPython/>
              <FaJava/>
              <FaLinux/>
              <FaGithub/>
              <FaHtml5/>
              <FaCss3Alt/>
              <FaJs/>
          </div>
      </section>
  );
}

export default Skills;
