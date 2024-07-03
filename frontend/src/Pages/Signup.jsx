import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!name || !email || !password || !agreed) {
      setError('Please fill out all fields.'); // Simple validation
      return;
    }

    try {
      const response = await fetch('your_signup_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful!');
      } else {
        // Handle unsuccessful signup
        setError('Signup failed. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.'); // Set generic error message
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        {error && <p className='error-message'>{error}</p>} {/* Display error message */}
        <div className='loginsignup-fields'>
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='loginsignup-agree'>
          <input
            type='checkbox'
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <p>I agree to terms of use & privacy policy.</p>
        </div>
        <button onClick={handleSignup}>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
