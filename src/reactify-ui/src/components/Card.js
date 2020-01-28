import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.cardImage} className="cardImage" alt=""></img>
        <h3 className="cardH3">{this.props.cardTitle}</h3>
      </div>
    );
  }
}

export default Card;
