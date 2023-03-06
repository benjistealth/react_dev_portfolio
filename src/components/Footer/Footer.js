import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer>
        {/* <!-- changed the native color to dark using inbuilt CSS from Bootstrap :-) --> */}

        <nav className="nav justify-content-center tabrow nav-pills flex-md-row">
        <a className="nav-link" href="#/">Home</a>
          <a className="nav-link tabtn m-1" href="#/" >Home</a>
          <a className="nav-link tabtn m-1" href="#/About" >About</a>
          <a className="nav-link tabtn m-1" href="#/Contact" >Contact</a>
          <a className="nav-link tabtn m-1" href="#/ProjectGallery" >Project Gallery</a>
        </nav>


    </footer>
  );
}

export default Footer;
