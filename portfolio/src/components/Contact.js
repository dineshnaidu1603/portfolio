import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
      <FaEnvelope size={30} />
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:dineshnaidunarni@gmail.com">dineshnaidunarni@gmail.com</a></p>
      <p>
        <a href="https://www.linkedin.com/in/narnivenkatadineshnaidu" target="_blank" rel="noreferrer">
          <FaLinkedin size={20} style={{ marginRight: '10px' }} />
          LinkedIn
        </a>
      </p>
      <p>
        <a href="https://github.com/dineshnaidu1603" target="_blank" rel="noreferrer">
          <FaGithub size={20} style={{ marginRight: '10px' }} />
          GitHub
        </a>
      </p>
    </section>
  );
}

export default Contact;
