// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Ensure this is imported
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals';
import './index.css'; // Your global styles
import ShopContextProvider from './Context/ShopContext'; // Import only the provider

ReactDOM.render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
