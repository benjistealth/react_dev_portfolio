import React from "react";
import { useNavigate } from 'react-router-dom';
import "./ProjectPages.css";
import projects from "../../projects.json";


function Project5() {

  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
      <h1>Recipe Grabber</h1>
      <button className="btn btn-back" onClick={GoBack}></button>
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
          <li>
            <strong>Github Repo:</strong> <a href={projects[4].repoURL}><img className="d-block github-img" alt={"Github logo"} src={"https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/Github.png"} /></a>
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

      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default Project5;
