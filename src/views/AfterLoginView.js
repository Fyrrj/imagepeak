import React from "react";
import Navbtn from "../components/Navbtn";
import NotificationPanel from "../components/NotificationPanel";
import Avatar from "../components/Avatar";
import Logout from "../components/Logout";
import Slider from "../components/Slider";
import Logo from "../img/logo.png";
import ImageModal from "../components/ImageModal";
import "../Afterlogin.css";
import NavLogo1 from "../img/album.png";
import NavLogo2 from "../img/ranking.png";
import NavLogo3 from "../img/settings.png";
import DefaultAvatar from "../img/avatar.png";

const AfterLogin = props => {
  return (
    <div className="afterLoginContainer">
      <nav>
        <div className="logoBox">
          <img src={Logo} alt="logo"></img>
          <h1>
            Image<span className="colorChanger">peak</span>
          </h1>
        </div>
        <div className="navigationBtnsBox">
          <Navbtn buttonImg={NavLogo1} content="my album" />
          <Navbtn buttonImg={NavLogo2} content="ranking" />
          <Navbtn buttonImg={NavLogo3} content="account" />
        </div>
        <div className="userAccountBox">
          <NotificationPanel />
          <Avatar userAvatar={DefaultAvatar} userName="Fyrr" />
          <Logout />
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
