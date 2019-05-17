import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Laaaaanding</h1>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default Home;
