import React from "react";
import ModalAuthor from "../components/ModalAuthor";
import ModalMessage from "../components/ModalMessage";
import ModalScore from "../components/ModalScore";
import ThePin from "../img/pin.png";

const ImageModal = () => {
  return (
    <div className="imageModal">
      <span className="thePin">
        <img src={ThePin} alt="pin"></img>
      </span>
      <ModalAuthor />
      <ModalMessage />
      <ModalScore />
    </div>
  );
};

export default ImageModal;
