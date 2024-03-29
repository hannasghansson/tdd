import React from "react";
import TeacherForm from "../../Components/Teachers/TeacherForm";

const AddTeacher = () => {
  return (
    <article className="container py-5">
      <h1 className="visually-hidden">Add Teacher Page</h1>
      <div className="text-center">
        <img
          src="https://ouch-cdn2.icons8.com/oZl0r48SvzL0dtBe9cMXwuTXbjIFMIuwZeBLmZK3-ns/rs:fit:256:162/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjA5/LzA2MzQ2ZjdkLWY2/ZTktNDg0NS04NmMx/LTRiYjg4YzhkMzA3/OC5wbmc.png"
          alt=""
          className="mb-4"
        />
        <h2>Add New Teacher</h2>
      </div>
      <TeacherForm />
    </article>
  );
};

export default AddTeacher;
