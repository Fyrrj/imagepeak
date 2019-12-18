import React, { Component } from "react";
import InfoContainer from "./components/InfoContainer";
import RegisterContainer from "./components/RegisterContainer";
import Cloud from "./img/cloud.png";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="mainAppContainer">
        <img src={Cloud} alt="cloud" className="cloud"></img>
        <InfoContainer />
        <RegisterContainer />
      </main>
    );
  }
}

export default App;
