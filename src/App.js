import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/MainComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
