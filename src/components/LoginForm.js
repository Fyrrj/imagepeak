import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <>
        <input placeholder="Email..." className="formInput"></input>
        <input
          placeholder="Password..."
          className="formInput"
          type="password"
        ></input>
        <button className="signUpBtn">Log in</button>
      </>
    );
  }
}

export default LoginForm;
