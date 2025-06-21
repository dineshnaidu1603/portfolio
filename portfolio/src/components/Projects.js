import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Skin Cancer Detection',
      description: 'A deep learning mobile app using ResNet18/34/50 with 91.8% accuracy on ISIC 2019.',
      github: 'https://github.com/dineshnaidu1603/skin-cancer',
    },
    // {
    //   title: 'E-Commerce Recommender + RAG Bot',
    //   description: 'Built with Django, product-based recommender and a shopping assistant bot.',
    //   github: 'https://github.com/dineshnaidu1603/recommender-bot',
    // },
    {
     title: 'Medicine Tracker App',
      description: 'Java-based Android app to track tablets and log intake daily.',
       github: 'https://github.com/dineshnaidu1603/medicine-tracker',
     },
    {
      title: 'Competitive Programming Platform',
      description: 'A Web Application based platform contains various coding platforms.',
      github: 'https://github.com/dineshnaidu1603/cp_tracker',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
