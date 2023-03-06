import React from "react";
import { useNavigate } from 'react-router-dom';
// import Home from '../Home/Home';
import "./ProjectPages.css";
// import ProjectGallery from "./ProjectGallery";
import projects from "../../projects.json";



function Project1() {
  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <h1>Horiseon</h1>
      {/* back button */}
      <button className="btn btn-back" onClick={GoBack}></button>
      <div className="img-container">
        <a href={projects[0].deployedUrl}><img className="rounded mx-auto d-block project-img" alt={"Horiseon logo"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/horiseon2.png"} /></a>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"Horiseon refactoring challenge"}
          </li>
          <li>
            <strong>Description:</strong> {"Challenge - To refactor a broken single page website"}
          </li>
          <li>
            <strong>Github Repo:</strong> <a href={projects[0].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"} /></a>
          </li>
        </ul>
        <p className="description d-none d-lg-block">
          This challenge was delivered in the form of an existing website with many issues.
          We had to refactor all of the code, esize images, position logos and icons and text to
          meet the requirements of an image of the completed site.
        </p>
      </div>
      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project1;
