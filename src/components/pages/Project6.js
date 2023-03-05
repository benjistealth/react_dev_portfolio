import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "./ProjectPages.css";


function Project6() {
  
  return (
    <div>
      <h1>Repo Readme Generator</h1>
      <Link to="/">
      <button className="btn btn-back"></button>
      </Link>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
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
          </ul>
          <p className="description d-none d-lg-block">
        This project was my first time using Node.js
         and was quite rewarding in the end, but there were a lot of fiddly changes needed to the generated markdown.
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

export default Project6;
