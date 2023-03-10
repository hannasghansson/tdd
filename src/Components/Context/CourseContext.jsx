import React, { useState, useEffect } from "react";
import axios from "axios";

//Behövs egentligen inte, bara för att under för mig själv och andra
const CourseContext = React.createContext({
  teachers: [],
  courses: [],
  addCourse: (formData) => {},
  getCourseDetail: (id) => {},
  addTeachers: (formData) => {},
  getTeacherDetail: (id) => {},
});

export const Provider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  //Error setError = useState([]);

  const getTeachers = () => {
    axios.get("http://localhost:3010/teachers").then((data) => {
      setTeachers(data?.data);
    });
  };

  const getCourses = () => {
    axios.get("http://localhost:3010/courses").then((data) => {
      setCourses(data?.data);
    });
  };

  const getCourseDetail = (id) => {
    const course = courses.filter(
      (course) => String(course.id) === String(id)
    )?.[0];

    return course;
  };

  const getTeacherDetail = (id) => {
    const teacher = teachers.filter(
      (teacher) => String(teacher.id) === String(id)
    )?.[0];

    return teacher;
  };

  const addCourse = async (formData) => {
    await axios
      .post(`http://localhost:3010/courses`, formData)
      .then((res) => {});
    getCourses();
  };

  const addTeacher = async (formData) => {
    await axios
      .post(`http://localhost:3010/teachers`, formData)
      .then((res) => {});
    getTeachers();
  };

  useEffect(() => {
    getTeachers();
  }, []);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        addCourse,
        getCourseDetail,

        teachers,
        addTeacher,
        getTeacherDetail,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;

export function useCourseContext() {
  return React.useContext(CourseContext);
}
