import React, { Component } from "react";
import LandingView from "./views/LandingView";
import AfterLoginView from "./views/AfterLoginView";
import "./Landing.css";

class App extends Component {
  componentDidMount() {
    document.title = "Imagepeak";
  }
  state = {};
  render() {
    return (
      <>
        <AfterLoginView />
      </>
    );
  }
}

export default App;
