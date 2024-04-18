import Title from "./Title";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className=" py-20 px-2 bg-black ">
      <div className="max-w-5xl mx-auto">
        <Title text="my projects" />
        <div className="mt-10 flex flex-col gap-6 overflow-hidden  ">
          {projects.map((project) => {
            return <ProjectCard key={project.url} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
