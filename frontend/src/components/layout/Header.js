import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import toastr from "toastr";
import AuthService from "../../services/auth";
import Particles from "react-particles-js";

const service = new AuthService();

const { Header } = Layout;

class LayoutThing extends Component {
  handleLogout = e => {
    service.logout().then(res => {
      localStorage.clear();
      toastr.success("Logged out");
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <Header>
          <Particles class="particles" height="500px" width="100%" />
          <h1>Get a Gig!</h1>
          {/* <Button type="dashed" onClick={this.handleLogout}>
              Logout    PON ESTA MADRE EN OTRO LADO
            </Button> */}
        </Header>
      </div>
    );
  }
}

export default withRouter(LayoutThing);
