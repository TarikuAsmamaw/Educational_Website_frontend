import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, rating, message } = formData;

    const feedbackData = { name, email, rating, message };

    try {
      const response = await fetch('https://localhost:5000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
      });

      const result = await response.json();

      if (result.status === 'success') {
        setResponseMessage('Thank you for your feedback!');
      } else {
        setResponseMessage('Error submitting feedback. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-container">
      <div className="home-button-container">
        <Link to="/" className="home-button">Back to Home</Link>
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Feedback Form</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="rating">Rating (1-5):</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      {responseMessage && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: responseMessage.includes('Thank you') ? 'green' : 'red'
          }}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default Feedback;
