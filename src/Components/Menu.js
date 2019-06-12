import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const continents = ["Africa", "Asia", "Americas", "Europe", "Oceania"];

  const continentLinks = continents.map(continent => (
    <li key={continent}>
      <NavLink to={`/continents/${continent}`}>{continent}</NavLink>
    </li>
  ));

  return (
    <aside className="menu">
      <p className="menu-label">Home</p>
      <ul className="menu-list">
        <li>
          <NavLink to="/">All countries</NavLink>
        </li>
      </ul>
      <p className="menu-label">Continents</p>
      <ul className="menu-list">{continentLinks}</ul>
      <div className="createdWith">
        <p className="menu-label">About me</p>
        <ul className="menu-list">
          <li>
            <NavLink to="/about-me">Patryk Sanocki</NavLink>
          </li>
        </ul>
        <p className="menu-label">Created with</p>
        <ul className="menu-list">
          <li>
            <a href="https://restcountries.eu/">REST Countries</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
