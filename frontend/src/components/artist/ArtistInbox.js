import React, { Component } from "react";
import axios from "axios";

class ArtistInbox extends Component {
  state = {
    invites: []
  };

  componentDidMount() {
    axios
    .get("http://localhost:3000/artist-inbox")
    .then(({ data }) => {
      this.setState({ invites: data })
      console.log(this.state.invites)
    })
    .catch(error => console.log(error))
 }

 
  render() {
    return (
      <div>
        {this.state.invites.map(employer => {
          return (
            <div>
              <p>{employer.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArtistInbox
