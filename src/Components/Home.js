import React, { Component } from "react";
import CountryCard from "./CountryCard";
import "../styles/Continents.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isPending: state.isPending,
    error: state.error
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continent: "",
      searchBox: ""
    };
  }

  getCountriesWithSearch = countries => {
    const { searchBox } = this.state;
    if (this.state.searchBox !== "") {
      return countries.filter(
        country =>
          country.name.toLowerCase().includes(searchBox.toLowerCase()) ||
          country.alpha2Code.toLowerCase().includes(searchBox.toLowerCase()) ||
          country.alpha3Code.toLowerCase().includes(searchBox.toLowerCase()) ||
          country.nativeName.toLowerCase().includes(searchBox.toLowerCase())
      );
    } else return countries;
  };

  handleSearchBoxInput = e => {
    this.setState({
      searchBox: e.target.value
    });
  };

  render() {
    const { countries, isPending } = this.props;
    let countryCardList = [];
    if (countries.countries.length > 0) {
      countryCardList = this.getCountriesWithSearch(countries.countries).map(
        country => <CountryCard country={country} key={country.name} />
      );
    }
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="continentPage">
        <h1 className="title is-1">{`Countries of the World`}</h1>
        <hr />
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search for a country"
            value={this.state.searchBox}
            onChange={this.handleSearchBoxInput}
          />
        </div>
        {countryCardList.length > 0 ? (
          <div className="countryList">{countryCardList}</div>
        ) : (
          <div>No countries found.</div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
