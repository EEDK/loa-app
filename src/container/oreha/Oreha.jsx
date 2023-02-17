/*  오레하 계산기 정보
    오레하 가격을 출력하는 컨테이너
    중급 오레하 :30개 제작, 고대 유물 64, 희귀한 유물 26, 오레하 유물 8개 제작 비용 205 골드
    상급 오레하 : 20개 제작, 고대 유물 94, 희귀한 유물 29, 오레하 유물 16개 제작 비용 250 골드
    최상급 오레하 : 15개 제작, 고대 유물 107, 희귀한 유물 51, 오레하 유물 52개 제작 비용 300 골드
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import {Value, Befefit} from '../../component'

// 테스트용 목업 데이터.
import { MockDataOreHa, MockDataRelic } from "./mockData";

function Oreha() {
  const [orehaDatas, setOreha] = useState([]);
  const [orehaRelic, setRelic] = useState([]);
  const [discountRate, setRate] = useState(10.0);

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

  const inputValueChange = () =>{
    var inputValue = document.getElementById('discountValue').value;
    setRate(inputValue)
}

  useEffect(() => {
    // getDataOreha();
    // getDataRelics();
  }, []);

  return (
    <div>
      <div>
        {isLoadingRelic && isLoadingOreha ? <h1>여기 나타남</h1> : "Loading..."}
      </div>

      <div>
        <div>
          <input type="text" name="discountValue" id="discountValue" />
          <button onClick={inputValueChange}> 할인 값 제출 </button>
        </div>
        {MockDataOreHa.Items.map(item => (
            <Value 
            key={item.Id}
            name={item.Name}
            value={item.CurrentMinPrice} />
        ))}
      </div>
          {MockDataRelic.Items.map(item => (
            <Value 
            key={item.Id}
            name={item.Name}
            value={item.CurrentMinPrice} />
          ))}
      <div>
        여기부터 얼마 이득인지 알려줌
        {MockDataOreHa.Items.map(item => (
            <Befefit 
            key={item.Id}
            name={item.Name}
            value={item.CurrentMinPrice} 
            discountRate={discountRate}
            relicData = {MockDataRelic}/>
        ))}
      </div>
    </div>
  );
}

export default Oreha;
