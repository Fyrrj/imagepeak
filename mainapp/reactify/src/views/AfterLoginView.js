import React from "react";
import Navbtn from "../components/Navbtn";
import NotificationPanel from "../components/NotificationPanel";
import Avatar from "../components/Avatar";
import Logout from "../components/Logout";
import Slider from "../components/Slider";
import Logo from "../img/logo.png";
import ImageModal from "../components/ImageModal";
import "../css/Afterlogin.css";
import NavLogo1 from "../img/album.png";
import NavLogo2 from "../img/ranking.png";
import NavLogo3 from "../img/settings.png";
import DefaultAvatar from "../img/avatar.png";
import { Link } from "react-router-dom";

const AfterLogin = props => {
  return (
    <div className="afterLoginContainer">
      <nav className="afterLoginNav">
        <div className="logoBox">
          <img src={Logo} alt="logo"></img>
          <Link to="/welcome">
            <h1>
              Image
              <span className="colorChanger">peak</span>
            </h1>
          </Link>
        </div>
        <div className="navigationBtnsBox">
          <Link to="/myalbum">
            <Navbtn buttonImg={NavLogo1} content="my album" />
          </Link>
          <Link to="/ranking">
            <Navbtn buttonImg={NavLogo2} content="ranking" />
          </Link>
          <Link to="/accout">
            <Navbtn buttonImg={NavLogo3} content="account" />
          </Link>
        </div>
        <div className="userAccountBox">
          <NotificationPanel />
          <Avatar userAvatar={DefaultAvatar} userName="Fyrr" />
          <Link to="/">
            <Logout />
          </Link>
        </div>
      </nav>
      <header>
        <Slider />
        <ImageModal />
      </header>
    </div>
  );
};

export default AfterLogin;
