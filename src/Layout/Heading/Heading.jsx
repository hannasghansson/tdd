import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <section className="heading mb-4">
        <h2>{this.props.heading}</h2>
        <h6 className="col-12 col-md-7 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h6>
      </section>
    );
  }
}

export default Heading;
