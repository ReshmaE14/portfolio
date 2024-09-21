
import React from 'react';

const SkillsForm = ({ skills, setSkills }) => {
  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, idx) => idx !== index);
    setSkills(newSkills);
  };

  return (
    <div className="form-section">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder={`Skill ${index + 1}`}
          />
          <button onClick={() => removeSkill(index)}>-</button>
        </div>
      ))}
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
};

export default SkillsForm;
