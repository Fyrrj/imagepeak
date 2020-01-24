import React, { Component } from "react";
import LandingView from "./views/LandingView";
import AfterLoginView from "./views/AfterLoginView";
import "../src/css/Landing.css";
import MyAlbumView from "./views/MyAlbumView";
import RankingView from "./views/RankingView";

class App extends Component {
  componentDidMount() {
    document.title = "Imagepeak";
  }
  state = {};
  render() {
    return (
      <>
        <RankingView />
      </>
    );
  }
}

export default App;
