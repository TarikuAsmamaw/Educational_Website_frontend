import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                We are committed to providing an exceptional learning
                experience. Our platform offers a comprehensive approach to web
                development, ensuring you master the skills needed for success in
                the tech industry. With expert instructors, hands-on projects,
                and industry-relevant tools, we help you build real-world
                applications and advance your career. Whether you're a beginner or
                looking to refine your skills, Ethiopia Coders Academy offers the
                resources and support you need to excel. Join us and unlock your
                potential in both Frontend and Backend development!
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/y0vElyDaI3c?si=O1jHayzTLCIpPUmo"
                  controls={true}
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}
              {!showVideo && (
                <span className="play__icon">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  />
                </span>
              )}
            </div>
            <div className="pdf-download-btn mt-3 text-center">
              <a href="/Java 3.pdf" download="Java 3 PDF">
                <button className="btn btn-primary">Download PDF</button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
