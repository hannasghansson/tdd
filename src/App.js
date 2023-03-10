import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Courses from "./pages/Courses/Courses";
import AddCourse from "./pages/Courses/AddCourse";
import CourseDetail from "./pages/Courses/CourseDetail";

import Teachers from "./pages/Teachers/Teachers";
import AddTeacher from "./pages/Teachers/AddTeacher";
import TeacherDetail from "./pages/Teachers/TeacherDetail";

import { Provider } from "./Components/Context/CourseContext";

import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout component={Home} />} />

          <Route path="/courses" element={<Layout component={Courses} />} />
          <Route path="/addCourse" element={<Layout component={AddCourse} />} />
          <Route
            path="/courses/:id"
            element={<Layout component={CourseDetail} />}
          />

          <Route path="/teachers" element={<Layout component={Teachers} />} />
          <Route
            path="/AddTeacher"
            element={<Layout component={AddTeacher} />}
          />
          <Route
            path="/teachers/:id"
            element={<Layout component={TeacherDetail} />}
          />

          <Route path="*" element={<Layout component={NotFound} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
