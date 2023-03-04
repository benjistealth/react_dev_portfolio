import React from "react";
import "./style.css";

function ProjCard(props) {
  return (
    <div className="card col-3 selectCard" onClick={props.removeFunction}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjCard;
