import React from "react";
import Navbtn from "../components/Navbtn";
import NotificationPanel from "../components/NotificationPanel";
import Avatar from "../components/Avatar";
import Logout from "../components/Logout";
import Ranking from "../components/Ranking";
import Logo from "../img/logo.png";
import "../css/Rankingview.css";
import NavLogo1 from "../img/album.png";
import NavLogo2 from "../img/ranking.png";
import NavLogo3 from "../img/settings.png";
import DefaultAvatar from "../img/avatar.png";

const RankingView = props => {
  return (
    <div className="rankingViewContainer">
      <nav className="afterLoginNav">
        <div className="logoBox">
          <img src={Logo} alt="logo"></img>
          <h1>
            Image
            <span className="colorChanger">peak</span>
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
        <Ranking />
      </header>
    </div>
  );
};

export default RankingView;
