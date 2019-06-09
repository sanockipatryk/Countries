import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Continent from "./Components/Continent";
import Country from "./Components/Country";
import Countries from "./Containers/Countries";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/continents/:name" component={Continent} />
            <Route exact path="/countries/:name" component={Country} />
            <Route exact path="/countries/" component={Countries} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
