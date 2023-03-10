import React from "react";
import CourseForm from "../../Components/Courses/CourseForm";

const AddCourse = () => {
  return (
    <article className="container py-5">
      <div className="text-center mb-5">
        <img
          src="https://ouch-cdn2.icons8.com/oZl0r48SvzL0dtBe9cMXwuTXbjIFMIuwZeBLmZK3-ns/rs:fit:256:162/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjA5/LzA2MzQ2ZjdkLWY2/ZTktNDg0NS04NmMx/LTRiYjg4YzhkMzA3/OC5wbmc.png"
          alt=""
          className="mb-4"
        />
        <h2 className="mb-3">Add New Course</h2>
      </div>
      <CourseForm />
    </article>
  );
};

export default AddCourse;
