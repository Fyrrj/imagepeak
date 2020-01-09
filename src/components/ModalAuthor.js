import React, { Component } from "react";
import DefaultAvatar from "../img/avatar.png";

class ModalAuthor extends Component {
  state = {
    msgPastTime: 4,
    anotherUserName: "Matheview",
    anotherUserAvatar: DefaultAvatar
  };
  render() {
    return (
      <>
        <div className="authorInfo">
          <div className="anotherUserAvatar">
            <img src={this.state.anotherUserAvatar} alt="avatar"></img>
            <h2 className="userNameInfo">{this.state.anotherUserName}</h2>
            <p className="msgTime">{this.state.msgPastTime}min</p>
          </div>
        </div>
      </>
    );
  }
}

export default ModalAuthor;
