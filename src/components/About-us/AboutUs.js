import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";

const AboutUs = () => {
  return React.createElement(
    "section",
    null,
    React.createElement(
      Container,
      null,
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { lg: "6", md: "6" },
          React.createElement(
            "div",
            { className: "about__img" },
            React.createElement("img", {
              src: aboutImg,
              alt: "",
              className: "w-100",
            })
          )
        ),
        React.createElement(
          Col,
          { lg: "6", md: "6" },
          React.createElement(
            "div",
            { className: "about__content" },
            React.createElement("h2", null, "About Us"),
            React.createElement(
              "p",
              null,
              "Pain itself, let it be loved, sits with great sorrow. Except for desire, the soul will free itself, it does not know the body, and we explain this to ourselves as though it were something of a complaint."
            ),
            React.createElement(
              "div",
              { className: "about__counter" },
              React.createElement(
                "div",
                { className: "d-flex gap-5 align-items-center" },
                React.createElement(
                  "div",
                  { className: "single__counter" },
                  React.createElement(
                    "span",
                    { className: "counter" },
                    React.createElement(CountUp, {
                      start: 0,
                      end: 25,
                      duration: 2,
                      suffix: "K",
                    })
                  ),
                  React.createElement(
                    "p",
                    { className: "counter__title" },
                    "Completed Projects"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "single__counter" },
                  React.createElement(
                    "span",
                    { className: "counter" },
                    React.createElement(CountUp, {
                      start: 0,
                      end: 12,
                      duration: 2,
                      suffix: "M",
                    })
                  ),
                  React.createElement(
                    "p",
                    { className: "counter__title" },
                    "Patient Around World"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "d-flex gap-5 align-items-center" },
                React.createElement(
                  "div",
                  { className: "single__counter" },
                  React.createElement(
                    "span",
                    { className: "counter" },
                    React.createElement(CountUp, {
                      start: 0,
                      end: 95,
                      duration: 2,
                      suffix: "M",
                    })
                  ),
                  React.createElement(
                    "p",
                    { className: "counter__title" },
                    "Ideas Raised Funds"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "single__counter" },
                  React.createElement(
                    "span",
                    { className: "counter" },
                    React.createElement(CountUp, {
                      start: 0,
                      end: 5,
                      duration: 2,
                      suffix: "K",
                    })
                  ),
                  React.createElement(
                    "p",
                    { className: "counter__title" },
                    "Categories Served"
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default AboutUs;
