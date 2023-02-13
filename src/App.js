import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Oreha from "./component/oreha.js";

class App extends Component {
  state = {
    isLoading: true,
    datas: [],
  };

  getData = async () => {
    const API_KEY = process.env.REACT_APP_LOA_API_KEY;
    const url = "https://developer-lostark.game.onstove.com";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `bearer ${API_KEY}`,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        CategoryCode: 50000,
        ItemName: "오레하",
      }),
    };

    await fetch(`${url}/markets/items`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Oreha />
      </div>
    );
  }
}

export default App;
