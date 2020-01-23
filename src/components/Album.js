import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import photo4 from "../img/photo4.jpg";
import photo5 from "../img/photo5.jpg";
import photo6 from "../img/photo6.jpg";
import photo7 from "../img/photo7.jpg";
import photo8 from "../img/photo8.jpg";
import photo9 from "../img/photo9.jpg";

class Album extends Component {
  render() {
    return (
      <div className="albumBox">
        <div className="addPictureArea">
          <button className="addBtn">
            <FontAwesomeIcon icon={faPlusSquare} className="faAddIcon" />
            add new photo
          </button>
        </div>
        <div className="picturesContainer">
          <div className="picturesColumn">
            <img src={photo1} alt="album"></img>
            <img src={photo2} alt="album"></img>
            <img src={photo3} alt="album"></img>
          </div>
          <div className="picturesColumn">
            <img src={photo4} alt="album"></img>
            <img src={photo5} alt="album"></img>
            <img src={photo6} alt="album"></img>
          </div>
          <div className="picturesColumn">
            <img src={photo7} alt="album"></img>
            <img src={photo8} alt="album"></img>
            <img src={photo9} alt="album"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
