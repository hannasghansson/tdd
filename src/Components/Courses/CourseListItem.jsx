import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CourseList({ course }) {
  const getCourseLength = (course) => {
    console.log(course);
    console.log(!course?.endDate || !course?.startDate);
    if (!course?.endDate || !course?.startDate) return "";
    const appendS = (str, num) => `${str}${num > 1 ? "s" : ""}`;

    const startDate = new Date(course.startDate);
    const endDate = new Date(course.endDate);

    const numYears = endDate.getFullYear() - startDate.getFullYear();
    if (numYears > 0) return `${numYears} ${appendS("year", numYears)}`;

    const numMonths = endDate.getMonth() - startDate.getMonth();
    if (numMonths > 0) return `${numMonths} ${appendS("month", numMonths)}`;

    const numDays = endDate.getDate() - startDate.getDate();
    if (numDays > 0) return `${numDays} ${appendS("day", numDays)}`;
  };

  const [showAnswer, setShowAnswer] = useState(false);
  const handletoggle = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <li
      onClick={handletoggle}
      key={course?.id}
      className="col-12 col-md-6 col-lg-4 g-4"
    >
      <div className="card p-3">
        <div className="d-flex justify-content-between text-muted">
          <p className="text-uppercase">{course?.category}</p>
          <p>{getCourseLength(course)}</p>
        </div>

        <h2 className="card-title mb-2">{course?.title}</h2>

        <p className="card-text mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <Link to={`/courses/${course.id}`}>
          Explore Course
          <FontAwesomeIcon icon={faChevronRight} className="icon ms-3" />
        </Link>

      </div>
    </li>
  );
}

export default CourseList;
