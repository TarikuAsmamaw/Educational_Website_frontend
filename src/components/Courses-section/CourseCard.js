import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return React.createElement(
    "div",
    { className: "single__course__item" },
    React.createElement(
      "div",
      { className: "course__img" },
      React.createElement("img", { src: imgUrl, alt: "", className: "w-100" })
    ),
    React.createElement(
      "div",
      { className: "course__details" },
      React.createElement(
        "h6",
        { className: "course__title mb-4" },
        title
      ),
      React.createElement(
        "div",
        { className: "d-flex justify-content-between align-items-center" },
        React.createElement(
          "p",
          { className: "lesson d-flex align-items-center gap-1" },
          React.createElement("i", { className: "ri-book-open-line" }),
          ` ${lesson} Lessons`
        ),
        React.createElement(
          "p",
          { className: "students d-flex align-items-center gap-1" },
          React.createElement("i", { className: "ri-user-line" }),
          ` ${students}K`
        )
      ),
      React.createElement(
        "div",
        { className: "d-flex justify-content-between align-items-center" },
        React.createElement(
          "p",
          { className: "rating d-flex align-items-center gap-1" },
          React.createElement("i", { className: "ri-star-fill" }),
          ` ${rating}K`
        ),
        React.createElement(
          "p",
          { className: "enroll d-flex align-items-center gap-1" },
          React.createElement(
            "button",
            { className: "enroll-btn" },
            "Enroll Now"
          )
        )
      )
    )
  );
};

export default CourseCard;
