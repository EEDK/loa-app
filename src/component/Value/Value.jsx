import React from "react";
import "./Value.css";
import PropTypes from "prop-types";


// 값을 도출하는 각각의 컴포넌트
function Value({name, value}){
    return (
      <div >
        <h1>{`${name}의 현재 값은 ${value}입니다.`}</h1>
      </div>
    )
}

Value.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  };

  export default Value;
