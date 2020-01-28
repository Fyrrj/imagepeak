import React from "react";
import InfoContainer from "../components/InfoContainer";
import Cloud from "../img/cloud.png";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../css/Registercontainer.css";
import FormLogo from "../img/snowed-mountains.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingLoginView = () => {
  return (
    <main className="mainAppContainer">
      <img src={Cloud} alt="cloud" className="cloud"></img>
      <InfoContainer />
      <aside className="landingLoginView registerContainer">
        <article className="signupContainer">
          <img src={FormLogo} alt="snowed mountains" className="formImg"></img>
          <p className="firstAdnotation">
            Sign in to <strong>browse</strong>, <strong>rate</strong>,{" "}
            <strong>add</strong> and <strong>climb</strong> with your photos.
          </p>
          <Router>
            <Switch>
              <Route path="/" exact component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
            </Switch>
          </Router>
        </article>
        <article className="landingLoginView haveAnAccountContainer">
          <p className="haveAccount">
            <FontAwesomeIcon icon={faSnowflake} className="snowFlakeIco" />
            New here ?
          </p>
          <Link to="/">
            <p className="loginHref">Sign up</p>
          </Link>
        </article>
      </aside>
    </main>
  );
};

export default LandingLoginView;
