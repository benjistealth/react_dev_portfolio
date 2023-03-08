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
            <strong className="cardProject">Project:</strong> {props.name}
          </li>
          <li>
            <strong className="cardDescription">Description:</strong> {props.description}
          </li>
          <li>
          <strong className="cardRepo">Repo Link:</strong> <a className="repoLink" href={props.repoURL}>Click to Repo</a>
          </li>
          <li>
             <strong className="cardDeploy">Deployed Link:</strong> <a className="deployLink" href={props.deployedUrl}>Click to Deployment</a>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default ProjCard;
