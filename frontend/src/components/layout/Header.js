import React, { Component } from "react";
import { Layout, Menu, Button } from "antd";
import { withRouter } from "react-router-dom";
import toastr from 'toastr'
import AuthService from "../../services/auth";

const service = new AuthService()

const { Header } = Layout;

class LayoutThing extends Component {
  handleLogout = e => {
    service
    .logout()
    .then(res => {
      window.localStorage.clear();
      toastr.success("Logged out");
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
      
            />
            <Button type="primary" href="/">
              Logout
            </Button>
          </Header>
        </Layout>
      </>
    );
  }
}

export default withRouter(LayoutThing);
