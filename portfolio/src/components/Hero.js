import React from 'react';
import './Hero.css';
// import x from 'portfolio/src/x.jpg'; // 📌 Place your image in src/assets folder
function Hero() {
  return (
    <section className="hero">
      {/*<img src={profile} alt="Profile" className="profile-img" />*/}
        <div className="hero-content">
            <h1>Venkata Dinesh Naidu Narni</h1>
            <p className="role">B.Tech | VI Year  | AIML Student</p>
            <p style={{fontSize:'22px'}}>I love software development,cloud computing, backend development and android app development.
                I know a little bit of machine learning and NLP too !
                Want to discuss regarding any project or just want to say a Hi? I am always available to listen you
                :)</p>
            <a
                href={`${process.env.PUBLIC_URL}/dineshnaidu_resume.pdf`}
                className="btn outline"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Resume
            </a>

        </div>
    </section>
  );
}

export default Hero;
