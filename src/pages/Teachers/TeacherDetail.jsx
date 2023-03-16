import React from "react";
import { useParams } from "react-router-dom";
import { useCourseContext } from "../../Components/Context/CourseContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../Layout/Hero/Hero";

const TeacherDetail = () => {
  const { id } = useParams();
  const { getTeacherDetail } = useCourseContext();
  const teacher = getTeacherDetail(id);

  return (
    <section className="container py-5">
      <h1 className="visually-hidden">Teacher Detail Page</h1>
      <Hero heading="Teacher Detail" />

      <div className="col-12 col-md-5 card p-5" style={{ margin: "0 auto" }}>
        {teacher && (
          <div className="p-5" style={{ margin: "0 auto" }}>
            <div className="text-center mb-5">
              <h2 className="mb-0">
                {teacher?.firstName} {teacher?.lastName}
              </h2>
              <p className="text-muted">ID {teacher?.id}</p>
            </div>

            <div className="mb-4">
              <h6 className="mb-1">Contact</h6>
              <p className="mb-0">{teacher?.email}</p>
              <p>{teacher?.phone}</p>
            </div>

            <div className="pb-5">
              <h6>Competencies</h6>
              <ul className="list-inline">
                {teacher?.competencies &&
                  teacher.competencies.map((competence, i) => {
                    return (
                      <li key={i} className="list-inline-item ms-0">
                        {competence}
                      </li>
                    );
                  })}
              </ul>
            </div>

            <Link to={"/teachers"} className="btn-link-card-detail">
              <FontAwesomeIcon icon={faChevronLeft} className="icon me-2" />
              Go back to List
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeacherDetail;
