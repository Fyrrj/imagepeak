import React from "react";
import Card from "../components/Card";
import Logo from "../img/logo.png";
import BrowseCardLogo from "../img/photos.png";
import RateCardLogo from "../img/like.png";
import AddCardLogo from "../img/camera.png";
import ClimbCardLogo from "../img/podium.png";
import mountainBgc from "../img/mountain.svg";
import "../css/Infocontainer.css";
import { Link } from "react-router-dom";

const InfoContainer = props => {
  return (
    <header className="leftContainer">
      <img
        src={mountainBgc}
        className="infoContainerBgc"
        alt="background"
      ></img>
      <section className="siteNameSection">
        <img src={Logo} alt="logo" className="mainLogo"></img>
        <Link to="/">
          <h1>
            Image<span className="colorChanger">peak</span>
          </h1>
          <h2>Mountain of photos</h2>
        </Link>
      </section>
      <section className="cardsAboutSiteSection">
        <Card cardTitle="browse" cardImage={BrowseCardLogo} />
        <Card cardTitle="rate" cardImage={RateCardLogo} />
        <Card cardTitle="add" cardImage={AddCardLogo} />
        <Card cardTitle="climb" cardImage={ClimbCardLogo} />
      </section>
    </header>
  );
};

export default InfoContainer;
