import React, { useState } from 'react';
import ProjCard from './components/ProjCard/ProjCard';
import CardWrapper from './components/CardWrapper/CardWrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import projects from './components/projects.json';

function App() {
  const [project, selectFunction] = useState(projects); // initially, characters is an array
  
  function selectProject(projId) {
    console.log(new Date(), "Project Selected", projId);
    //when the project is selected, the project page will be shown 
    //where you can click through to the project itself
    //the project page will have some text talking about the project intentions

    // selectProject(projects.filter(f => f.id !== projId));
  }

  return (
    <>
    <Header></Header>  
    <CardWrapper>
      
      
      {projects.map(f => <ProjCard key={f.id} name={f.name}
        image={f.image}
        description={f.description}
        selectFunction={  () => { selectProject(f.id) }     } />)} {/* make this a select function and go to a new page for each project?*/}
   
    </CardWrapper>
    <Footer></Footer>  
    </>
  );
}

export default App;