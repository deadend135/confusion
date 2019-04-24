import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MainComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container" />
        </Navbar>
        <Main />
      </div>
    );
  }
}

export default App;
