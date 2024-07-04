import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const navigate = useNavigate(); // useNavigate instead of useHistory
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
        navigate('/'); // Redirect to home page after login
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic
        navigate('/'); // Redirect to home page after signup
    };

    return (
        <div className="login-signup">
            <div className="form-container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={isLogin ? handleLogin : handleSignup}>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    {!isLogin && (
                        <input type="password" placeholder="Confirm Password" required />
                    )}
                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                <div className="form-toggle">
                    <span onClick={handleToggleForm}>
                        {isLogin ? 'Dont have an account? SignUp' : 'Already have an account? Login'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
