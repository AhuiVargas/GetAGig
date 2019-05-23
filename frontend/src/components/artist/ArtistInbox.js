import React, { Component } from "react";
import axios from "axios";
//import { Button, Card } from 'antd'

class ArtistInbox extends Component {
  state = {
    invites: []
  };

  

  componentDidMount() {
    axios
      .get("https://getagig.herokuapp.com/artist-inbox", {
        withCredentials: true
      })
      .then(({ data }) => {
        this.setState({ invites: data })
        console.log(this.state.invites);
      })
      //.populate('from')
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.invites.map((invite, i) => {
          return (
            <div>
              <p>{invite.from} | {invite.to}</p>
            </div>
          );
        })
       // .populate('from')
        }
      </div>
    );
  }
}

export default ArtistInbox;
