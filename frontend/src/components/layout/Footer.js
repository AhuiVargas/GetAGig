import React, { Component } from "react";
import {Layout} from "antd"

const {Footer} = Layout

class FooterThing extends Component {
  render() {
    return (
      <>
        <Footer style={{ textAlign: "center" }}>
         Created @ Ironhack
        </Footer>
      </>
    );
  }
}

export default FooterThing