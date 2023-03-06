import React from "react";
import "./Header.css";


function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <header className="header container-fluid">
  <a className="navbar-brand" href="#footer">About</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="navbar-brand" href="#skills">Skills<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="navbar-brand" href="#footer">Contact</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          More...
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#footer">About</a>
          <a className="dropdown-item" href="#footer">Contact</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#footer">Skills</a>
        </div>
      </li>
    </ul>
  </div>
 

      
    </header>
    </nav>
    <h1 className="text-center heading">Benji Project Portfolio</h1>
    </>
  );
}

export default Header;
