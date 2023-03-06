import { HashRouter as NavLink, Link, Route, Routes, useNavigate } from 'react-router-dom';
import React from "react";
import "./Header.css";
import Home from '../pages/Home/Home';
import About from '../pages/AboutContactMore/About';
import Contact from '../pages/Contact/Contact';
import More from '../pages/AboutContactMore/More';
import ProjectGallery from '../pages/ProjectPages/ProjectGallery';

function Header() {

  return (
    <>
    
<div className="header">

<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" href="#/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/About">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/Contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#/ProjectGallery">Project Gallery</a>
  </li>
</ul>
<hr></hr>
<h1 className="heading">Benji Project Portfolio</h1>
<hr></hr>
</div>
    </>
  );
}

export default Header;
