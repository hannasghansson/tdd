import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container row my-5" style={{}}>
      <div className="col-12 col-md-4 py-5 me-5">
        <img
          src="https://ouch-cdn2.icons8.com/XRr7zDGQYhRg46HGCjiSAcLvIrebKMf_kmk0wxso5lA/rs:fit:512:445/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzkw/LzllNmVlMGIzLTQ0/MzEtNGMzMC1iYjM0/LTdmZWE1NTMwYzNk/My5wbmc.png"
          alt=""
          className="img-fluid "
        />
      </div>
      <div className="col-12 col-md-7 py-5 ms-4">
        <span
          style={{
            fontWeight: "300",
            fontSize: "1.5rem",
          }}
        >
          Welcome to
        </span>
        <h1
          style={{
            fontWeight: "800",
            fontSize: "3rem",
          }}
        >
          Westcoast Education
        </h1>

        <p className="text-muted mb-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          accusantium aliquid nihil accusamus aliquam fuga adipisci sunt quasi
          magnam. Reiciendis, facilis quibusdam distinctio hic incidunt quisquam
          voluptatibus!
        </p>
        <button className="btn btn-dark btn-lg me-3 ">
          <Link to={`/teachers`}>Teachers</Link>
        </button>

        <button className="btn btn-dark btn btn-dark btn-lg">
          <Link to={`/courses`}>Courses</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
