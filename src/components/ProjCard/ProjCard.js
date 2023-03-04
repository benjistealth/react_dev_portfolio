import React from "react";
import "./ProjCard.css";
// import "../babelconfig";

function ProjCard(props) {
  // const image = require(`${props.image}`);
  return (
    <div className="card col-3 selectCard" onClick={props.selectFunction}>
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjCard;
