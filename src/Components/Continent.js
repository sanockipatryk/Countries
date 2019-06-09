import React, { Component } from "react";

class Continent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      `https://restcountries.eu/rest/v2/region/${this.props.match.params.name}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          countries: data,
          loading: false
        });
      })
      .catch(err => console.log("Error loading countries."));
  }

  render() {
    return (
      <>
        <h1>Continent</h1>
        <p>{this.props.match.params.name}</p>
        <p>{this.props.match.path}</p>
      </>
    );
  }
}

export default Continent;
