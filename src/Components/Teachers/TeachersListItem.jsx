import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TeachersListItem({ teacher }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handletoggle = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <li
      onClick={handletoggle}
      key={teacher?.id}
      className="row  mb-4 p-4"
      id="teacherlist"
    >
      <div className="col">
        <h5 className="">
          {teacher?.firstName} {teacher?.lastName}
        </h5>
        <p className="mb-0">
          {teacher?.email} | {teacher?.phone}
        </p>
      </div>

      <button className="col-auto d-flex align-items-center readMoreBtn">
        <Link to={`/teachers/${teacher.id}`}>Read More</Link>
      </button>
    </li>
  );
}

export default TeachersListItem;
