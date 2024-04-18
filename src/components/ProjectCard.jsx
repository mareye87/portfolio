import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }) => {
  const { img, alt, url, title, tools } = project;

  const { ref, inView, entry } = useInView({
    // threshold: 1,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div
      ref={ref}
      className={`hover:scale-[99%]  transition duration-500 shadow-lg mt-16 `}
    >
      <a
        href={url}
        target="new-tab"
        className={` ${
          inView
            ? " opacity-100 translate-y-0 scale-100"
            : " opacity-0 translate-y-full scale-0 "
        } grid grid-cols-2 gap-4 transition duration-[1500ms] border-r-2 border-white `}
      >
        <img
          src={img}
          alt={alt}
          className="rounded-md  w-full h-auto object-contain   max-h-48 "
        />

        <div className="p-2 sm:mt-4 md:mt-8 flex flex-col gap-4 lg:gap-y-8">
          <h1 className=" sm:text-2xl lg:text-3xl text-white ">{title}</h1>
          <ul className=" flex gap-2 sm:gap-4 flex-wrap ">
            {tools.map((tool, index) => {
              return (
                <div key={index} className=" sm:text-3xl lg:text-4xl">
                  {tool}
                </div>
              );
            })}
          </ul>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
