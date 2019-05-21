import React, { Component } from "react";
import axios from "axios";

class ViewAll extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/get-artists")
      .then(({ data }) => {
        this.setState({ artists: data });
        console.log(this.state.artists);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.artists.map((artist, i) => {
          return <iframe title="mixcloud-link">{artist.mixcloud}</iframe>;
        })}

        <div>
          
        </div>

      
      </div>
    );
  }
}

export default ViewAll;
