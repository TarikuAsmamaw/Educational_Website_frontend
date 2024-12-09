import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="register-container">
        <div className="home-button-container">
          <Link to="/" className="home-button">Back to Home</Link>
        </div>
      </div>

      <Container>
        <div className="about-content">
          <h2 className="section-title">Welcome to Ethiopia Coders Academy</h2>
          <p className="description">
            At <strong>Ethiopia Coders Academy</strong>, we offer the best platform for students to learn both frontend and backend development. Our curriculum is designed to provide you with a comprehensive understanding of web development technologies, from basic coding to advanced frameworks.
          </p>

          <div className="category">
            <h3 className="category-title">Frontend Development Category</h3>
            <p className="category-description">
              Welcome to <strong>Ethiopia Coders Academy</strong>, the perfect place to kickstart your journey in <strong>Frontend Development</strong>! Learn the core building blocks of web interfaces, including <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and explore powerful frameworks like <strong>React</strong> and <strong>Angular</strong>. With hands-on projects, you'll develop stunning, responsive, and user-friendly applications that captivate users and create seamless digital experiences.
            </p>
          </div>

          <div className="category">
            <h3 className="category-title">Backend Development Category</h3>
            <p className="category-description">
              Dive deep into <strong>Backend Development</strong> with <strong>Ethiopia Coders Academy</strong>, mastering robust server-side technologies like <strong>Java</strong>, <strong>Spring Framework</strong>, and <strong>Node.js</strong>. Build efficient APIs, work with databases like <strong>MongoDB</strong> and <strong>MySQL</strong>, and gain expertise in server management and deployment with tools like <strong>Docker</strong> and <strong>AWS</strong>. Join us and learn to create secure, scalable, and high-performing applications that power modern software solutions!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
