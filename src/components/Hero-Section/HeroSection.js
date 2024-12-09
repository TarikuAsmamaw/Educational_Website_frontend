import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
          
              <p className="mb-5">
                Welcome to Ethiopia Coders Academy, the perfect place to kickstart your journey in Frontend and Backend Development!
                Learn the core building blocks of web interfaces, including <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, 
                and explore powerful frameworks like <strong>React</strong> and <strong>Angular</strong>. With hands-on projects, 
                you'll develop stunning, responsive, and user-friendly applications that captivate users and create seamless digital experiences.
              </p>
              <p className="mb-5">
                Dive deep into Backend Development with Ethiopia Coders Academy, mastering robust server-side technologies like <strong>Java</strong>, 
                <strong>Spring Framework</strong>,<strong>Node.js</strong>,and <strong>Express.js</strong>. Build efficient APIs, work with databases like <strong>MongoDB</strong> 
                and <strong>MySQL</strong>, and gain expertise in server management and deployment with tools like <strong>Docker</strong> and <strong>AWS</strong>. 
                Join us and learn to create secure, scalable, and high-performing applications that power modern software solutions!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
