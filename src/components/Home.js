// src/components/Home.js
import React from 'react';
import './Home.css'; // Ensure your CSS for Home is imported

const Home = () => {
  // Add your image URL here
  const imageUrl = 'https://indoafrica.allegiance-educare.in/storage/uploads/colleges/1662553710campus%20front.jpg'; // Replace with your actual image URL

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={imageUrl} alt="College" className="college-image" />
        <div className="text-overlay">
          <h1>Vivekanand Education Society's Institute of Technology</h1> {/* Replace with your college name */}
        </div>
      </div>
    </div>
  );
};

export default Home;
