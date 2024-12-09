import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
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
          { lg: "2", md: "3", sm: "4", xs: "6" },
          React.createElement(
            "h3",
            { className: "d-flex align-items-center gap-1" },
            React.createElement("i", { className: "ri-vimeo-line" }),
            " Vimeo"
          )
        ),
        React.createElement(
          Col,
          { lg: "2", md: "3", sm: "4", xs: "6" },
          React.createElement(
            "h3",
            { className: "d-flex align-items-center gap-1" },
            React.createElement("i", { className: "ri-pinterest-line" }),
            " Pinterest"
          )
        ),
        React.createElement(
          Col,
          { lg: "2", md: "3", sm: "4", xs: "6" },
          React.createElement(
            "h3",
            { className: "d-flex align-items-center gap-1" },
            React.createElement("i", { className: "ri-dribbble-line" }),
            " Dribble"
          )
        ),
        React.createElement(
          Col,
          { lg: "2", md: "3", sm: "4", xs: "6" },
          React.createElement(
            "h3",
            { className: "d-flex align-items-center gap-1" },
            React.createElement("i", { className: "ri-apple-fill" }),
            " Apple"
          )
        ),
        React.createElement(
          Col,
          { lg: "2", md: "3", sm: "4", xs: "6" },
          React.createElement(
            "h3",
            { className: "d-flex align-items-center gap-1" },
            React.createElement("i", { className: "ri-finder-fill" }),
            " Finder"
          )
        ),
        React.createElement(
          Col,
          { lg: "2", md: "3", sm: "4", xs: "6" },
          React.createElement(
            "h2",
            { className: "d-flex align-items-center gap-1" },
            React.createElement("i", { className: "ri-google-fill" }),
            " Google"
          )
        )
      )
    )
  );
};

export default Company;
