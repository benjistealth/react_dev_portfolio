import projects from '../../projects.json';
import ProjCard from '../../ProjCard/ProjCard';
import CardWrapper from '../../CardWrapper/CardWrapper';
// required to trigger page changes via router from JS
import { useNavigate } from "react-router-dom";


function ProjectGallery(props) {

    const navigate = useNavigate();
    
    function GoToProject(page) {

        navigate(page);

        console.log('Page chosen ', page);
        //when the project is selected, the chosen project page will be shown 
        //where you can click through to the project itself
        //the project page will have some text talking about the project
    }

    return (
        <div className="container">
            <CardWrapper>
            {projects.map(f => <ProjCard key={f.id} name={f.name} repoURL={f.repoURL} deployedUrl={f.deployedUrl}
                    image={f.image}
                    description={f.description}
                    selectFunction={() => { GoToProject(f.page) }} />)} {/* make this a select function above and go to a new page for each project?*/}

            </CardWrapper>
        </div>
    );
}

export default ProjectGallery;
