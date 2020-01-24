import React, { Component } from "react";
import Avatar from "../components/Avatar";
import Trophy from "../components/Trophy";

class RankingRecord extends Component {
  render() {
    return (
      <div className="rankingRecord">
        <div className="placeCircle"></div>
        <Trophy />
        <Avatar />
      </div>
    );
  }
}

export default RankingRecord;
