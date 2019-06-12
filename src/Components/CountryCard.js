import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleRedirectToCountry = () => {
    console.log("click");
    this.setState({
      redirect: true
    });
  };

  render() {
    const { country } = this.props;

    return (
      <div className="card" onClick={() => this.handleRedirectToCountry()}>
        <div className="card-image">
          <figure>
            <img src={country.flag} alt={country.name} />
          </figure>
        </div>
        <hr />
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{country.name}</p>
            </div>
          </div>

          <div className="content" />
        </div>
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: `/countries/${country.alpha3Code}`,
              state: { country }
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default CountryCard;
