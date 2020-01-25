import React, { Component } from "react";
import LandingView from "./views/LandingView";
import AfterLoginView from "./views/AfterLoginView";
import "../src/css/Landing.css";
import MyAlbumView from "./views/MyAlbumView";
import RankingView from "./views/RankingView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingLoginView from "./views/LandingLoginView";

class App extends Component {
  componentDidMount() {
    document.title = "Imagepeak";
  }
  render() {
    return (
      <Router>
        <Switch>
          <>
            <Route path="/" exact component={LandingView} />
            <Route path="/login" component={LandingLoginView} />
            <Route path="/welcome" component={AfterLoginView} />
            <Route path="/myalbum" component={MyAlbumView} />
            <Route path="/ranking" component={RankingView} />
          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
