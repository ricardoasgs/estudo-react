import React from "react";
import ReactDOM from "react-dom";
import Family from "./Family";
import Member from "./Member";

ReactDOM.render(
  <Family>
    <Member name="Joao" lastName="Silva" />
  </Family>,
  document.getElementById("root")
);
