import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import styles from "./ProductsPage.module.css";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setState({ products: response.data }));
  };

  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((product) => (
            <Card
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        ) : (
          <p>loading . . .</p>
        )}
      </div>
    );
  }
}

export default ProductsPage;
