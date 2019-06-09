import React, { Component } from "react";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>Country</h1>
        <p>{this.props.match.params.name}</p>
        <p>{this.props.match.path}</p>
      </>
    );
  }
}

export default Country;
