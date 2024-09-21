
import React, { forwardRef } from 'react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import './Preveiw.css';

const Preview = forwardRef(
  ({ personalInfo, skills, experience, projects, selectedTemplate }, ref) => {
    const renderTemplate = () => {
      switch (selectedTemplate) {
        case 'template1':
          return (
            <Template1
              personalInfo={personalInfo}
              skills={skills}
              experience={experience}
              projects={projects}
            />
          );
        case 'template2':
          return (
            <Template2
              personalInfo={personalInfo}
              skills={skills}
              experience={experience}
              projects={projects}
            />
          );
        default:
          return null;
      }
    };

    return <div ref={ref} className="portfolio-preview">{renderTemplate()}</div>;
  }
);

export default Preview;
