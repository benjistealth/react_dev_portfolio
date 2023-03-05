import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "./ProjectPages.css";


function Project1() {
  
  return (
    <div>
         {/* {projects.map(f => <Project1 key={f.id} name={f.name} image={f.image} description={f.description}/>)} */}
      <h1>Horiseon</h1>
      <div className="img-container">
      {/* <a href="https://en.wikipedia.org/wiki/Cat"><img src="https:.jpg" alt=" a field."/></a> */}
      <a href="https://benjistealth.github.io/benji_refactoring_challenge_module1/"><img className="rounded mx-auto d-block" alt={"Horiseon logo"} src={"https://raw.githubusercontent.com/benjistealth/benji_bootstrap_portfolio/main/assets/images/horiseon2.png"}/></a>
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {"Project 1 - Horiseon"}
          </li>
          <li>
            <strong>Description:</strong> {"Challenge - To refactor a broken single page website"}
          </li>
          </ul>
          <p className="description">
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
       
      </div>

      <Link to="/">
        Back to Home Page
      </Link>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Project1;
