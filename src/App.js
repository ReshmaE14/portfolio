import React, { useState, useEffect, useRef } from 'react';
import PersonalInfoForm from './components/personalInfoForm';
import SkillsForm from './components/SkillsForm';
import ExperienceForm from './components/ExperienceForm';
import ProjectsForm from './components/ProjectsForm';
import TemplateSelector from './components/TemplateSelector';
import Preview from './components/Preview';
import PDFDownload from './components/PDFDownload';
import './App.css';

function App() {
  // State for personal information
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // State for skills
  const [skills, setSkills] = useState(['']);

  // State for experience
  const [experience, setExperience] = useState([
    { company: '', role: '', duration: '', description: '' },
  ]);

  // State for projects
  const [projects, setProjects] = useState([
    { name: '', description: '', link: '' },
  ]);

  // State for selected template
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  // Reference for PDF generation
  const previewRef = useRef();

  // Load data from local storage on mount
  useEffect(() => {
    const savedPersonalInfo = localStorage.getItem('personalInfo');
    const savedSkills = localStorage.getItem('skills');
    const savedExperience = localStorage.getItem('experience');
    const savedProjects = localStorage.getItem('projects');
    const savedTemplate = localStorage.getItem('selectedTemplate');

    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo));
    }
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    }
    if (savedExperience) {
      setExperience(JSON.parse(savedExperience));
    }
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }
  }, []);

  // Save data to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('experience', JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('selectedTemplate', selectedTemplate);
  }, [selectedTemplate]);

  return (
    <div className="App">
      <h1>Portfolio Builder App</h1>
      <div className="container">
        {/* Form Section */}
        <div className="forms">
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <SkillsForm skills={skills} setSkills={setSkills} />
          <ExperienceForm
            experience={experience}
            setExperience={setExperience}
          />
          <ProjectsForm projects={projects} setProjects={setProjects} />
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
          <PDFDownload targetRef={previewRef} />
        </div>

        {/* Preview Section */}
        <div className="preview">
          <h2>Live Preview</h2>
          <Preview
            ref={previewRef}
            personalInfo={personalInfo}
            skills={skills}
            experience={experience}
            projects={projects}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
