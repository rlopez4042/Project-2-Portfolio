import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Spot(props) {

  let beachInfo = 'Here';
  if (props) {
    beachInfo = (
      <div>
        <h1>{props}</h1>
      </div>
    );
  }

console.log(props)

  return (
    <div>
      {/* {beachInfo} */}
    </div>
  );
}
export default Spot;