// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Ensure this is imported
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals';
import './index.css'; // Your global styles

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
