import React from 'react';

const CourseCard = ({ course }) => {
  const handleEnroll = () => {
    alert(`You have enrolled in ${course.name}!`);
  };

  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <button onClick={handleEnroll}>Enroll Now</button>
    </div>
  );
};

export default CourseCard;
