import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class PreSignUp extends Component {
  render() {
    return (
      <div>
         <Link to="/artist-signup">I'm a Musician  </Link>
         |
         <Link to="/employer-signup">  I'm a Recruiter</Link>
      </div>
    )
  }
}
