// UserInputForm.jsx
import React, { useState } from 'react';
import '../styles/userinputform.css'; // Import the dedicated CSS file

const UserInputForm = () => {
  const [foodItem, setFoodItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Food item submitted:', foodItem);
    // In a real app, you would pass this foodItem to a calorie calculation function
    // and then to the ExerciseCalculator or ResultsDisplay.
    setFoodItem(''); // Clear the input field after submission
  };

  return (
    <div className="userinputform-container">
      <div className="userinput-content-card">
        <h1 className="userinput-title">
          What Did You Eat?
        </h1>
        <p className="userinput-description">
          Enter the fast food item you've enjoyed, and we'll tell you how to balance it out!
        </p>

        <form className="input-form" onSubmit={handleSubmit}>
          <label htmlFor="food-input" className="form-label">
            Food Item:
          </label>
          <input
            type="text"
            id="food-input"
            className="form-input"
            placeholder="e.g., Hamburger, Pizza Slice, Fries"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Calculate Burn
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserInputForm;