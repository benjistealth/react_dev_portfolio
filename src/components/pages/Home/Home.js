import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import About from '../AboutContactMore/About';
import Contact from '../AboutContactMore/Contact';
import More from '../AboutContactMore/More';
import ProjectGallery from '../ProjectPages/ProjectGallery';



function Home() {

    return (
        <div className="container">

            {/* Link to About Page */}
            <Link to="about">
                <button className="btn btn-about"> about</button>
            </Link>
            <Routes>
                <Route path="About" element={<About />} />
            </Routes>

            {/* Link to Contact Page */}
            <Link to="contact">
                <button className="btn btn-contact">contact</button>
            </Link>
            <Routes>
                <Route path="Contact" element={<Contact />} />
            </Routes>

            {/* Link to More Page */}
            <Link to="more">
                <button className="btn btn-more">more</button>
            </Link>
            <Routes>
                <Route path="More" element={<More />} />
            </Routes>

            {/* Link to Project Gallery */}
            <Link to="projectgallery">
                <button className="btn btn-project-gallery">project gallery</button>
            </Link>
            <Routes>
                <Route path="ProjectGallery" element={<ProjectGallery />} />
            </Routes>
        </div>
    );
}

export default Home;
