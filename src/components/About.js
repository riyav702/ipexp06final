// src/components/About.js
import React, { useState } from 'react';
import './About.css'; // Import your CSS for styling

const About = () => {
  const [content, setContent] = useState('');

  const handleNavClick = (section) => {
    switch (section) {
      case 'history':
        setContent('Our college was established in 1990 with the aim of providing quality education...');
        break;
      case 'ranking':
        setContent('We are ranked among the top 10 engineering colleges in the country...');
        break;
      case 'departments':
        setContent('We offer various departments including Computer Science, Mechanical Engineering, and Civil Engineering...');
        break;
      case 'highlights':
        setContent('Our college is known for its innovative teaching methods and excellent placement records...');
        break;
      default:
        setContent('');
    }
  };

  return (
    <div className="about-container">
      <nav className="about-navbar">
        <ul>
          <li onClick={() => handleNavClick('history')}>History</li>
          <li onClick={() => handleNavClick('ranking')}>Ranking and Position</li>
          <li onClick={() => handleNavClick('departments')}>Departments</li>
          <li onClick={() => handleNavClick('highlights')}>Highlights</li>
        </ul>
      </nav>
      <div className="about-content">
        <p>{content || 'Select a section to view information.'}</p>
      </div>
    </div>
  );
};

export default About;
