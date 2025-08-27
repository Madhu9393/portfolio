import React from 'react';
import "./AnimatedSkills.css";
import { Fade } from "react-reveal";

const AnimatedSkills = ({ theme }) => {
  const skills = {
    languages: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "MySQL", icon: "fas fa-database" },
    ],
    frontend: [
      { name: "React", icon: "fab fa-react" },
      { name: "Tailwind CSS", icon: "fas fa-paint-brush" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
      { name: "Framer Motion", icon: "fas fa-motion" },
    ],
    tools: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Netlify", icon: "fas fa-cloud" },
      { name: "Vercel", icon: "fas fa-cloud" },
      { name: "Firebase", icon: "fab fa-google" },
    ],
    ai: [
      { name: "BERT", icon: "fas fa-brain" },
      { name: "GNN", icon: "fas fa-project-diagram" },
      { name: "Explainable AI (SHAP)", icon: "fas fa-chart-pie" },
      { name: "RoBERTa", icon: "fas fa-robot" },
      { name: "LSTM", icon: "fas fa-network-wired" },
      { name: "Machine Learning", icon: "fas fa-cogs" },
    ],
    security: [
      { name: "Linux", icon: "fab fa-linux" },
      { name: "MITRE ATT&CK", icon: "fas fa-shield-alt" },
      { name: "OWASP Top 10", icon: "fas fa-lock" },
      { name: "Burp Suite", icon: "fas fa-bug" },
      { name: "Penetration Testing", icon: "fas fa-user-secret" },
      { name: "Vulnerability Assessment", icon: "fas fa-shield-virus" },
      { name: "ZAP", icon: "fas fa-spider" },
    ],
  };

  return (
    <section id="animated-skills" className="animated-skills-section" style={{ backgroundColor: theme.secondaryBackground }}>
      <Fade bottom duration={1000} distance="40px">
        <h2 className="section-title" style={{ color: theme.text }}>Technical Skills</h2>
      </Fade>
      
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <Fade bottom duration={1000} key={category}>
            <div className="skill-category">
              <h3 className="category-title" style={{ color: theme.secondaryText }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skills-scroll-container">
                <div className="skills-scroll-content">
                  {[...items, ...items].map((skill, index) => (
                    <div 
                      key={`${skill.name}-${index}`} 
                      className="skill-item"
                      style={{ 
                        backgroundColor: theme.experienceCard,
                        boxShadow: `0 4px 8px ${theme.shadowColor}`
                      }}
                    >
                      <i className={`${skill.icon} skill-icon`} style={{ color: theme.primaryColor }}></i>
                      <span style={{ color: theme.text }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default AnimatedSkills;
