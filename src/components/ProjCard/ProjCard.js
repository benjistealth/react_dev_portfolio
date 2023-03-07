import React from "react";
import "./ProjCard.css";


function ProjCard(props) {
  return (
    <div className="card col-md-2 selectCard" onClick={props.selectFunction}>
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      <div className="content d-none d-lg-block">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
          <strong>Deployment URL:</strong> <a className="nav-link" href={props.repoURL}>Click through to Repo</a>
          </li>
          <li>
             <strong>Deployment URL:</strong> <a className="nav-link" href={props.deployedUrl}>Click through to Deployment</a>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default ProjCard;
