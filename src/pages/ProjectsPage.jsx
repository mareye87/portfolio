import React from "react";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <div className=" bg-gray-950 relative">
      <div className="bg-gradient-to-b from-gray-900 via-gray-500 to-gray-900 backdrop-blur-3xl  fixed top-0 left-0 h-12 w-full"></div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
