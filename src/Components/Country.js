import React, { Component } from "react";
import { connect } from "react-redux";
import InformationTable from "./InformationTable";

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isPending: state.isPending,
    error: state.error
  };
};
class Country extends Component {
  getCountry = () => {
    return this.props.countries.countries.filter(
      country => country.alpha3Code === this.props.match.params.name
    )[0];
  };

  render() {
    const { countries, isPending } = this.props;
    let country = {};
    let namesInformation = [];
    let geographyInformation = [];
    if (countries.countries.length > 0) {
      country = this.getCountry();
      namesInformation = [
        { property: "Common", value: country.name },
        { property: "Native", value: country.nativeName },
        {
          property: "Alternative spellings",
          value: country.altSpellings.join(", ")
        },
        { property: "Demonym", value: country.demonym }
      ];
      geographyInformation = [
        {
          property: "Region",
          value: country.region
        },
        {
          property: "Subregion",
          value: country.subregion
        },
        {
          property: "Capital",
          value: country.capital
        },
        {
          property: "Area",
          value: (
            <span>
              {country.area}km<sup>2</sup>
            </span>
          ) //add square km
        }
      ];
    }

    return isPending ? (
      <h1>Loading...</h1>
    ) : country ? (
      <>
        <div className="country-title">
          <h1 className="title is-1">{country.name}</h1>
        </div>
        <div className="information-page">
          <section className="informations">
            <div className="card country-naming">
              <p className="title is-4">Names</p>
              <InformationTable values={namesInformation} />
            </div>
            <div className="card country-geography">
              <p className="title is-4">Geography</p>
              <InformationTable values={geographyInformation} />
            </div>
            <div className="card country-geography">
              <p className="title is-4">Geography</p>
              <InformationTable values={geographyInformation} />
            </div>
          </section>
          <section className="flag">
            <div className="flag">
              <img src={country.flag} alt={`Flag of ${country.name}`} />
            </div>
          </section>
        </div>
      </>
    ) : null;
  }
}

export default connect(mapStateToProps)(Country);
