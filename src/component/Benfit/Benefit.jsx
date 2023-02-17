import React from "react";

// 얼마 이득인지 나올 부분
function Befefit({name, value}){
    return (
      <div >
        <h1>{`${name}제작시 볼 수 있는 이득은 ${value}입니다.`}</h1>
      </div>
    )
}


  export default Befefit;
