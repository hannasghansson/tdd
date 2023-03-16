import React from "react";
import { useCourseContext } from "../../Components/Context/CourseContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../Layout/Hero/Hero";

const CourseDetail = () => {
  const { id } = useParams();
  const { getCourseDetail } = useCourseContext();
  const course = getCourseDetail(id);
  return (
    <section className="container py-5">
      <h1 className="visually-hidden">Course Detail Page</h1>
      <Hero heading="Course Detail" />

      <div className="col-10 card p-5" style={{ margin: "0 auto" }}>
        {course && (
          <div className="p-5">
            <div className="d-flex justify-content-between text-muted">
              <p className="text-uppercase">{course?.category}</p>
              <p>ID {course?.id}</p>
            </div>

            <h2 className="mb-4">{course?.title}</h2>
            <div className="pb-5">
              <h6>Description</h6>
              <p className="mb-4">{course?.description}</p>

              <h6>
                Dates
                <FontAwesomeIcon icon={faCalendar} className="icon ms-2" />
              </h6>
              <p className="mb-0">Course start: {course?.startDate}</p>
              <p>End: {course?.endDate}</p>
            </div>

            <Link to={"/courses"} className="btn-link-card ">
              <FontAwesomeIcon icon={faChevronLeft} className="icon me-2" />
              Go back to List
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseDetail;
