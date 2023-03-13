import React from "react";
import Header from "../../Layout/Header/Header";

import Heading from "../../Layout/Heading/Heading";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaintBrush,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Work from "../../Components/Home/Work";

import homeCard from "./components/homeCard";

const home = ({ data }) => {
  console.log(data);
  return (
    // <section className="container py-5 text-center">
    //   <div className="row g-2 pb-5">
    //     <div className="col-lg-6 col-md-8 mx-auto">
    //       <h1 className="display-4">Heading</h1>
    //       <p className="lead fw-light mb-5">
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
    //         tempora quibusdam hic id assumenda , accusamus commodi reprehenderit
    //         voluptate.
    //       </p>

    //       <div className="row pb-5">
    //         <div className="col-12 col-md-6 ">
    //           <button className="col w-100">
    //             <Link to={"/courses"}>View our Courses</Link>
    //           </button>
    //         </div>
    //         <div className="col-12 col-md-6">
    //           <button className="col w-100">
    //             <Link to={"/teachers"}>View our Teachers</Link>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <Work />
    // </section>

    <homeCard />
  );
};

export default home;

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
