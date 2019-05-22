import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h1>nmms</h1>
        <Link to="/pre-signup">Signup</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default Home;
