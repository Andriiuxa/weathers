import React from "react";
import "./style.scss";

const Header = props => (
  <div className="header-container">
    <h1> {props.children} </h1>
  </div>
);

export default Header;
