import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const continents = ["Africa", "Asia", "Americas", "Europe", "Oceania"];

const continentLinks = continents.map(continent => (
  <NavLink
    className="dropdown-item"
    activeClassName="selected"
    key={continent}
    to={`/continents/${continent}`}
  >
    {continent}
  </NavLink>
));

class NavBar extends Component {
  state = {
    burger: false
  };

  handleBurger = () => {
    this.setState(prevState => {
      return {
        burger: !prevState.burger
      };
    });
  };
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item subtitle is-5">
            Countries
          </Link>

          <button
            className={`navbar-burger ${this.state.burger ? "isActive" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.handleBurger}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        {this.state.burger ? (
          <div className="dropdown-content">{continentLinks}</div>
        ) : null}
      </nav>
    );
  }
}

export default NavBar;
