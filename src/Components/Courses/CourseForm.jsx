import React, { useEffect, useRef, useState } from "react";

import PortalModal from "../Modal/PortalModal";
import { useCourseContext } from "../Context/CourseContext";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: " ",
  });

  const { addCourse } = useCourseContext();

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
    // window.location.reload(false)
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    addCourse(formData);
  };

  const formatYYYYMMDD = (date) => {
    if (!date) return "";
    const appendZero = (num) => (String(num).length > 1 ? "" : `0${num}`);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${appendZero(month)}-${appendZero(day)}`;
  };

  const getMinEndDate = () => {
    // guard clause
    if (!formData?.startDate) return "";

    const { startDate } = formData;
    const startDateUnixTimestamp = new Date(startDate).getTime();
    // ms * s * minute * hour
    const inOneDay = 1000 * 60 * 60 * 24;
    const tomorrow = new Date(startDateUnixTimestamp + inOneDay);

    return tomorrow;
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    // <form
    //   onSubmit={submitForm}
    //   className="col-12 col-md-8 offset-md-2 mb-5 p-5 rounded"
    //   style={{ background: "#fefefe", color: "#010307" }}
    // >
    //   <h2>Form</h2>
    //   <p className="text-muted">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    //     repellendus, nobis mollitia alias a commodi.
    //   </p>
    //   <div className="col-12 mb-3">
    //     <label htmlFor="title">Title</label>
    //     <input
    //       id="title"
    //       className="form-control"
    //       type="text"
    //       name="title"
    //       onChange={handleChange}
    //       ref={inputRef}
    //       style={{ background: "#f2f2f2", color: "#1e1e1e" }}
    //       required
    //     />
    //   </div>

    //   <div className="col-12 mb-3">
    //     <label htmlFor="category">Category</label>
    //     <input
    //       id="category"
    //       className="form-control"
    //       type="text"
    //       name="category"
    //       onChange={handleChange}
    //       style={{ background: "#f2f2f2", color: "#1e1e1e" }}
    //       required
    //     />
    //   </div>
    //   <div className="row">
    //     <div className="col-12 col-md-6 mb-3">
    //       <label htmlFor="startDate">Course Start Date</label>
    //       <input
    //         id="startDate"
    //         className="form-control"
    //         type="date"
    //         min={formatYYYYMMDD(new Date())}
    //         name="startDate"
    //         onChange={handleChange}
    //         style={{ background: "#f2f2f2", color: "#1e1e1e" }}
    //         required
    //       />
    //     </div>

    //     <div className="col-12 col-md-6 mb-3">
    //       <label htmlFor="endDate">Course End Date</label>
    //       <input
    //         id="endDate"
    //         className="form-control"
    //         min={formatYYYYMMDD(getMinEndDate())}
    //         type="date"
    //         name="endDate"
    //         onChange={handleChange}
    //         style={{ background: "#f2f2f2", color: "#1e1e1e" }}
    //         required
    //       />
    //     </div>
    //   </div>
    //   <div className="col-12 pb-5">
    //     <label htmlFor="">Description</label>
    //     <textarea
    //       id="description"
    //       className="form-control"
    //       type="text"
    //       name="description"
    //       onChange={handleChange}
    //       style={{ background: "#f2f2f2", color: "#1e1e1e" }}
    //       required
    //     />
    //   </div>

    //   <hr />

    //   <div className="d-grid">
    //     <PortalModal
    //       isOpen={isOpen}
    //       onClose={handleModalClose}
    //       title="Wohoo!"
    //       message="You have added a new course to W. Education. ✨"
    //       buttonText="OK"
    //     />

    //     <button type="submit" className="submitBtn">
    //       Add new course
    //     </button>
    //   </div>
    // </form>

    <form
      onSubmit={submitForm}
      className="col-12 col-md-8 offset-md-2 mb-4 p-5"
    >
      <div className="mb-5">
        <span>Course</span>
        <h2>Form</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repellendus, nobis mollitia alias a commodi.
        </p>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="form-control"
            type="text"
            name="title"
            onChange={handleChange}
            ref={inputRef}
            required
          />
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            className="form-control"
            type="category"
            name="category"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="startDate">Course Start Date</label>
        <input
          id="startDate"
          className="form-control"
          type="date"
          min={formatYYYYMMDD(new Date())}
          name="startDate"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="endDate">Course End Date</label>
        <input
          id="endDate"
          className="form-control"
          min={formatYYYYMMDD(getMinEndDate())}
          type="date"
          name="endDate"
          onChange={handleChange}
          required
        />
      </div>

      <div className="pb-5">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          style={{ background: "#1c1c1d", color: "#f3f8fa", border: "#1c1c1d" }}
          type="description"
          name="description"
          onChange={handleChange}
          required
        />
      </div>

      <hr className="mb-5" />

      <div className="d-grid">
        <PortalModal
          isOpen={isOpen}
          onClose={handleModalClose}
          title="Wohoo!"
          message="You have added a new course to W. Education. ✨"
          buttonText="OK"
        />

        <button type="submit" className="submitBtn fw-bold">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
