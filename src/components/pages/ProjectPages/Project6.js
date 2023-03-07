import React from "react";
import { useNavigate } from 'react-router-dom';
import "./ProjectPages.css";
import projects from "../../projects.json";


function Project6() {

  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}
  
  return (
    <div>
      <h1>API Weather Dashboard</h1>
      <button className="btn btn-back" onClick={GoBack}></button>
      <div className="img-container">
      <a href={projects[5].deployedUrl}><img className="rounded mx-auto d-block project-img" alt={"generated readme page"} src={projects[5].image}/></a>
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {projects[5].name}
          </li>
          <li>
            <strong>Description:</strong> {projects[5].description}
          </li>
          <li>
            <strong>Github Repo:</strong> <a href={projects[5].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"} /></a>
          </li>
          </ul>
          <p className="description d-none d-lg-block">
        This project was my first time using third party API calls to gather and display information dynamically from user search
        criteria. This project taught me about asynchronous call handling.
      </p>
       
      </div>

      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project6;
