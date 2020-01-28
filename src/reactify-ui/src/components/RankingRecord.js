import React, { Component } from "react";
import Avatar from "../components/Avatar";
import Trophy from "../components/Trophy";
import otherAvatar from "../img/defaultAvatar.png";

class RankingRecord extends Component {
  render() {
    return (
      <div className="rankingRecord">
        <div className="placeCircle">1</div>
        <Trophy />
        <Avatar userAvatar={otherAvatar} userName="nobody" />
        <div className="rankingScore">1543</div>
      </div>
    );
  }
}

export default RankingRecord;
