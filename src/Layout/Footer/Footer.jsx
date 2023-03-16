import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start pt-4">
      <div className="container py-4">
        <div className="row">
          {/* <div className=" col-lg-4 col-md-12 mb-5 mb-md-0"> */}

          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <h4
              className="text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              W<FontAwesomeIcon icon={faBars} className="icon me-1" />
              stcoast
            </h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              facilis, sequi architecto placeat dolorum nesciunt. temporibus
              beatae autem sint sed vero eaque pariatur ad odit est.
            </p>
            <div className="social">
              {/* <Link to={"/*"} className="faFb me-4">
                <FontAwesomeIcon icon={faFacebook} className="icon" size="lg" />
              </Link> */}
              <Link to={"/*"}>
                <FontAwesomeIcon icon={faFacebook} className="icon" size="lg" />
              </Link>

              <Link to={"/*"}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon"
                  size="lg"
                />
              </Link>
              <Link to={"/*"}>
                <FontAwesomeIcon icon={faTwitter} className="icon" size="lg" />
              </Link>
              <Link to={"/*"}>
                <FontAwesomeIcon icon={faGoogle} className="icon" size="lg" />
              </Link>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 mb-4 mb-md-0"> */}
          <div
            className="col-12 col-md-3 mb-4 mb-md-0"
            style={{ margin: "0 auto" }}
          >
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to={"/*"}>
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="icon me-2"
                    />
                    Stockholm, Sverige
                  </p>
                </Link>
              </li>
              <li className="mb-3">
                <Link to={"/*"}>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="icon me-2" />
                    info@example.com
                  </p>
                </Link>
              </li>
              <li className="mb-3">
                <Link to={"/*"}>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="icon me-2" />+ 46
                    123 456 78
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/* 
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0"> */}

          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase  mb-4">Useful Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to={"/"}>
                  <p>Home</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link to={"/courses"}>
                  <p>Courses</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link to={"/teachers"}>
                  <p>Teacher</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
