import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

const footerQuickLinks = [
  { display: "Home", url: "#" },
  { display: "About US", url: "#" },
  { display: "Courses", url: "#" },
  { display: "Blog", url: "#" },
];

const footerInfoLinks = [
  { display: "Privacy Policy", url: "#" },
  { display: "Membership", url: "#" },
  { display: "Purchases Guide", url: "#" },
  { display: "Terms of Service", url: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Social Media Section */}
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a
                  href="http://www.youtube.com/@TarikuTechSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube size={30} color="red" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} color="#e4405f" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={30} color="#0e76a8" />
                </a>
              </span>
            </div>
          </Col>

          {/* Explore Links */}
          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Information Links */}
          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Section */}
          <Col lg="3" md="6">
            <h6 className="fw-bold">Offered by Samara University</h6>
            <p>Tariku Asmamaw Tadele</p>
            <p>Address: Samara, Ethiopia</p>
            <p>Phone: +251918060740</p>
            <p>Email: <a href="mailto:Tariku.Asm@uog.edu.et">Tariku.Asm@uog.edu.et</a></p>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col lg="12" className="text-center mt-4">
            <p>&copy;{currentYear} Ethiopia Coders Academy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
