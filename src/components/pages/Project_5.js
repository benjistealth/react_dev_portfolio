import React from "react";

function Project5() {
  return (
    <div>
      <h1 className="text-center">Project 5</h1>
      <p>
        Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no
        mutat ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo
        ne, eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
      </p>
      <Link to="home" role="button" className="btn btn-link">
        Back to Home Page
      </Link>
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Project5;
