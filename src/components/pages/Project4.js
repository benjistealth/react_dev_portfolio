import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "./ProjectPages.css";


function Project4() {

  return (
    <div>
      <h1>Day Scheduler</h1>
      <Link to="/">
      <button className="btn btn-back"></button>
      </Link>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
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
        </ul>
        <p className="description d-none d-lg-block">
          This challenge was to create a dat Scheduler that allowed users to enter and recall information in 1 hour slots.
          The slots change colour according to the time of day.
        </p>
        <p className="description d-none d-lg-block">
          Grey: Hours that are in the past
          Red: The current hour
          Green: Ahead hours that are yet to be reached
        </p>
      </div>

      <Link to="/">
      <button className="btn btn-back"></button>
      </Link>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Project4;
