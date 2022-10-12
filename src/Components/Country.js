import React, { Component } from "react";
import { connect } from "react-redux";
import InformationTable from "./InformationTable";
import { Link } from "react-router-dom";
import "../styles/Country.css";

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
    let residentsInformation = [];
	let countryBorders;
    if (countries.countries.length > 0) {
      country = this.getCountry();
      namesInformation = [
        { property: "Common", value: country.name },
        { property: "Native", value: country.nativeName },
        {
          property: "Alternative spellings",
          value: country.altSpellings.join(", ")
        }
      ];
	  console.log(country.latlng);
		if(country.borders !== undefined)
		{
			countryBorders = country.borders.map(border => (
			<Link key={border} to={`/countries/${border}`}>
				{`${border} `}
			</Link>
			));
		}
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
          property: "Lat/Lng",
          value: country.latlng !== undefined ? country.latlng.join(", ") : "?, ?"
        },
        {
          property: "Area",
          value: (
            <span>
              {country.area}km<sup>2</sup>
            </span>
          ) //add square km
        },
        {
          property: "Land borders",
          value: countryBorders !== undefined && countryBorders.length > 0 ? countryBorders : "None" //add square km
        }
      ];

      residentsInformation = [
        { property: "Resident", value: country.demonym },
        { property: "Population", value: country.population },
        {
          property: "Population density",
          value: (
            <span>
              {(country.population / country.area).toFixed(2)}/km<sup>2</sup>
            </span>
          )
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
        <hr />
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
            <div className="card country-residents">
              <p className="title is-4">Residents</p>
              <InformationTable values={residentsInformation} />
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
