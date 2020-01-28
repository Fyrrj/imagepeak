import React, { Component } from "react";
class ModalMessage extends Component {
  state = {
    userMessage: '"Tyle śniegu tylko na moim podwórku"'
  };
  render() {
    return (
      <div className="messageBox">
        <p className="userMsg">{this.state.userMessage}</p>
      </div>
    );
  }
}

export default ModalMessage;
