import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import Heading from "../../Layout/Heading/Heading";

export const RemoveCourse = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new FormData(event.currentTarget).get("id");

    fetch(`http://localhost:3010/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(console.log);
  };

  return (
    <form onSubmit={handleSubmit} className="remove container py-5">
      <div className="">
        <Heading heading="Remove Course" />
        <div className="row g-3">
          <div className="col-auto">
            <label className="col-form-label fw-bold">Courses ID</label>
          </div>
          <div className="col-auto rounded">
            <input className="form-control" />
          </div>
          <div className="col-auto rounded">
            <button type="submit" className="icon mb-3">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
