import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section id="errorPage" className="container py-5">
      <div className="col-12 col-md-6" style={{ margin: "0 auto" }}>
        <div className="text-center pb-5">
          <img
            src="https://ouch-cdn2.icons8.com/UPKGYdD7V5lClu3f_kEKh8KQ4SE1rIaOnUpLtiOt-zo/rs:fit:256:237/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjE2/LzBjYjhlNTBlLWY1/NDQtNDUwYy1hNDVm/LTIyNjA0Yjc1MDEy/My5wbmc.png"
            alt="error images"
            className="mb-5"
          />
          <div className="card p-4 my-5">
            <span className="">Whoops!</span>
            <h1 className="display-1 fw-bold">404 Error</h1>
            <p>The page you’re looking for doesn’t exist.</p>
          </div>

          <button id="error-btn" className="fw-bold w-100 mb-5">
            <Link to={"/"}>Return Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
