import React from "react";
import { useInView } from "react-intersection-observer";

const Title = ({ text }) => {
  const { ref, inView, entry } = useInView({
    // threshold: 1,
    // rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <div className="relative pb-8  text-white  ">
      <div
        ref={ref}
        className={`absolute top-0 left-0 ${
          !inView ? "translate-x-full mr-8" : "translate-x-0"
        } transition-all duration-[2s]`}
      >
        <h1 className="text-2xl sm:text-3xl  border-b border-red-500 pb-2 pl-4 tracking-widest text-white ">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Title;
