import React from "react";
import "./Footer.css";


function Footer() {
  return (
  <footer>
    <div className="container-fluid justify-content-center" id="footer">
      {/* <!-- changed the native color to dark using inbuilt CSS from Bootstrap :-) --> */}
      <nav className="nav tabrow justify-content-center nav-pills navbar-dark bg-dark"/>
        <nav className="nav justify-content-center tabrow nav-pills flex-md-row">
          <a className="nav-link active tabtn m-1" href="#skills" data-toggle="tab">Skills</a>
          <a className="nav-link tabtn m-1" href="#contact" data-toggle="tab">Contact</a>
          <a className="nav-link tabtn m-1" href="#more" data-toggle="tab">About</a>
        </nav>

        {/* <!-- added py-5 and px-5 for vertical and horizontal padding to tabbed content --> */}
        <div className="tab-content d-none d-lg-block py-5 px-5">
          <div className="tab-pane active" id="skills">
            <h3>Bootcamp Skills</h3>
            <p>The EDX Front End Web Development Bootcamp is a serious course for serious people wanting some serious
              skills.
              The main reason for writing this much is die to the fact that I have a weird bug in this footer/nav
              thingy.
              Key Bootcamp skills: HTML / CSS / Bootstrap / Javascript AJAX / REACT.js / Developer Mindset / Developer
              Tools / Developer Technologies.</p>
          </div>

          <div className="tab-pane" id="contact">
            <h3>Contact Details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
          </div>

          <div className="tab-pane" id="more">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
          </div>
          
        </div>
        <nav/>
    </div>

  </footer>
  );
}

export default Footer;
