import React, { Component } from "react";

class Album extends Component {
  render() {
    return (
      <div className="albumBox">
        <button className="addBtn">add new photo</button>
        <div className="picturesContainer">
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
          <img className="albumPicture" alt="album"></img>
        </div>
      </div>
    );
  }
}

export default Album;
