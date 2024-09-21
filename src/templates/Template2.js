
import React from 'react';
import './Template2.css';

const Template2 = ({ personalInfo, skills, experience, projects }) => {
  return (
    <div className="template2">
      <header>
        <h1>{personalInfo.name || 'Your Name'}</h1>
        <p>{personalInfo.email || 'you@example.com'} | {personalInfo.phone || '123-456-7890'}</p>
        <p>{personalInfo.address || 'Your Address'}</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>{personalInfo.about || 'A brief introduction about yourself.'}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, idx) => skill && <span key={idx} className="skill">{skill}</span>)}
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <h3>{exp.role || 'Your Role'} at {exp.company || 'Company'}</h3>
            <span>{exp.duration || 'Duration'}</span>
            <p>{exp.description || 'Description of your role and responsibilities.'}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.name || 'Project Name'}</h3>
              <p>{project.description || 'Description of the project.'}</p>
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">See Project</a>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Template2;
