import React, { Component } from "react";

class Navbtn extends Component {
  state = {};
  render() {
    return (
      <button className="navBtn">
        <img src={this.props.buttonImg} alt="navigation button"></img>
        <p>{this.props.content}</p>
      </button>
    );
  }
}

export default Navbtn;
