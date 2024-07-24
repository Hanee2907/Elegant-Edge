import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked) {
      const action = isSignUp ? 'signup' : 'login';
      const payload = { formData, action };
  
      try {
        const response = await fetch('http://localhost:4000/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          credentials: 'include',
        });
        const data = await response.json();
        console.log(data);
        // handle success response
      } catch (error) {
        console.error('Error:', error);
        // handle error response
      }
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form className='loginsignup-fields' onSubmit={handleSubmit}>
          {isSignUp && <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />}
          <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
          <input type='password' name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
          {isSignUp && <input type='text' name="phone" placeholder='Phone Number' value={formData.phone} onChange={handleChange} />}
          {isSignUp && <input type='text' name="address" placeholder='Address' value={formData.address} onChange={handleChange} />}
          <div className='loginsignup-agree'>
            <input type='checkbox' onChange={handleCheckboxChange} />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <button type="submit" disabled={!isChecked}>Continue</button>
        </form>
        {isSignUp ? (
          <p className='loginsignup-login'>
            Already have an account? <span style={{ cursor: "pointer" }} onClick={() => setIsSignUp(false)}>Login here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Don't have an account? <span style={{ cursor: "pointer" }} onClick={() => setIsSignUp(true)}>Sign up here</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;