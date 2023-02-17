import React from "react";
import { OrehaCalc } from '../../functions';

// 얼마 이득인지 나올 부분
function Befefit({name, value, discountRate, relicData}){
  console.log(relicData);
    return (
      <div >
        <h1>{`${name}제작시 볼 수 있는 이득은 ${OrehaCalc(value, relicData)}입니다.`}</h1>
        <h1>{`할인률은 ${discountRate}`}</h1>
      </div>
    )
}


  export default Befefit;
