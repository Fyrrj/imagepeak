import React, { Component } from "react";
import Bell from "../img/bell.png";
class NotificationPanel extends Component {
  state = {
    notificationCount: 0
  };
  render() {
    return (
      <div className="notificationContainer">
        <img src={Bell} alt="bell"></img>
        <div className="circleNotification">{this.state.notificationCount}</div>
      </div>
    );
  }
}

export default NotificationPanel;
