import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    // Save the selected plan in local storage or state
    localStorage.setItem('selectedPlan', plan);
    navigate('/register'); // Redirect to register page when a plan is selected
  };

  return (
    <div className="dashboard-container">
      <div className="background-overlay">
        <h1>Welcome to FitFusion Gym</h1>
        <p className="intro-text">Achieve your fitness goals with personalized plans and world-class equipment.</p>

        <h2>Select Your Plan</h2>
        <div className="plans-container">
          <div className="plan basic" onClick={() => handleSelectPlan('Basic')}>
            <h3>Basic Plan</h3>
            <p>Access to gym equipment and locker facilities.</p>
            <p>Price: $20/month</p>
          </div>
          <div className="plan premium" onClick={() => handleSelectPlan('Premium')}>
            <h3>Premium Plan</h3>
            <p>Includes group classes and personal trainer sessions.</p>
            <p>Price: $50/month</p>
          </div>
          <div className="plan platinum" onClick={() => handleSelectPlan('Platinum')}>
            <h3>Platinum Plan</h3>
            <p>All-inclusive membership with VIP lounge access and spa services.</p>
            <p>Price: $100/month</p>
          </div>
        </div>

        <h2>Our Gym Infrastructure</h2>
        <div className="infrastructure-container">
          <div className="infrastructure-item">
            <img src="/assets/gym_equipment.jpg" alt="Gym Equipment" />
            <p>State-of-the-art equipment to help you achieve your fitness goals.</p>
          </div>
          <div className="infrastructure-item">
            <img src="/assets/workout_area.jpg" alt="Workout Area" />
            <p>Spacious workout areas designed for comfort and efficiency.</p>
          </div>
          <div className="infrastructure-item">
            <img src="/assets/locker_room.jpg" alt="Locker Room" />
            <p>Luxurious locker rooms with all the amenities you need.</p>
          </div>
        </div>

        <footer className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item social-media">
              <h3>Follow Us</h3>
              <a href="https://facebook.com/yourgym" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook-logo.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com/yourgym" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter-logo.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com/yourgym" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram-logo.png" alt="Instagram" />
              </a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:contact@fitfusion.com">contact@fitfusion.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>123 Fitness St, Gym City, Fitland</p>
            </div>
            <div className="contact-item">
              <h3>Contact Number</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </footer>
        
        <footer className="footer">
          <p>&copy; 2024 FitFusion Gym. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
