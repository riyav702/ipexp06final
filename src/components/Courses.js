// src/components/Courses.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const courseInfo = {
  "Electronics & Computer Science": "This branch focuses on the intersection of electronics and computer science, emphasizing both hardware and software development.",
  "Computer": "The Computer branch covers programming, software engineering, and the fundamentals of computer science.",
  "Automation & Robotics": "This field focuses on the design and creation of automated systems and robotic technologies.",
  "Electronics and Telecommunication": "This branch deals with the design and development of electronic devices and communication systems.",
  "Information Technology": "The IT branch focuses on the use of computers and software to manage information systems.",
  "AI and Data Science": "This branch covers artificial intelligence techniques and data analysis methods for informed decision-making.",
  "Humanities and Applied Sciences(FE)": "This course provides a foundation in humanities and applied sciences, emphasizing critical thinking and application of scientific principles.",
  "Electronics": "The Electronics branch involves the study of electrical circuits, devices, and systems.",
  "Instrumentation": "This field focuses on the measurement and control of physical quantities using instruments and sensors.",
};

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <nav style={{ backgroundColor: 'black', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
          {Object.keys(courseInfo).map(course => (
            <li key={course}>
              <Link
                to="#"
                onClick={() => setSelectedCourse(course)}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                {course}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {selectedCourse && (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <h2>{selectedCourse}</h2>
          <p>{courseInfo[selectedCourse]}</p>
        </div>
      )}
    </div>
  );
}

export default Courses;
