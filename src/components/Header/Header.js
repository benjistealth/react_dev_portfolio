import React from "react";
import "./Header.css";


function Header() {

  return (
    <>
    
<div className="header">

<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link header-link" href="#/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link header-link" href="#/About">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link header-link" href="#/Contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link header-link" href="#/ProjectGallery">Project Gallery</a>
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
