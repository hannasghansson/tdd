import React from "react";
// import Header from "../../Layout/Header/Header";
// import Heading from "../../Layout/Heading/Heading";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Work from "../../Components/Home/Work";

import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import HomeCard from "../../Components/Home/HomeCard";
import Sandbox from "../Sandbox";
import Values from "../../Components/Home/Values";

const home = ({ data }) => {
  console.log(data);
  return (
    <div className="container py-5 text-center">
      <div className="row g-2">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="display-4">Heading</h1>
          <p className="lead fw-light mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempora quibusdam hic id assumenda , accusamus commodi reprehenderit
            voluptate.
          </p>

          <div className="row pb-5">
            <div className="col-12 col-md-6 mb-3">
              <div className="btn-link col w-100">
                <Link to={"/courses"}>View our Courses</Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="btn-link col w-100">
                <Link to={"/teachers"}>View our Teachers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeCard />
      <Values />
      <Sandbox />
      <Work />
    </div>

    //        <section className="container py-5 text-center">

    //
    //     </section>
  );
};

export default home;

// Gamla
// <div className="row g-2 pb-5">
//   <div className="col-lg-6 col-md-8 mx-auto">
//     <h1 className="display-4">Heading</h1>
//     <p className="lead fw-light mb-5">
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
//       tempora quibusdam hic id assumenda , accusamus commodi reprehenderit
//       voluptate.
//     </p>

//     <div className="row pb-5">
//       <div className="col-12 col-md-6 mb-3">
//         <button className="btn-link col w-100">
//           <Link to={"/courses"}>View our Courses</Link>
//         </button>
//       </div>
//       <div className="col-12 col-md-6">
//         <button className="btn-link col w-100">
//           <Link to={"/teachers"}>View our Teachers</Link>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

// const home = ({ data }) => {
//   console.log(data);
//   return (
// <main className="container py-4">
//   <Header />

//   <section>
//     <Heading heading="Our Values" />
//     <Slider />
//   </section>
// </main>

// <div class="main container">
//   <div class="widget">
//     <div class="widget-container buttons">
//       <div class="container for-presentation pb-5">
//         1.
//         <button class="btn btn-primary">
//           <span class="btn-label">Primary</span>
//         </button>
//         <button class="btn btn-secondary">
//           <span class="btn-label">Secondary</span>
//         </button>
//         <button class="btn">
//           <span class="btn-label">Generic</span>
//         </button>
//       </div>

//       <div class="container for-presentation pb-5">
//         4.
//         <button class="btn btn-primary">
//           <span class="icon material-icons">account_box</span>
//           <span class="btn-label">Icon Left</span>
//         </button>
//         <button class="btn btn-primary btn-icon-right">
//           <span class="icon material-icons">account_box</span>
//           <span class="btn-label">Icon Right</span>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// <button type="button">
//   <span className="btn-icon">
//     <FontAwesomeIcon icon={faChevronLeft} className="icon" />
//   </span>
//   <span className="btn-text">Left</span>
// </button>

// <hr />

// <button type="button">
//   <span className="btn-text">Right</span>
//   <span className="btn-icon">
//     <FontAwesomeIcon icon={faChevronRight} className="icon" />
//   </span>
// </button>

// <hr />

// Add New btn Link
// <button className="btn-link px-4">
//   <Link to={"/AddCourses"}>Register Courses</Link>
// </button>

// <button className="btn-link px-4">
//   <Link to={"/AddTeacher"}>Add Teacher</Link>
// </button>
// Add New btn Link + icon
// <button type="button">
//   <Link to={"/AddTeacher"}>
//     <span className="btn-icon-left">
//       <FontAwesomeIcon icon={faPlus} className="icon" />
//     </span>
//     <span className="btn-text">Add new teacher</span>
//   </Link>
// </button>

// <button type="button">
//   <Link to={"/AddTeacher"}>
//     <span className="btn-icon-left">
//       <FontAwesomeIcon icon={faPlus} className="icon" />
//     </span>
//     <span className="btn-text">Add new teacher</span>
//   </Link>
// </button>
// Add new button + Icons
// <button type="button">
//   <span className="btn-icon">
//     <FontAwesomeIcon icon={faPlus} className="icon" />
//   </span>
//   <span className="btn-text">Register new teacher</span>
// </button>

// <button type="button">
//   <span className="btn-icon">
//     <FontAwesomeIcon icon={faPlus} className="icon" />
//   </span>
//   <span className="btn-text">Register new course</span>
// </button>

// <hr />
// Add new button
// <button type="button">
//   <span className="btn-text">Register new teacher</span>
// </button>

// <button type="button">
//   <span className="btn-text">Register new course</span>
// </button>

// <hr />

// <button type="button" className="btn-submit">
//   <span className="btn-icon">
//     <FontAwesomeIcon icon={faPlus} className="icon" />
//   </span>
//   <span className="btn-text">Submit</span>
// </button>

// <hr />
// <button type="button">
//   <Link to={"/AddTeacher"}>
//     <span className="btn-text">Add new teacher</span>
//     <span className="btn-icon-right">
//       <FontAwesomeIcon icon={faChevronRight} className="icon" />
//     </span>
//   </Link>
// </button>

// <button type="button">
//   <Link to={"/AddTeacher"}>
//     <span className="btn-text">Add new teacher</span>
//     <span className="btn-icon-right">
//       <FontAwesomeIcon icon={faChevronRight} className="icon" />
//     </span>
//   </Link>
// </button>

// <button type="button">
//   <Link to={"/AddTeacher"}>
//     <span className="btn-icon-left">
//       <FontAwesomeIcon icon={faPlus} className="icon" />
//     </span>
//     <span className="btn-text">Add new teacher</span>
//   </Link>
// </button>
