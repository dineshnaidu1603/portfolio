import React from 'react';
import './Hero.css';
// import x from 'portfolio/src/x.jpg'; // 📌 Place your image in src/assets folder
function Hero() {
  return (
    <section className="hero">
      {/*<img src={profile} alt="Profile" className="profile-img" />*/}
      <div className="hero-content">
        <h1>Venkata Dinesh Naidu Narni</h1>
        <p className="role"> VI Year B.Tech | AIML Student</p>
        <p className="tagline">Aspiring Full-Stack Developer & ML Enthusiast</p>
        <div className="hero-buttons">
  <a href="/dineshnaidu_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn outline">View Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
