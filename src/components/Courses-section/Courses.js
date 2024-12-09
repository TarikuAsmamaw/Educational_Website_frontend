import React from "react";
import { Container, Row, Col } from "reactstrap";
import frontend from "../../assests/images/frontend.png";
import backend from "../../assests/images/backend.png";
import problem from "../../assests/images/problem.jpg";
import react1 from "../../assests/images/react1.jpg";
import cloud from "../../assests/images/cloud.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Frontend Design for Beginners(Java,JavaScript,HTML,CSS)",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: frontend,
  },
  {
    id: "02",
    title: "Backend Design for Beginners(MySQL,MongoDB,Node.js,Express)",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: backend,
  },
  {
    id: "03",
    title: "Frameworks(React ,Angular and Spring)",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: react1,
  },

  {
    id: "03",
    title: "Cloud Computing(Amazon Web Services (AWS)and Docker)",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: cloud,
  },
  {
    id: "03",
    title: "Advanced Programming Problems",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: problem,
  },
];

const Courses = () => {
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
          { lg: "12", className: "mb-5" },
          React.createElement(
            "div",
            { className: "course__top d-flex justify-content-between align-items-center" },
            React.createElement(
              "div",
              { className: "course__top__left w-50" },
              React.createElement("h2", null, "Our Popular Courses"),
              React.createElement(
                "p",
                null,
                "Pain itself sits at the heart of great things. What follows is freedom, something that delights, because life itself rejects blame and accepts understanding."
              )
            ),
            React.createElement(
              "div",
              { className: "w-50 text-end" },
              React.createElement("button", { className: "btn" }, "See All")
            )
          )
        ),
        coursesData.map((item) =>
          React.createElement(
            Col,
            { lg: "4", md: "6", sm: "6", key: item.id },
            React.createElement(CourseCard, { item: item })
          )
        )
      )
    )
  );
};

export default Courses;
