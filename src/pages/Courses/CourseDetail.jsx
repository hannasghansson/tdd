import React from "react";
import { useCourseContext } from "../../Components/Context/CourseContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../Layout/Hero/Hero";

const CourseDetail = () => {
  const { id } = useParams();
  const { getCourseDetail } = useCourseContext();
  const course = getCourseDetail(id);
  return (
    <section className="container py-5">
      <Hero heading="Course Detail" />
      {/* 
      <hr />

      <Link to={"/courses"} className="btn btn-outline-dark m-0 ">
        <FontAwesomeIcon icon={faChevronLeft} className="icon me-2" />
        to Course
      </Link> */}

      <div class="row">
        <div class="col-10 offset-1 col-lg-8 offset-lg-2 card p-5">
          {course && (
            <div className="text-center">
              <h2>{course?.title}</h2>
              <p className="mb-0">{course?.startDate}</p>
              <h6 className="mb-1">Description</h6>
              <p className="mb-2">{course?.description}</p>
              <p className="text-muted mb-5" style={{ color: "#8C92A7" }}>
                ID: {course?.id}
              </p>

              <button className="">
                <Link to={"/courses"}>
                  <FontAwesomeIcon icon={faChevronLeft} className="icon me-2" />
                  to Course
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>

      {course && (
        <div className="text-center">
          <h2>{course?.title}</h2>
          <p className="mb-0">{course?.startDate}</p>
          <h6 className="mb-1">Description</h6>
          <p className="mb-2">{course?.description}</p>
          <p className="text-muted mb-5" style={{ color: "#8C92A7" }}>
            ID: {course?.id}
          </p>
        </div>
      )}
    </section>
  );
};

export default CourseDetail;
