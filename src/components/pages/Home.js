// import React from "react";
import projects from '../projects.json';
import ProjCard from '../ProjCard/ProjCard';
import CardWrapper from '../CardWrapper/CardWrapper';

import { useNavigate } from "react-router-dom";


function Home(props) {

    const navigate = useNavigate();
    function UseProject(page) {
        
        
        console.log("Project Selected", page);
        navigate(page);
        //when the project is selected, the project page will be shown 
        //where you can click through to the project itself
        
        //the project page will have some text talking about the project intentions
    }

    return (
        <div className="container">
            <CardWrapper>

                {projects.map(f => <ProjCard key={f.id} name={f.name}
                    image={f.image}
                    description={f.description}
                    selectFunction={() => { UseProject(f.page) }} />)} {/* make this a select function above and go to a new page for each project?*/}

            </CardWrapper>
        </div>
    );
}

export default Home;
