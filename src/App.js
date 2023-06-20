import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <Switch>
            <Route path="/products" component={ProductsPage} />
            <Route path="/aboutus" component={AboutUs} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
