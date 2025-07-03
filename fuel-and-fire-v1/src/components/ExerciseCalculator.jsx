// ExerciseCalculator.jsx
import React from 'react';
import '../styles/exercise-calculator.css'; // Import the dedicated CSS file

const ExerciseCalculator = () => {
  // For now, we'll use a placeholder calorie value and hardcoded exercises.
  // In a real app, 'calories' would come from props or state based on food input.
  const placeholderCalories = 500; // Example for a hamburger

  // These exercises are based on common calorie burn rates for a 500 calorie input.
  // Actual values would vary greatly by individual, intensity, and precise food.
  const exerciseOptions = [
    { name: 'Running', duration: '50 minutes' }, // ~10 calories/min
    { name: 'Brisk Walking', duration: '1 hour 40 minutes' }, // ~5 calories/min
    { name: 'Cycling', duration: '1 hour 15 minutes' }, // ~6.5 calories/min
    { name: 'Push-ups', reps: '200 (approx.)' }, // Very rough estimate, depends on intensity
    { name: 'Swimming (moderate)', duration: '1 hour' }, // ~8 calories/min
    { name: 'Dancing (aerobic)', duration: '1 hour 15 minutes' }, // ~6.5 calories/min
  ];

  // Example of a combined exercise suggestion
  const combinedExercise = 'Or try: 25 minutes of Running + 40 minutes of Cycling';

  return (
    <div className="exercisecalculator-container">
      <div className="exercisecalculator-content-card">
        <h1 className="exercisecalculator-title">
          Your Burn Options
        </h1>
        <p className="exercisecalculator-description">
          To balance out approximately {placeholderCalories} calories, here are some activities you can do:
        </p>

        <ul className="exercise-options-list">
          {exerciseOptions.map((exercise, index) => (
            <li key={index} className="exercise-option-item">
              <strong>{exercise.name}:</strong> {exercise.duration || exercise.reps}
            </li>
          ))}
        </ul>

        <p className="exercisecalculator-description" style={{ marginTop: '2rem', fontWeight: 'bold' }}>
          {combinedExercise}
        </p>

        {/* You can add more interactive elements here, like filters or a custom exercise builder */}
      </div>
    </div>
  );
};

export default ExerciseCalculator;