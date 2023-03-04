import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Project3() {
  return (
    <div>
      <h1>Project 3</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <Link to="home" role="button" className="btn btn-link">
        Back to Home Page
      </Link>
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Project3;
