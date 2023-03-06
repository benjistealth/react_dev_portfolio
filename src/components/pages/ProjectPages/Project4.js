import React from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import "./ProjectPages.css";
import projects from "../../projects.json";


function Project4() {

  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <h1>Day Scheduler</h1>
      <button className="btn btn-back" onClick={GoBack}></button>
      <div className="img-container">
        <a href="https://benjistealth.github.io/work_day_scheduler/"><img className="rounded mx-auto d-block project-img" alt={"Day Scheduler loading page"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/scheduler.png"} /></a>

      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"Day Scheduler"}
          </li>
          <li>
            <strong>Description:</strong> {"Challenge - To create a day scheduler"}
          </li>
          <li>
            <strong>Github Repo:</strong> <a href={projects[3].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"} /></a>
          </li>
        </ul>
        <p className="description d-none d-lg-block">
          This challenge was to create a dat Scheduler that allowed users to enter and recall information in 1 hour slots.
          The slots change colour according to the time of day.
        </p>
        <p className="description d-none d-lg-block">
          Grey: Hours that are in the past
          Red: The current hour
          Green: Ahead hours 
        </p>
      </div>

      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project4;
