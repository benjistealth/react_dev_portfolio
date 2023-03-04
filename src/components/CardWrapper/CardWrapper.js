import React from "react";
import "./CardWrapper.css";

function CardWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CardWrapper;
