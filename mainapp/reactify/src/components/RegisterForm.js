import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,
    message: "",

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false
    }
  };

  messages = {
    username_incorrect:
      "The username must contain at least 4 characters and cannot contain spaces.",
    email_incorrect: "Incorrectly formatted email.",
    password_incorrect: "Password must be at least 8 characters.",
    accept_incorrect: "You must accept the terms."
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        pass: "",
        accept: false,
        message: "You have successfully registered. You can login now!",

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false
        }
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept
        }
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length >= 4 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }

    if (this.state.email.indexOf("@") !== -1 && this.state.email.length > 7) {
      email = true;
    }

    if (this.state.pass.length > 6) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && email && password && accept) {
      correct = true;
    }

    return {
      correct,
      username,
      email,
      password,
      accept
    };
  };

  render() {
    return (
      <>
        <form className="formContainer" onSubmit={this.handleSubmit} noValidate>
          {this.state.errors.username && (
            <span className="validateSpan">
              <li>{this.messages.username_incorrect}</li>
              <FontAwesomeIcon icon={faArrowDown} className="faArrowDown" />
            </span>
          )}
          <input
            type="text"
            placeholder="Username..."
            className="formInput"
            value={this.state.username}
            onChange={this.handleChange}
            id="user"
            name="username"
          ></input>
          {this.state.errors.email && (
            <span className="validateSpan">
              <li>{this.messages.email_incorrect}</li>
              <FontAwesomeIcon icon={faArrowDown} className="faArrowDown" />
            </span>
          )}
          <input
            type="email"
            placeholder="Email..."
            className="formInput"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
            name="email"
          ></input>
          {this.state.errors.pass && (
            <span className="validateSpan">
              <li>{this.messages.password_incorrect}</li>
              <FontAwesomeIcon icon={faArrowDown} className="faArrowDown" />
            </span>
          )}
          <input
            placeholder="Password..."
            className="formInput"
            type="password"
            id="password"
            name="pass"
            value={this.state.pass}
            onChange={this.handleChange}
          ></input>
          {this.state.errors.accept && (
            <span className="validateSpan">
              <li>{this.messages.accept_incorrect}</li>
              <FontAwesomeIcon icon={faArrowDown} className="faArrowDown" />
            </span>
          )}
          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            ></input>
            I accept all terms.
          </label>
          <button className="signUpBtn">Sign up</button>
          <p className="terms">
            By signing up, you agree to our <strong>Terms</strong>.
          </p>
        </form>
        {this.state.message && (
          <p className="okRegister">{this.state.message}</p>
        )}
      </>
    );
  }
}

export default RegisterForm;
