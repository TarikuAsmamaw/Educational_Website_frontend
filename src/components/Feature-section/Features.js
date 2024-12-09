import React from "react";
import { Container, Row, Col } from "reactstrap";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "We provide fast and efficient learning methods to help you grasp complex concepts quickly. Our approach ensures you understand key principles without feeling overwhelmed, allowing you to progress at your own pace and master essential skills needed for success.",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    desc: "We offer round-the-clock support to assist you whenever you need help. Whether you're tackling a difficult problem or need guidance, our team is always available to provide the assistance and resources you need to succeed in your learning journey.",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    desc: "Upon completing our courses, you'll receive a certification that validates your skills and knowledge in web development. Our certifications are recognized in the industry and help you stand out to potential employers, showcasing your dedication to mastering both frontend and backend technologies.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
