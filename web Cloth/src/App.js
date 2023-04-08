import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import WishList from "./components/WishList/WishList";

function App({ current, products }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/wishlist">
            <WishList />
          </Route>
          <Route exact path="/">
            <Products products={products} />
          </Route>
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Switch to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(App);
