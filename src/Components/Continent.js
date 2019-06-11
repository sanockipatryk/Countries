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

class Continent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continent: ""
    };
  }

  componentDidMount() {
    this.setState({
      continent: this.props.match.params.name
    });
  }

  componentDidUpdate() {
    if (this.state.continent !== this.props.match.params.name)
      this.setState({
        continent: this.props.match.params.name
      });
  }

  getCountries = () => {
    return this.props.countries.countries.filter(
      country => country.region === this.state.continent
    );
  };

  render() {
    const { countries, isPending } = this.props;
    let countryCardList = [];
    if (countries.countries.length > 0) {
      const currentCountries = this.getCountries();
      countryCardList = currentCountries.map(country => (
        <CountryCard country={country} key={country.name} />
      ));
    }
    return isPending ? (
      <h1>Loading...</h1>
    ) : countryCardList.length > 0 ? (
      <div className="continentPage">
        <h1 className="title is-1">
          {`Countries of ` + this.props.match.params.name}
        </h1>

        <div className="countryList">{countryCardList}</div>
      </div>
    ) : null;
  }
}

export default connect(mapStateToProps)(Continent);
