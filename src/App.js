import React, { useState } from 'react';
import ProjCard from './components/ProjCard/ProjCard';
import CardWrapper from './components/CardWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import characters from './friends.json';

function App() {
  const [projects, setFriends] = useState(characters); // initially, characters is an array
  
  function selectProject(projId) {
    console.log(new Date(), "Project Selected", projId);
    //when the project is selected, the project page will be shown

    setFriends(projects.filter(f => f.id !== projId));
  }

  return (
    <>
    <Header></Header>  
    <CardWrapper>
      
      
      {projects.map(f => <ProjCard key={f.name} name={f.name}
        image={f.image}
        occupation={f.occupation}
        location={f.location}
        removeFunction={  () => { selectProject(f.id) }     } />)} {/* make this a select function and go to a new page for each project?*/}
   
    </CardWrapper>
    <Footer></Footer>  
    </>
  );
}

export default App;