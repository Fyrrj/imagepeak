import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

class Trophy extends Component {
  render() {
    return (
      <div className="trophyBox">
        <FontAwesomeIcon icon={faTrophy} className="faTrophyIcon" />
      </div>
    );
  }
}

export default Trophy;
