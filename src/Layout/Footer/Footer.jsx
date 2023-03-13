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
        <div className="row  ">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h4
              className="text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              W<FontAwesomeIcon icon={faBars} className="icon me-1" />
              stcoast
            </h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              facilis, sequi architecto placeat dolorum nesciunt. temporibus
              beatae autem sint sed vero eaque pariatur ad odit est.
            </p>
            <div>
              <Link to={"/*"} className="faFb me-4">
                <FontAwesomeIcon icon={faFacebook} className="icon" size="lg" />
              </Link>
              <Link to={"/*"} className="faIg me-4">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon"
                  size="lg"
                />
              </Link>
              <Link to={"/*"} className="faTw me-4">
                <FontAwesomeIcon icon={faTwitter} className="icon" size="lg" />
              </Link>
              <Link to={"/*"} className="faGo me-4">
                <FontAwesomeIcon icon={faGoogle} className="icon" size="lg" />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 ms-3">Contact</h5>

            <ul className="fa-ul">
              <li className="mb-3">
                <span className="fa-li">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                </span>
                <p className="ms-2">Stockholm, Sverige</p>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </span>
                <p className="ms-2">info@example.com</p>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </span>
                <p className="ms-2">+ 46 123 456 78</p>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
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
