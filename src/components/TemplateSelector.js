
import React from 'react';

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  const handleChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <div className="form-section">
      <h3>Select Template</h3>
      <select value={selectedTemplate} onChange={handleChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
