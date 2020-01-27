import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../css/Registercontainer.css";
import FormLogo from "../img/snowed-mountains.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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
          <Router>
            <Switch>
              <Route path="/" exact component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
            </Switch>
          </Router>
        </article>
        <article className="haveAnAccountContainer">
          <p className="haveAccount">
            <FontAwesomeIcon icon={faSnowflake} className="snowFlakeIco" />
            Have an account ?
          </p>
          <Link to="/login">
            <p className="loginHref">Log in</p>
          </Link>
        </article>
      </aside>
    );
  }
}

export default RegisterCotainer;
