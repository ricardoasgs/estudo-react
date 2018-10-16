import React from "react";
import ReactDOM from "react-dom";
import Family from "./Family";
import Member from "./Member";

ReactDOM.render(
  <Family lastName="Silva">
    <Member name="Joao" />
    <Member name="Rafael" />
    <Member name="Julio" />
  </Family>,
  document.getElementById("root")
);
