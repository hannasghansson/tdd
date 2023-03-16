import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import PortalModal from "../Modal/PortalModal";
import { useCourseContext } from "../Context/CourseContext";

function TeacherForm() {
  const [formData, setFormData] = useState({});

  const { addTeacher } = useCourseContext();

  //Modal
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // window.location.reload(false);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    addTeacher(formData);
  };

  const addCompetence = (e) => {
    e.preventDefault();

    const competence = "";
    // destructuring = ...
    setFormData({
      ...formData,
      competencies: [...(formData?.competencies ?? []), competence],
    });
  };

  const changeCompetence = (index, value) => {
    const newCompetencies = formData.competencies;
    newCompetencies[index] = value;
    setFormData({
      ...formData,
      competencies: newCompetencies,
    });
  };

  const removeCompetence = (indexToRemove) => {
    setFormData({
      ...formData,
      competencies: formData.competencies.filter(
        (competence, i) => i !== indexToRemove
      ),
    });
  };

  const hasCompetencies = Boolean(formData?.competencies?.length); //const hasCompetencies = !!formData?.competencies?.length -> samma sak

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form
      onSubmit={submitForm}
      className="col-12 col-md-7"
      style={{ margin: "0 auto" }}
    >
      <div className="mb-5">
        <span>Teachter</span>
        <h2>Form</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repellendus, nobis mollitia alias a commodi.
        </p>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            className="form-control"
            type="text"
            name="firstName"
            onChange={handleChange}
            ref={inputRef}
            required
          />
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            className="form-control"
            type="text"
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="form-control"
          type="text"
          name="email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          className="form-control"
          type="text"
          name="phone"
          onChange={handleChange}
          required
        />
      </div>

      {hasCompetencies && (
        <div className="pb-5">
          {formData.competencies.map((competence, i) => (
            <div key={i} className="mb-3">
              <label htmlFor="competence">Competence</label>

              <div className="d-flex justify-space-between ">
                <input
                  id="competence"
                  className="form-control"
                  type="text"
                  name="competence"
                  value={competence}
                  onChange={(e) => changeCompetence(i, e.target.value)}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeCompetence(i);
                  }}
                  className="btn m-0 p-0"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="ms-3 p-2 btn btn-danger"
                  />
                </button>
              </div>
            </div>
          ))}

          <button onClick={addCompetence} className="addBtn">
            <FontAwesomeIcon icon={faPlus} className="icon me-2" />
            <span>Add competence</span>
          </button>
        </div>
      )}
      {!hasCompetencies && (
        <div className="pb-5">
          <button onClick={addCompetence} className="addBtn">
            <FontAwesomeIcon icon={faPlus} className="icon me-2" />
            <span>Add new competence</span>
          </button>
        </div>
      )}

      <hr className="mb-5" />

      <div className="d-grid ">
        <PortalModal
          isOpen={isOpen}
          onClose={handleModalClose}
          title="Wohoo!"
          message="You have added a new teacher to W. Education. ✨"
          buttonText="OK"
        />

        <button type="submit" className="submitBtn fw-bold">
          Submit
        </button>
      </div>
    </form>
  );
}

export default TeacherForm;
