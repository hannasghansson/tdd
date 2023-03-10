import React from "react";

import Hero from "../../Layout/Hero/Hero";
import CourseList from "../../Components/Courses/CourseList";

import AddCourse from "../../Components/Courses/AddCourse";

const Courses = () => {
  return (
    <main>
      <Hero
        heading="Courses"
        text="Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Molestiae quos nesciunt
        tempora enim atque tenetur delectus rem eius magni quod natus quidem"
      />

      <AddCourse />

      <CourseList />
    </main>
  );
};

export default Courses;
