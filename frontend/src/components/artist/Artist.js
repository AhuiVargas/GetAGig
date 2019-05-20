import React, { Component } from "react";
import Edit from './ArtistEdit'

export default class Artist extends Component {
  render() {
    return (
      <div>
        <Edit
          handleInputs={this.handleInputs}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
