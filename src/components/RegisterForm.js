import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <>
        <input placeholder="Username..." className="formInput"></input>
        <input placeholder="Email..." className="formInput"></input>
        <input
          placeholder="Password..."
          className="formInput"
          type="password"
        ></input>
        <input
          placeholder="Repeat password..."
          className="formInput"
          type="password"
        ></input>
        <button className="signUpBtn">Sign up</button>
      </>
    );
  }
}

export default RegisterForm;
