import React from "react";
import "./ProjCard.css";

function ProjCard(props) {
  return (
    <div className="card col-3 selectCard" onClick={props.selectFunction}>
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
        {/* <img src={require(`${props.image}`)} alt={props.name} /> */}
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
