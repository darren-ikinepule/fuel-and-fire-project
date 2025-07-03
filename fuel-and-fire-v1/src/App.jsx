// App.jsx
import React from 'react';
import HomePage from './components/HomePage'; // Assuming HomePage.jsx is in the same directory
import SocialPage from './components/SocialPage';
import UserInputForm from './components/UserInPutForm';
import ExerciseCalculator from './components/ExerciseCalculator';

function App() {
  return (
    // The main container for the app, simply rendering HomePage
    <div className="app-container">
      <HomePage />
      <SocialPage />
      <UserInputForm />
      <ExerciseCalculator/>
    </div>
  );
}

export default App;