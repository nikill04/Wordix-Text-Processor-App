import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import reportWebVitals from './reportWebVitals';

// Set the current lesson you want to load
const myProgressNumber = 13; // CHANGE THIS NUMBER TO LOAD A DIFFERENT FILE
const CurrentLesson = require(`./myProject/myProgress_${myProgressNumber}/App`).default;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentLesson />
  </React.StrictMode>
);

reportWebVitals();