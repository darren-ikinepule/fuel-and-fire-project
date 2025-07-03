// SocialPage.jsx
import React from 'react';
import '../styles/socialpage.css'; // Import the dedicated CSS file

const SocialPage = () => {
  return (
    <div className="socialpage-container">
      <div className="social-content-card">
        <h1 className="social-title">
          Connect & Share
        </h1>
        <p className="social-description">
          Share your progress, challenge friends, and celebrate your fitness journey with the Fuel & Fire community!
        </p>

        <div className="social-features">
          <div className="social-feature-item">
            <span className="social-icon-placeholder">💬</span>
            <p>Share Your Progress</p>
          </div>
          <div className="social-feature-item">
            <span className="social-icon-placeholder">🏆</span>
            <p>Challenge Friends</p>
          </div>
          <div className="social-feature-item">
            <span className="social-icon-placeholder">📊</span>
            <p>View Leaderboards</p>
          </div>
          <div className="social-feature-item">
            <span className="social-icon-placeholder">🤝</span>
            <p>Connect with Others</p>
          </div>
        </div>
          </div>
      </div>
    
  );
};

export default SocialPage;