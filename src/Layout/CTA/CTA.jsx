import React, { Component } from "react";
import { Link } from "react-router-dom";

class CTA extends Component {
  render() {
    return (
      <article className="container py-5 CTA">
        <div
          className="row justify-content-center p-5 rounded m-3"
          style={{ background: "#282b30" }}
        >
          <div className="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center">
            <img
              src={this.props.src}
              alt={this.props.alt}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <span
              className="mb-0"
              style={{
                fontWeight: "300",
                fontSize: "1.5rem",
              }}
            >
              {this.props.span}
            </span>
            <h1
              className="mt-0"
              style={{
                fontWeight: "800",
                fontSize: "3rem",
              }}
            >
              {this.props.heading}
            </h1>
            <p className="py-3 text-muted ">{this.props.text}</p>
            <div>
              <Link
                to={"/addCourse"}
                className="btn text-uppercase "
                style={{
                  color: "#282b30",
                  width: "35%",
                  padding: "7px",
                  borderRadius: "1.5rem",
                  backgroundImage:
                    "linear-gradient(to right,#04ac9c,#46dc9e,#46dc9e,#04ac9c)",
                }}
              >
                CTA Link!
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default CTA;
