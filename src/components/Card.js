import React, { Component } from "react";
import up from "../images/up.svg";
import down from "../images/down.svg";
import styles from "./Card.module.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  decreaseHandler = () => {
    if (this.state.quantity >= 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };
  increaseHandler = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  render() {
    const { image, title, price } = this.props;
    const { quantity } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="smart phone" />
        <h3>{title}</h3>
        <p>
          {quantity
            ? `${price} * ${quantity} = ${price * quantity}$`
            : `${price}$`}
        </p>
        <div className={styles.quantity}>
          <img
            className={this.state.quantity ? "" : styles.disable}
            onClick={this.decreaseHandler}
            src={down}
            alt="quantity"
          ></img>
          <span>{this.state.quantity}</span>
          <img onClick={this.increaseHandler} src={up} alt="quantity"></img>
        </div>
      </div>
    );
  }
}

export default Card;
