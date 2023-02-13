import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Oreha from "./component/oreha.js";

// 테스트용 목업 데이터.
import { MockDataOreHa, MockDataRelic } from "./mockData";

function App() {
  const [orehaDatas, setOreha] = useState([]);
  const [orehaRelic, setRelic] = useState([]);

  const [isLoadingOreha, setLoadingOreha] = useState(false);
  const [isLoadingRelic, setLoadingRelic] = useState(false);

  const getDataOreha = async () => {
    const url = "https://developer-lostark.game.onstove.com";
    const API_KEY = process.env.REACT_APP_LOA_API_KEY;

    // 오레하 정보를 입력 받을 내용
    const optionsOreha = {
      method: "POST",
      url: `${url}/markets/items`,
      headers: {
        accept: "application/json",
        authorization: `bearer ${API_KEY}`,
        "content-Type": "application/json",
      },
      data: JSON.stringify({
        CategoryCode: 50000,
        ItemName: "오레하",
      }),
    };

    await axios
      .request(optionsOreha)
      .then(function (response) {
        setOreha(response.data);
        setLoadingOreha(true);

        console.log(orehaDatas);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getDataRelics = async () => {
    const url = "https://developer-lostark.game.onstove.com";
    const API_KEY = process.env.REACT_APP_LOA_API_KEY;

    // 유물 정보를 입력 받을 내용
    const optionsRelics = {
      method: "POST",
      url: `${url}/markets/items`,
      headers: {
        accept: "application/json",
        authorization: `bearer ${API_KEY}`,
        "content-Type": "application/json",
      },
      data: JSON.stringify({
        CategoryCode: 90000,
        ItemName: "유물",
      }),
    };

    await axios
      .request(optionsRelics)
      .then(function (response) {
        setRelic(response.data);
        setLoadingRelic(true);

        console.log(orehaRelic);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    // getDataOreha();
    // getDataRelics();
  }, []);

  return (
    <div>
      <div>{isLoadingRelic && isLoadingOreha ? <Oreha /> : "Loading..."}</div>
      <div>
        <Oreha orehaData={MockDataOreHa} relicData={MockDataRelic} />
      </div>
    </div>
  );
}

export default App;
