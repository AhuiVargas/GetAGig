import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Button, Card } from "antd";


class ViewAll extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/get-artists")
      .then(({ data }) => {
        this.setState({ artists: data });
        console.log(this.state.artists);
      })
      .catch(error => console.log(error));
  }

  sendInvite = musicianEmail => {
    alert("Artist notified!");
    axios
      .post("http://localhost:3000/artist-inbox", {
        bandEmail: this.state.currentUser,
        musicianEmail
      })
      .then(res => {
        console.log(res);
      });
  };



  render() {
    return (
      <div>
        {this.state.artists.map((artist, i) => {
          return (
            <>
              <Card  style={{ padding: 0 }}>
              <h1>{artist.name}</h1>
                <ReactPlayer
                  width="398px"
                  height="200px"
                  url={artist.mixcloud}
                  playing
                />
                <br />
                <Button onClick={e => this.sendInvite(artist.email)}>
                  Invite
                </Button>
              </Card>
            </>
          );
        })}
      </div>
    );
  }
}

export default ViewAll;
