import React from "react";
import { useParams } from "react-router-dom";
import { useCourseContext } from "../../Components/Context/CourseContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const TeacherDetail = () => {
  const { id } = useParams();
  const { getTeacherDetail } = useCourseContext();
  const teacher = getTeacherDetail(id);

  return (
    <div>
      {teacher && (
        <>
          <h2>
            {teacher?.firstName} {teacher?.lastName}
          </h2>
          <p className="mb-2">id: {teacher?.id}</p>

          <p className="mb-0">Email: {teacher?.email}</p>
          <p className="mb-2">Phone: {teacher?.phone}</p>
          <h6>Competencies</h6>
          <ul>
            {teacher?.competencies &&
              teacher.competencies.map((competence, i) => {
                return <li key={i}>{competence}</li>;
              })}
          </ul>
          <Link to={"/teachers"} className="btn btn-outline-dark m-0 ">
            <FontAwesomeIcon icon={faBackward} className="me-2" /> Go back to
            teachers
          </Link>
        </>
      )}
    </div>
  );
};

export default TeacherDetail;
