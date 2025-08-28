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
            style={{ 
              animationDelay: `${0.1 * index}s`,
              transitionDelay: `${0.1 * index + 0.2}s`
            }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
          >
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.details && project.details.length > 0 && (
                <div className="project-details">
                  <h4>Key Features</h4>
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>
                        <span className="feature-icon">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag"
                      data-tech={tech.toLowerCase()}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {project.links && (
                <div className="project-links">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
