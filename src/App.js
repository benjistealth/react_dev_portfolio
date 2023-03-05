import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import Project4 from './components/pages/Project4';
import Project5 from './components/pages/Project5';
import Project6 from './components/pages/Project6';

function App() {


  return (
    <>
    <Header></Header>  
    <Router>
      <div>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="Project1" element={<Project1 />} />
          <Route path="Project2" element={<Project2 />} />
          <Route path="Project3" element={<Project3 />} />
          <Route path="Project4" element={<Project4 />} />
          <Route path="Project5" element={<Project5 />} />
          <Route path="Project6" element={<Project6 />} />
          {/* Define a route that will have descendant routes */}
          {/* <Route path="contact/*" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
     
    </>
  );
}

export default App;