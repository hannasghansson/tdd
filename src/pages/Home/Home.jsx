import React from "react";
import { Link } from "react-router-dom";
import Work from "../../Components/Home/Work";

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
  );
};

export default home;
