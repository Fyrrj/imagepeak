import React, { Component } from "react";
class Avatar extends Component {
  state = {};
  render() {
    return (
      <div className="avatarBox">
        <img src={this.props.userAvatar} alt="avatar"></img>
        <p className="welcomeMsg">{this.props.userName}</p>
      </div>
    );
  }
}

export default Avatar;
