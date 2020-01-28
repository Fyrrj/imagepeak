import React, { Component } from "react";
import LogoutImg from "../img/logout.png";

class Logout extends Component {
  state = {};
  render() {
    return (
      <button className="logoutBtn">
        <img src={LogoutImg} alt="logout"></img>
      </button>
    );
  }
}

export default Logout;
