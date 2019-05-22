import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h1>no me juzguen, si acabo</h1>
        <Link to="/pre-signup">Signup</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default Home;
