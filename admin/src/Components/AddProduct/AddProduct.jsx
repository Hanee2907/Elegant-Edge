import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isSignUp, SetIsSignUp] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: isSignUp ? name : undefined,
      email,
      password
    };
    
    try {
      const response = await fetch('http://localhost:4000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle successful response
        console.log('User data submitted successfully');
      } else {
        // Handle error response
        console.error('Failed to submit user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit} className='loginsignup-fields'>
          {isSignUp && <input 
            type="text" 
            placeholder='Your Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />}
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
          <div className='loginsignup-agree'>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <p>By continuing, I agree to terms of use & privacy policy.</p>
          </div>
          <button type='submit' disabled={!isChecked}>Continue</button>
        </form>
        {isSignUp ? (
          <p className='loginsignup-login'>
            Already have an account? <span style={{ cursor: "pointer" }} onClick={() => SetIsSignUp(false)}>Login here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Don't have an account? <span style={{ cursor: "pointer" }} onClick={() => SetIsSignUp(true)}>Signup here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
