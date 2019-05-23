import React, { Component } from "react";
import axios from "axios";
import { Card } from 'antd'

class ArtistInbox extends Component {
  state = {
    invites: []
  };

  

  componentWillMount() {
    console.log('invites')
    axios
      .get("https://getagig.herokuapp.com/artist-inbox", {
        withCredentials: true
      })
      .then(({ data }) => {
        this.setState({ invites: data })
        console.log(this.state.invites);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.invites.map((invite, i) => {
          return (
            <div>
              <Card>
                <h1>You have a new gig!</h1>
                <h4>{invite.from.name} wants to hire you for his upcoming event</h4>
                <h4>you can contact him at this email:</h4>
                <h4>{invite.from.email}</h4>
              </Card>
            </div>
          );
        })
        }
      </div>
    );
  }
}

export default ArtistInbox;
