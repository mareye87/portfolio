import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import { skills } from "../data";

const Skills = () => {
  const ref = useRef();

  let x = 0;

  const updateGallery = () => {
    if (ref.current) {
      ref.current.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    }

    //to make it rotate automatically every 3s when we lead the page:
    const timer = setTimeout(() => {
      x -= 22.5;
      updateGallery();
    }, 2000);
  };

  useEffect(() => {
    updateGallery();
  }, []);

  return (
    <div className="py-20 px-2  bg-black text-white ">
      <div className="max-w-5xl mx-auto">
        <Title text="technologies" />
        <div className="skills  ">
          <div ref={ref} className="image-container text-6xl md:8xl">
            <span style={{ "--i": "1" }} className="span-style">
              {/* <FaHtml5 className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[0]}
              </div>
            </span>
            <span style={{ "--i": "2" }} className="span-style">
              {/* <FaCss3 className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[1]}
              </div>
            </span>
            <span style={{ "--i": "3" }} className="span-style">
              {/* <IoLogoJavascript className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[2]}
              </div>
            </span>
            <span style={{ "--i": "4" }} className="span-style">
              {/* <FaReact className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[3]}
              </div>
            </span>
            <span style={{ "--i": "5" }} className="span-style">
              {/* <SiTailwindcss className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[4]}
              </div>
            </span>
            <span style={{ "--i": "6" }} className="span-style">
              {/* <FaNode className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[5]}
              </div>
            </span>
            <span style={{ "--i": "7" }} className="span-style">
              {/* <SiReactquery className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[6]}
              </div>
            </span>
            <span style={{ "--i": "8" }} className="span-style">
              {/* <SiSupabase className="absolute top-0 left-0 w-full bg-black px-2" /> */}
              <div className="absolute top-0 left-0 w-full bg-black px-2">
                {skills[7]}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
