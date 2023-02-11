import React, { Component } from "react";
import "./App.css";
import Oreha from "./component/oreha.js";
class App extends Component {
  render() {
    const API_KEY = process.env.REACT_APP_LOA_API_KEY;

    return (
      <div>
        <Oreha />
      </div>
    );
  }
}

export default App;
