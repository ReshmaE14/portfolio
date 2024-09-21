
import React from 'react';

const ProjectsForm = ({ projects, setProjects }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, { name: '', description: '', link: '' }]);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, idx) => idx !== index);
    setProjects(newProjects);
  };

  return (
    <div className="form-section">
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={(e) => handleChange(index, e)}
            placeholder="Project Name"
          />
          <textarea
            name="description"
            value={project.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
          />
          <input
            type="url"
            name="link"
            value={project.link}
            onChange={(e) => handleChange(index, e)}
            placeholder="Project Link"
          />
          <button onClick={() => removeProject(index)}>-</button>
        </div>
      ))}
      <button onClick={addProject}>Add Project</button>
    </div>
  );
};

export default ProjectsForm;
