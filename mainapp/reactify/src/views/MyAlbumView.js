import React from "react";
import Navbtn from "../components/Navbtn";
import NotificationPanel from "../components/NotificationPanel";
import Avatar from "../components/Avatar";
import Logout from "../components/Logout";
import Logo from "../img/logo.png";
import "../css/Myalbum.css";
import NavLogo1 from "../img/album.png";
import NavLogo2 from "../img/ranking.png";
import NavLogo3 from "../img/settings.png";
import DefaultAvatar from "../img/avatar.png";
import Album from "../components/Album";
import { Link } from "react-router-dom";

const MyAlbumView = props => {
  return (
    <div className="myAlbumContainer">
      <nav>
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
          <Link to="account">
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
        <Album />
      </header>
    </div>
  );
};

export default MyAlbumView;
