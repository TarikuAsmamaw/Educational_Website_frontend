import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import signupImage from '../../assests/images/login1.jpg';

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
    setError('');
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = userDetails;

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must meet the following criteria:');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('user')) || [];
    const updatedUsers = [...existingUsers, userDetails];
    localStorage.setItem('user', JSON.stringify(updatedUsers));

    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <nav className="nav-bar">
        <Link to="/" className="back-to-home">Back to Home</Link>
      </nav>
      <div className="signup-container">
        <div className="signup-image">
          <img src={signupImage} alt="Sign Up Illustration" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={userDetails.name}
              onChange={handleInputChange}
            />
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
            {error && (
              <ul className="password-requirements">
                <li>At least 8 characters</li>
                <li>At least one uppercase letter (A, B, C, D, ... Z)</li>
                <li>At least one lowercase letter (a, b, c, d, ... z)</li>
                <li>At least one number (0, 1, 2, 3, ... 9)</li>
                <li>At least one special character (@, $, !, %, *, ?, &)</li>
              </ul>
            )}
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <div className="form-buttons">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
