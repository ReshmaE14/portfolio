
import React from 'react';
import './Template1.css';

const Template1 = ({ personalInfo, skills, experience, projects }) => {
  return (
    <div className="template1">
      <h1>{personalInfo.name || 'Your Name'}</h1>
      <p>Email: {personalInfo.email || 'you@example.com'}</p>
      <p>Phone: {personalInfo.phone || '123-456-7890'}</p>
      <p>Address: {personalInfo.address || 'Your Address'}</p>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => skill && <li key={idx}>{skill}</li>)}
      </ul>

      <h2>Experience</h2>
      {experience.map((exp, idx) => (
        <div key={idx} className="experience">
          {/* <h3>{exp.role || 'Your Role'} at {exp.company || 'Company'}</h3> */}
          {/* <p>{exp.duration || 'Duration'}</p> */}
          <p>{exp.description || 'Description of your role and responsibilities.'}</p>
        </div>
      ))}

      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="project">
          <h3>{project.name || 'Project Name'}</h3>
          <p>{project.description || 'Description of the project.'}</p>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </div>
  );
};

export default Template1;
