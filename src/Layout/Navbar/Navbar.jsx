// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar pt-3">
//       <div className="container d-flex justify-content-between align-items-center text-uppercase ">
//         <span>
// <Link
//   to={"/"}
//   className="nav-link "
//   style={{ fontSize: "1.2rem" }}
//   id="navLink"
// >
//   W. Education
// </Link>
//         </span>

//         <ul className="list-unstyled d-flex gap-3 gap-md-5  align-items-baseline">
//           <li>
// <Link to={"/courses"} className="nav-link" id="navLink">
//   Courses
// </Link>
//           </li>
//           <li>
//             <Link to={"/teachers"} className="nav-link" id="navLink">
//               Teachers
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={"/"}
//               className="nav-link bg-white text-dark rounded p-2"
//               id="navLink"
//             >
//               Sign out
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./NavbarStyles.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBackward, faHome } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => setNav(!nav);
//   return (
//     <nav className="container py-5 d-flex justify-content-between align-items-center align-items-baseline text-uppercase">
//       <div className=" ">
//         <span
//           style={{
//             fontSize: "130%",
//             fontWeight: "800",
//           }}
//         >
//           W. Education
//         </span>
//       </div>
//       <div className={nav ? "nav-menu active" : "nav-menu"}>
//         <ul className="list-unstyled d-flex gap-3 gap-md-5  ">
//           <li>
//             <FontAwesomeIcon icon={faHome} className="me-2" />
//           </li>
//           <li>
// <Link to={"/courses"} className="nav-link" id="navLink">
//   Courses
// </Link>
//           </li>
//           <li>
// <Link to={"/teachers"} className="nav-link" id="navLink">
//   Teachers
// </Link>
//           </li>
//           <li>
// <Link to={"/teachers"} className="nav-link" id="navLink">
//   Contact
// </Link>
//           </li>
//         </ul>
//         <div
//           className="hamburger"
//           onClick={handleNav}
//           style={{ display: "none" }}
//         >
//           {!nav ? (
//             <FontAwesomeIcon icon={faHome} className="icon" />
//           ) : (
//             <FontAwesomeIcon icon={faHome} className="icon" />
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./NavbarStyles.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="navbar">
      <div className="container ">
        <div className="logo">
          <Link to="/" className="nav-link">
            <h4
              className="logo p-2 text-uppercase"
              style={{ letterSpacing: "3px" }}
            >
              W<FontAwesomeIcon icon={faBars} className="icon me-1" />
              stcoast
            </h4>
          </Link>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-link">
              <FontAwesomeIcon
                icon={faHome}
                className="icon nav-link "
                size="sm"
              />
            </Link>
          </li>
          <li>
            <Link to={"/courses"} className="nav-link" id="navLink">
              Courses
            </Link>
          </li>
          <li>
            <Link to={"/teachers"} className="nav-link" id="navLink">
              Teachers
            </Link>
          </li>

          <li>
            <Link to={"/"} className="nav-link" id="navLink">
              Contact
            </Link>
          </li>
          {/* <button>Sign in</button> */}
        </ul>
        <div className="hamburger " onClick={handleNav}>
          {!nav ? (
            <FontAwesomeIcon icon={faBars} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="icon" color="white" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
