import React, { useEffect, useRef } from 'react';
import "./Skills.css";

const Skills = () => {
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

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="skills-scroll-container" ref={scrollContainerRef}>
              <div className="skills-scroll-content">
                {[...items, ...items].map((skill, index) => (
                  <div key={`${skill.name}-${index}`} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
