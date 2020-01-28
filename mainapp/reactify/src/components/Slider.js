import React from "react";
import RateBtn from "../components/RateBtn.js";
import StaticImg from "../img/staticimg.jpg";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Slider = props => {
  return (
    <div className="sliderContent">
      <div className="sliderImgBox">
        <img src={StaticImg} alt="user load"></img>
      </div>
      <div className="rateBar">
        <RateBtn faIcon={faThumbsUp} />
        <RateBtn faIcon={faAngleDoubleRight} />
      </div>
    </div>
  );
};

export default Slider;
