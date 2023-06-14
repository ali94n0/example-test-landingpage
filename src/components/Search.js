import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  searchHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <p>Search What you want</p>
        <div className={styles.inputBox}>
          <input
            value={this.state.text}
            onChange={this.searchHandler}
            placeholder="Search ..."
          />
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default Search;
