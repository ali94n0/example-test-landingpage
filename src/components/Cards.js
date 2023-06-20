import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";

import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
  render() {
    const { image, title, price } = this.props;
    return <div className={styles.container}></div>;
  }
}

export default Cards;
