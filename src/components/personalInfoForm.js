
import React from 'react';

const PersonalInfoForm = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-section">
      <h3>Personal Information</h3>
      <input
        type="text"
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={personalInfo.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="address"
        value={personalInfo.address}
        onChange={handleChange}
        placeholder="Address"
      />
    </div>
  );
};

export default PersonalInfoForm;
