import React from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import "./ProjectPages.css";
import ProjectGallery from "./ProjectGallery";
import projects from "../../projects.json";


function Project2() {

  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}
  
  return (
    <div>
      <h1>Jakes Eatery</h1>
      <button className="btn btn-back" onClick={GoBack}></button>
      <div className="img-container">
      <a href="https://benjistealth.github.io/benji_jakes_eatery/"><img className="rounded mx-auto d-block project-img" alt={"Jakes Eatery Restaurant logo"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/jakes-logo.png"}/></a>
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"Jakes Eatery Restaurant Website"}
          </li>
          <li>
            <strong>Description:</strong> {"Challenge - To create this website from an image"}
          </li>
          <li>
            <strong>Github Repo:</strong> <a href={projects[1].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"}/></a>
          </li>
          </ul>
          <p className="description d-none d-lg-block">
          We were given the base images that were needed and used HTML & CSS to build the website.
          The page was built to replicate an image of the finished article.
      </p>
       
      </div>

      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project2;
