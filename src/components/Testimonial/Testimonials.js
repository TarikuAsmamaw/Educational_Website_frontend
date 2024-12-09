import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>
              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students' Voice</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Excellent Course Materials</h6>
                      <p>
                        The course materials provided were very detailed and
                        helped me grasp the concepts quickly. I highly recommend
                        this program!
                      </p>
                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Daniel</h6>
                        <p>Samara, Ethiopia</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Excellent Course Materials</h6>
                      <p>
                        The program gave me a deep understanding of both front-end
                        and back-end development. I'm now confident in applying my
                        skills.
                      </p>
                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Tomas Mulugeta</h6>
                        <p>Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Great Learning Experience</h6>
                      <p>
                        The instructors were excellent, and the hands-on projects
                        allowed me to apply what I learned in real-world scenarios.
                      </p>
                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
