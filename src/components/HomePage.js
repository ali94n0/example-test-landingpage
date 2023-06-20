import React, { Component } from "react";
import Banner from "./Banner";
import Search from "./Search";
import Logos from "./Logos";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Search />
        <Logos />
      </div>
    );
  }
}

export default HomePage;
