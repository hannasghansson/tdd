import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <article className="contianer   text-center  col-10 offset-1 col-lg-8 offset-lg-2">
        <h1 className="display-4">{this.props.heading}</h1>
        <p className="lead fw-light mb-5 text-muted">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          tempora quibusdam hic id assumenda , accusamus commodi reprehenderit
          voluptate.
        </p>
      </article>
    );
  }
}

export default Hero;
