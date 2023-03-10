// import React from "react";

// import { useCourseContext } from "../Context/CourseContext";
// import TeachersListItem from "./TeachersListItem";
// import Heading from "../../Layout/Heading/Heading";

// function TeachersList() {
//   const { teachers } = useCourseContext();

//   return (
//     <section className="my-5">
//       <Heading span="Westcoast Education" heading="Our Teachers" />

//       <ul className="list-unstyled">
//         {teachers.map((teacher, id) => {
//           return <TeachersListItem key={id} teacher={teacher} />;
//         })}
//       </ul>
//     </section>
//   );
// }

// export default TeachersList;

import React from "react";

import { useCourseContext } from "../Context/CourseContext";
import TeachersListItem from "./TeachersListItem";
import Heading from "../../Layout/Heading/Heading";

function TeachersList() {
  const { teachers } = useCourseContext();

  return (
    <article data-testid="teacher-list-component" className="py-5">
      <h1 className="visually-hidden">Teachers List</h1>

      <Heading span="Westcoast Education" heading="Our Teachers" />

      <ul className="list-group list-unstyled">
        {teachers.map((teacher, id) => {
          return <TeachersListItem key={id} teacher={teacher} />;
        })}
      </ul>
    </article>
  );
}

export default TeachersList;
