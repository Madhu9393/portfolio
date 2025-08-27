import React, { useEffect } from 'react';
import { projects } from '../../portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectNew.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="main" id="projects">
      <div className="projects-header">
        <h1 className="project-title">{projects.header.title}</h1>
        <p className="project-subtitle">{projects.header.description}</p>
      </div>
      
      <div className="projects-container">
        {projects.data.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            data-aos={project.animation}
            data-aos-delay={index * 100}
          >
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-name">{project.title}</h2>
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
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="demo-btn"
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    View Code
                  </a>
                </div>
              </div>
              
              {project.image && (
                <div className="project-image">
                  <img 
                    src={require(`../../assets/images/${project.image}`)} 
                    alt={project.title} 
                    className="project-screenshot"
                  />
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
