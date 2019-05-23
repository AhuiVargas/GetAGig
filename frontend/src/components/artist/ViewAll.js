import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Button, Card } from "antd";
import toastr from 'toastr'


class ViewAll extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("https://getagig.herokuapp.com/get-artists")
      .then(({ data }) => {
        this.setState({ artists: data });
       // console.log(this.state.artists);
      })
      .catch(error => console.log(error));
  }

  sendInvite = id => {
    
    axios
      .post("https://getagig.herokuapp.com/artist-inbox", {id}, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        toastr.success("Invitation sent!");
      });
  };



  render() {
    return (
      <div>
        {this.state.artists.map((artist, i) => {
          return (
            <>
              <Card  style={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
              <h1>{artist.name}</h1>
                <ReactPlayer
                  width="398px"
                  height="200px"
                  url={artist.mixcloud}
                  playing
                />
                <br />
                <Button onClick={e => this.sendInvite(artist._id)}>
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
