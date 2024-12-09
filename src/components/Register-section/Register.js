import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    skills: ""
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email.includes("@")) formErrors.email = "Valid email is required";
    if (!formData.experience || formData.experience < 1)
      formErrors.experience = "Minimum 1 year experience required";
    if (!formData.skills.toLowerCase().includes("javascript"))
      formErrors.skills = "Proficiency in JavaScript required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      try {
        const response = await fetch("https://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          setSubmitSuccess(result.message || "Registration successful!");
          setFormData({ name: "", email: "", experience: "", skills: "" });
        } else {
          const errorData = await response.json();
          setSubmitSuccess(errorData.error || "Registration failed.");
        }
      } catch (error) {
        console.error("Network error:", error);
        setSubmitSuccess("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="home-button-container">
        <Link to="/" className="home-button">Back to Home</Link>
      </div>

      <div className="minimum-requirements">
        <h2>Minimum Requirements</h2>
        <ul>
          <li>At least 1 year of experience in software development.</li>
          <li>Proficiency in JavaScript is required.</li>
          <li>Knowledge of React.js or similar front-end frameworks.</li>
          <li>Understanding of RESTful APIs and client-server architecture.</li>
          <li>Familiarity with version control systems (e.g., Git).</li>
          <li>Excellent problem-solving and analytical skills.</li>
          <li>Ability to work in a collaborative team environment.</li>
          <li>Strong communication skills, both written and verbal.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Team member Registration</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          Years of Experience:
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Enter your years of experience"
          />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </label>

        <label>
          Skills (must include JavaScript):
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Enter your skills (must include JavaScript)"
          />
          {errors.skills && <p className="error">{errors.skills}</p>}
        </label>

        <button type="submit" className="submit-button">
          {loading ? "Submitting..." : "Submit"}
        </button>

        {submitSuccess && <p className="success">{submitSuccess}</p>}
      </form>
    </div>
  );
}

export default Register;
