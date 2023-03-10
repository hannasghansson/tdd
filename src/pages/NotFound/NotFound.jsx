import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="py-5"
      // style={{
      //   backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)",
      // }}
    >
      <div className="d-flex align-items-center justify-content-center py-5">
        <div className="border my-5 p-5">
          <div className="text-center">
            <span className="">Whoops!</span>
            <h1 className="display-1 fw-bold">404 Error</h1>

            <p className="mb-5">The page you’re looking for doesn’t exist.</p>

            <button
              className="btn btn-dark"
              style={{
                padding: "7px 15px 7px 15px",
                borderRadius: "1.5rem",
                backgroundImage:
                  "linear-gradient(to right,#04ac9c,#46dc9e,#46dc9e,#04ac9c)",
              }}
            >
              <Link to={"/"}>Return Home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
