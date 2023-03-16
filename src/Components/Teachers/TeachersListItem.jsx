import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function TeachersListItem({ teacher }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handletoggle = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <li
      onClick={handletoggle}
      key={teacher?.id}
      className="row mb-4 p-4 teacherList"
    >
      <div className="col">
        <h5 className="">
          {teacher?.firstName} {teacher?.lastName}
        </h5>
        <p className="mb-0">
          {teacher?.email} <span className="line fw-bold">| </span>
          {teacher?.phone}
        </p>
      </div>

      <Link
        to={`/teachers/${teacher.id}`}
        className="col-auto d-flex align-items-center"
      >
        <span className="link-text fw-bold">Read More</span>
        <span className="link-icon-right">
          <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </span>
      </Link>
    </li>
  );
}

export default TeachersListItem;
