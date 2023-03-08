import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer>
        {/* <!-- using inbuilt CSS from Bootstrap :-) --> */}
      <hr></hr>
        <nav className="nav justify-content-center tabrow nav-pills flex-md-row">
          <a className="nav-link tabtn m-1" href="#/" >Home</a>
          <a className="nav-link tabtn m-1" href="#/About" >About</a>
          <a className="nav-link tabtn m-1" href="#/Contact" >Contact</a>
          <a className="nav-link tabtn m-1" href="#/ProjectGallery" >Project Gallery</a>
        </nav>
      <hr></hr>

    </footer>
  );
}

export default Footer;
