import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const RemoveTeacher = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new FormData(event.currentTarget).get("id");

    fetch(`http://localhost:3010/teachers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(console.log);
  };

  return (
    <form onSubmit={handleSubmit} className="row  p-4">
      <h2>Remove Teacher</h2>

      <div className="col-auto">
        <label className="col-form-label">Teacher ID</label>
      </div>
      <div className="col">
        <input type="number" name="id" className="form-control" />
      </div>
      <div className="col">
        <button type="submit" className="">
          <FontAwesomeIcon icon={faTrashCan} className="ms-1" />
        </button>
      </div>
    </form>
  );
};
