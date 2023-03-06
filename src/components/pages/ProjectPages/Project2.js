import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import "./ProjectPages.css";


function Project2() {
  
  return (
    <div>
      <h1>Jakes Eatery</h1>
      <Link to="/">
      <button className="btn btn-back"></button>
      </Link>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
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
          </ul>
          <p className="description d-none d-lg-block">
          We were given the base images that were needed and used HTML & CSS to build the website.
          The page was built to replicate an image of the finished article.
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

export default Project2;
