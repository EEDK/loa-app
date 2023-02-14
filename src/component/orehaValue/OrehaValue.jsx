import React from "react";
import PropTypes from "prop-types";

function OrehaValue({name, value}){
    return (
      <div >
        <h1>{`${name}의 현재 값은 ${value}`}</h1>
      </div>
    )
}

OrehaValue.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  };

  export default OrehaValue;
