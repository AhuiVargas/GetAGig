import React, { Component } from "react";
import { Layout, Menu, Button } from "antd";
import { withRouter } from "react-router-dom";
import toastr from 'toastr'
import AuthService from "../../services/auth";
import Particles from 'react-particles-js';


const service = new AuthService()

const { Header } = Layout;

class LayoutThing extends Component {
  handleLogout = e => {
    service
    .logout()
    .then(res => {
      localStorage.clear();
      toastr.success("Logged out");
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <>
        <Layout className="layout">
          <Header>
            <Particles 
            height="100px"
            width="100%"
             />
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
      
            />
            <Button type="primary" onClick={this.handleLogout}>
              Logout
            </Button>
          </Header>
        </Layout>
      </>
    );
  }
}

export default withRouter(LayoutThing);
