import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import AuthService from "../../services/auth";
import { Button, Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import toastr from "toastr";

const service = new AuthService();

class ViewAll extends Component {
  state = {
    artists: []
  };

  handleLogout = e => {
    service.logout().then(res => {
      localStorage.clear();
      toastr.success("Logged out");
      this.props.history.push("/");
    });
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
      .post(
        "https://getagig.herokuapp.com/artist-inbox",
        { id },
        {
          withCredentials: true
        }
      )
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
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%"
                }}
              >
                <h2>{artist.name}</h2>
                <ReactPlayer
                 // playing="false"
                  width="20rem"
                  height="10rem"
                  url={artist.mixcloud}
                />
                <br />
                <Button
                  type="dashed"
                  onClick={e => this.sendInvite(artist._id)}
                >
                  Invite
                </Button>
                <br />
              </Card>
            </>
          );
        })}
        <br />
        <Button type="primary" onClick={this.handleLogout}>
          Logout
        </Button>
        <Button type="primary">
          <Link to="/artist-inbox">My Invites</Link>
        </Button>
        <br />
        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
}

export default ViewAll;
