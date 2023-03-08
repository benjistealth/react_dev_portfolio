import React from "react";
import { useNavigate } from 'react-router-dom';
import "./ProjectPages.css";
import projects from "../../projects.json";



function Project1() {
  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <h1>{projects[0].name}</h1>
      {/* back button */}
      <button className="btn btn-back" onClick={GoBack}></button>
      <div className="img-container">
        <a href={projects[0].deployedUrl}><img className="rounded mx-auto d-block project-img" alt={projects[0].alt} src={projects[0].image} /></a>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {projects[0].name}
          </li>
          <li>
            <strong>Description:</strong> {projects[0].description}
          </li>
          <li>
            <strong>Github Repo:</strong> <a href={projects[0].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"} /></a>
          </li>
        </ul>
        <p className="description d-none d-lg-block">
          This challenge was to create a webpage password generator that allowed users to select options of which character types 
          that they wanted in the password, such as special characters, upper and lower case letters and numbers.
        </p>
      </div>
      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project1;
