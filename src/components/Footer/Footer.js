import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer>
      <div className="container-fluid justify-content-center" id="footer">
        {/* <!-- changed the native color to dark using inbuilt CSS from Bootstrap :-) --> */}
        <nav className="nav tabrow justify-content-center nav-pills navbar-dark bg-dark" />
        <nav className="nav justify-content-center tabrow nav-pills flex-md-row">
          <a className="nav-link active tabtn m-1" href="#skills" data-toggle="tab">Skills</a>
          <a className="nav-link tabtn m-1" href="#contact" data-toggle="tab">Contact</a>
          <a className="nav-link tabtn m-1" href="#more" data-toggle="tab">About</a>
        </nav>

        {/* <!-- added py-5 and px-5 for vertical and horizontal padding to tabbed content --> */}
        <div className="tab-content d-none d-lg-block py-5 px-5">
          <div className="tab-pane active skills" id="skills">
            <h3>Bootcamp Skills</h3>
            <p>The EDX Front End Web Development Bootcamp is a seriously intense course to take on, especially if you have any 
              other commitments. This was something I really wanted to learn, and the course has forced some good foundational learning.
              I have very much enjoyed this course and it has challenged me hard all the way through.
              </p>
              <p>
              Key Bootcamp skills: Git / Github Pages / HTML / CSS / Flex / Grid / Bootstrap / JSON / JQuery / Javascript / AJAX / REACT.js / Developer Mindset / 
              Developer Tools / Developer Technologies.  Previously I had only used Git out of all of the above.
              </p>
          </div>

          <div className="tab-pane contact" id="contact">
            <h3>Contact Details</h3>
            <p>There are no real contact details in here, because, guess what, I dont want to be contacted by anyone.
              Here are some dummy deets just for completeness.  Any actual contact should be made via Github
              issues on a per repo basis for tracking purposes.</p>
            <p>
              LinkdIn - nouser@linkdin.com I dont have a real Linkdin account yet
              Github - nouser@github.com - note that if you are a sleuth, you can find this from my repos.
              EmailAddress - nouser@email.com
              PhoneNumber - +447969 69 69 69 (yeah, I wish lol)
            </p>
          </div>

          <div className="tab-pane more" id="more">
            <h3>About Me</h3>
            <p>I am a life long techy, studied Physics, Maths and Electronics in my youth, I have had a fabulously diverse
              rage of job roles over the years, but 10 years ago, I decided I wanted to work in software and became a software
              test engineer, this lead to learning to code in C, C++ and C# as well as core values in TDD and BDD.
              My carrer took a slight diversion from this path as I supported the business by taking over management the IT infrastructure,
              tool management and endpoint management. Last year I had some life changing health issues and decided I wanted to do more
              software Development work. I decided to learn Front end web development to compliment my low level experience.
            </p>
            <p>
              I have been on the EDX Bootcamp which has been hard work, learning technologies, many of which have been completely new
              to me. This has been a steep learning curve but I am glad that I took part. This is a showcase of some of my projects
              that I have created along the way. I hope you enjoy looking through them as much as I did creating them.
            </p>
          </div>

        </div>
        <nav />
      </div>

    </footer>
  );
}

export default Footer;
