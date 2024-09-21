
import React from 'react';

const ExperienceForm = ({ experience, setExperience }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...experience];
    newExperience[index][name] = value;
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: '', role: '', duration: '', description: '' },
    ]);
  };

  const removeExperience = (index) => {
    const newExperience = experience.filter((_, idx) => idx !== index);
    setExperience(newExperience);
  };

  return (
    <div className="form-section">
      <h3>Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            placeholder="Company"
          />
          <input
            type="text"
            name="role"
            value={exp.role}
            onChange={(e) => handleChange(index, e)}
            placeholder="Role"
          />
          <input
            type="text"
            name="duration"
            value={exp.duration}
            onChange={(e) => handleChange(index, e)}
            placeholder="Duration"
          />
          <textarea
            name="description"
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
          />
          <button onClick={() => removeExperience(index)}>-</button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceForm;
