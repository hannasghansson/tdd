import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useCourseContext } from "../Context/CourseContext";
import CourseListItem from "../Courses/CourseListItem";

import Heading from "../../Layout/Heading/Heading";
import { RemoveCourse } from "../../Components/Courses/RemoveCourse";

function CourseList() {
  const { courses } = useCourseContext();

  return (
    <article className="container p-5 ">
      <h1 className="visually-hidden">Courses list page</h1>

      <Heading span="Westcoast Education" heading="Our Courses" />

      <ul className="row list-unstyled">
        {courses.map((course, id) => {
          return <CourseListItem key={id} course={course} />;
        })}

        <div className="col-12 col-md-6 col-lg-4 g-4">
          <div className="border rounded p-3 d-flex justify-content-center align-items-center">
            <Link to={"/addCourse"} className="btn">
              <FontAwesomeIcon
                icon={faPlus}
                size="9x"
                className="icon pb-2 pt-3"
              />
            </Link>
          </div>
        </div>
      </ul>

      <RemoveCourse />
    </article>
  );
}

export default CourseList;
