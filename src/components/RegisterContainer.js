import React, { Component } from "react";
import "../Registercontainer.css";
import FormLogo from "../img/snowed-mountains.png";

class RegisterCotainer extends Component {
  state = {};
  render() {
    return (
      <aside className="registerContainer">
        <article className="signupContainer">
          <img src={FormLogo} alt="snowed mountains" className="formImg"></img>
          <p className="firstAdnotation">
            Sign up to <strong>browse</strong>, <strong>rate</strong>,{" "}
            <strong>add</strong> and <strong>climb</strong> with your photos.
          </p>
          <form className="formContainer">
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
          </form>
          <p className="terms">
            By signing up, you agree to our <strong>Terms</strong>. Learn how we
            collect, use and share your data in our{" "}
            <strong>Data Policy </strong>
            and how we use cookies and similar technology in our{" "}
            <strong>Cookies Policy</strong>.
          </p>
        </article>
        <article className="haveAnAccountContainer">
          <p className="haveAccount">
            Have an account ?{" "}
            <a href="#" className="loginHref">
              Log in
            </a>
          </p>
        </article>
      </aside>
    );
  }
}

export default RegisterCotainer;
