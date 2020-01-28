import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RateBtn extends Component {
  state = {};
  render() {
    return (
      <button className="rateBtn">
        <FontAwesomeIcon icon={this.props.faIcon} className="faRateIcon" />
      </button>
    );
  }
}

export default RateBtn;
