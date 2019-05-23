import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter, Link } from "react-router-dom";
import Particles from "react-particles-js";

const { Header } = Layout;

class LayoutThing extends Component {
  render() {
    const style = {
      zIndex: "-1",
      width: "100%",
      height: "130px",
      color: "white"
    };

    return (
      <div style={style}>
        <Header style={style}>
          <h1 id="logo">
            <Link to="/" style={{ color: "white" }}>
              Get a Gig!
            </Link>
          </h1>

          <Particles class="particles" height="130px" width="100%" />
        </Header>
      </div>
    );
  }
}

export default withRouter(LayoutThing);
