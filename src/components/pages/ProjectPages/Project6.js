import React from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import "./ProjectPages.css";
import projects from "../../projects.json";


function Project6() {

  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}
  
  return (
    <div>
      <h1>Repo Readme Generator</h1>
      <button className="btn btn-back" onClick={GoBack}></button>
      <div className="img-container">
      <a href="https://github.com/benjistealth/repo_readme_generator"><img className="rounded mx-auto d-block project-img" alt={"generated readme page"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/readme_generator.png"}/></a>
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"Readme.md Generator"}
          </li>
          <li>
            <strong>Description:</strong> {"Challenge - A tool to generate an attractive readme.md file from cmdline questions"}
          </li>
          <li>
            <strong>Github Repo:</strong> <a href={projects[5].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"} /></a>
          </li>
          </ul>
          <p className="description d-none d-lg-block">
        This project was my first time using Node.js.  We had to build a command line application to generate a high quality 
        readme.md file from project related questions answered at the terminal.  This was quite rewarding in the end, but there
         were a lot of fiddly changes needed to the generated markdown for it to meet all of the requirements.
      </p>
       
      </div>

      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project6;
