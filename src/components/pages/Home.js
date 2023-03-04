import React from "react";
import projects from '../projects.json';
import ProjCard from '../ProjCard/ProjCard';
import CardWrapper from '../CardWrapper/CardWrapper';
// import React, { useState } from 'react';

function Home() {
    // const [project, openProjectPage] = useState(projects); // initially, characters is an array

    function selectProject(name) {
       
        console.log("Project Selected", name);
        //when the project is selected, the project page will be shown 
        //where you can click through to the project itself
        //   <Routes>
        //   <Route path={"home"} element={<Home />} />
        // </Routes>
        
        //the project page will have some text talking about the project intentions
    }

    return (
        <div>
            <CardWrapper>

                {projects.map(f => <ProjCard key={f.id} name={f.name}
                    image={f.image}
                    description={f.description}
                    selectFunction={() => { selectProject(f.name) }} />)} {/* make this a select function above and go to a new page for each project?*/}

            </CardWrapper>
        </div>
    );
}

export default Home;
