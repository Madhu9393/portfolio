import React, { useState, useEffect } from 'react';
import './Projects.css';
import { projects } from '../../portfolio';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use projects data from portfolio.js

  return (
    <div className="main" id="projects">
      <h1 
        className={`project-title ${isVisible ? 'fade-in-up' : ''}`}
      >
        {projects.header.title}
      </h1>
      <p 
        className={`project-subtitle ${isVisible ? 'fade-in-up' : ''}`}
        style={{ animationDelay: '0.2s' }}
      >
        {projects.header.description}
      </p>
      <div className="projects-container">
        {projects.data.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${isVisible ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-details">
              <h4>Key Features:</h4>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
