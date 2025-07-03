// HomePage.jsx
import React from 'react';
import '../styles/homepage.css'; // Import the dedicated CSS file


const HomePage = () => {
  const handleGetStartedClick = () => {
    console.log('Get Started button clicked!');
    // In future, this could navigate to the FoodSelector or UserInputForm
  };

  const appDescription = `
    Fuel & Fire is your personal fast-food converter. Have you just enjoyed a classic hamburger?
    Instead of leaving you to wonder, Fuel & Fire instantly tells you what it would take to "burn off" that burger.
    Think of it as a helpful guide, showing you the effort required to balance out your indulgence.
    This app is for anyone who enjoys a bit of fast food or "junk food" now and then, but also wants to maintain a healthy lifestyle.
    If you’re willing to make the effort to balance your diet with exercise, Fuel & Fire would be your perfect companion.
  `;

  return (
    <div className="homepage-container">
      <div className="content-card">
        <h1 className="title">
          Fuel & Fire
        </h1>
        <p className="tagline">
          Balance Your Bites with Bursts of Energy
        </p>
        <p className="description">
          {appDescription}
        </p>
        <button
          onClick={handleGetStartedClick}
          className="get-started-button"
        >
          Get Started
        </button>
        {/* Removed userId display as App.jsx is no longer providing it */}
      </div>
    </div>
  );
};

export default HomePage;