import React from 'react';
import LinkedIn from "../assets/LinkedIn.png";

const LinkedInProfile = () => {
  return (
    <a href="https://www.linkedin.com/in/edwin-ye/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: 'inherit' }}>
      <img src={LinkedIn} alt="React Logo" className="skill-logo" />,
    </a>
  );
};

export default LinkedInProfile;
