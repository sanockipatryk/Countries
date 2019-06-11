import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Continent from "./Components/Continent";
import NavBar from "./Components/NavBar";
import Country from "./Components/Country";
import Countries from "./Containers/Countries";
import "./styles/App.css";
import { fetchCountries } from "./Actions/countryActions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestRobots: () => dispatch(fetchCountries())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
