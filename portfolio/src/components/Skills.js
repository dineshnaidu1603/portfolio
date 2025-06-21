import React from 'react';
import { FaLaptopCode,FaPython, FaJava, FaLinux, FaGithub, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import './skills.css';

function Skills() {
  return (
      <section className="skills" style={{padding: '2rem', textAlign: 'center'}}>

          <h2>Skills</h2>
          <p>I love all aspects of technology and want to explore as much as I can!</p>
          <ul style={{listStyle: 'none', padding: 0}}>
              <div className='icon'>
                  <li>Python, SQL, Java, HTML5, CSS, React.</li>
                  <br/>
                  <li> Pandas, Django, NumPy, Android, Matplotlib, TensorFlow, Keras, Scikitlearn.</li><br/>
                  <li>Cloud Computing, Artificial Intelligence, Machine Learning, Networking, NLP,
                      Git, Cybersecurity, Firebase.
                  </li>
                  <br/>
              </div>
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
