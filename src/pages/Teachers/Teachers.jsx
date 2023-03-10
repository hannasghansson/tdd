import React from "react";

import TeachersList from "../../Components/Teachers/TeachersList";
import Hero from "../../Layout/Hero/Hero";

import AddTeacher from "../../Components/Teachers/AddTeacher";

const Teachers = () => {
  return (
    <main className="container pb-5">
      <Hero
        heading="Teachers"
        text="Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Molestiae quos nesciunt
        tempora enim atque tenetur delectus rem eius magni quod natus quidem"
      />

      <AddTeacher />

      <TeachersList />
    </main>
  );
};

export default Teachers;
