import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import "./ProjectPages.css";


function Project3() {
  
  return (
    <div>
      <h1>JS Quiz</h1>
      <Link to="/">
      <button className="btn btn-back"></button>
      </Link>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
      <div className="img-container">
      <a href="https://benjistealth.github.io/benji_js_fundamentals_quiz/"><img className="rounded mx-auto d-block project-img" alt={"JS Quiz loading page"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/js_quiz.png"}/></a>
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"JavaScript Fundamentals Quiz"}
          </li>
          <li>
            <strong>Description:</strong> {"Challenge - To create a JavaScript fundamentals quiz website"}
          </li>
          </ul>
          <p className="description d-none d-lg-block">
        There were a few requirements here, we had to ask multiple coice questions 
        with buttons to select the answer.  A timer would run and take off 10 seconds for wrong answers.
        At the end, users can enter their initials and the high scores would be recorded in local storage.
        The HighScores page would then be displayed with all recorded scores displayed in leader order.
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

export default Project3;
