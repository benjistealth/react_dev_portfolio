import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "./ProjectPages.css";


function Project5() {

  return (
    <div>
      <h1>Recipe Grabber</h1>
      <div className="img-container">
        <a href="https://splwdev.github.io/Recipe-Grabber/"><img className="rounded mx-auto d-block project-img" alt={"Recipe Grabber loading page"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/recipe_grabber.png"} /></a>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"Recipe Grabber"}
          </li>
          <li>
            <strong>Description:</strong> {"Project - A webtool to  grab recipes, images and ingredients from API calls from user search criteria"}
          </li>
        </ul>
        <p className="description d-none d-lg-block">
        This was a group project, we were put into groups of 3 and 
        instructed to come up with a project idea that utilises a 
        minimum of 2 API calls in order to solve some real world problem.
        </p>
        <p className="description d-none d-lg-block">
        The project allows users to search for a meal base item, such as "burger" or "steak".
        The page background then loads with a lovely high definition image of a steak related image
        pulled from an API call, the page then loads with 9 cards max, each with a different meal suggestion.
        These can be clicked on to show a modal with the ingredients, which can be saved for later retrieval,
        and clicked through to the ingredients required to make the meal.
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

export default Project5;
