import React from "react";
import CourseForm from "../../Components/Courses/CourseForm";

const AddCourse = () => {
  return (
    <article className="container py-5">
      <h1 className="visually-hidden">Add course page</h1>
      <div className="text-center">
        <img
          src="https://ouch-cdn2.icons8.com/75WaVb9Z4AiB0WqegXj1feOa3kbXHl9UTcQC8_0DOiE/rs:fit:256:208/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTAw/LzQzYmY2NDUyLTVk/YjctNGU4OS04NDIw/LTc4NzY2ODU4YWU5/MC5wbmc.png"
          alt=""
          className="mb-5"
        />
        <h2>Add New Course</h2>
      </div>
      <CourseForm />
    </article>
  );
};

export default AddCourse;
