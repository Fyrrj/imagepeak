import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <>
        <form className="formContainer loginFormContainer">
          <input placeholder="Email..." className="formInput"></input>
          <input
            placeholder="Password..."
            className="formInput"
            type="password"
          ></input>
          <button className="signUpBtn">Log in</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
