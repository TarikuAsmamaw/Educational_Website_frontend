import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import loginImage from '../../assests/images/login1.jpg'; // Ensure this path is correct.

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
    setError('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('user')) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert('Login successful!');
      navigate('/home'); // Navigate to home page
    } else {
      setError('Invalid email or password!');
    }
  };

  return (
    <div>
      <nav className="nav-bar">
        <Link to="/" className="back-to-home">Back to Home</Link>
      </nav>
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={userDetails.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={userDetails.password}
              onChange={handleInputChange}
            />
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
