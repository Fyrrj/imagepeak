import React, { Component } from "react";
import Cup from "../img/cup.png";
class ModalScore extends Component {
  state = {
    hashtagInfo: "#Winter",
    userScore: 2035
  };
  render() {
    return (
      <>
        <div className="hashtagBox">
          <p>{this.state.hashtagInfo}</p>
          <div className="scoreBox">
            <img src={Cup} alt="cup score"></img>
            <p className="scoreInfo">{this.state.userScore}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ModalScore;
