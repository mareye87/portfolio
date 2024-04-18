import React from "react";
import { Link, NavLink } from "react-router-dom";

const AsideLinks = ({ isHidden }) => {
  return (
    <div
      className={` flex flex-col justify-center text-center gap-8 mt-24 text-xl font-semibold tracking-widest  text-gray-800 `}
    >
      <NavLink
        to="/about"
        className={` tracking-wider shadow-lg bg-gradient-to-b from-gray-800 via-slate-300 to-gray-800 p-4 ${
          isHidden ? "-translate-y-[700px]" : "translate-y-0"
        } transition-all duration-[1200ms]`}
      >
        About Me
      </NavLink>

      <Link
        to="/projects"
        className={`tracking-wider shadow-lg bg-gradient-to-b from-gray-800 via-slate-300 to-gray-800 p-4 ${
          isHidden ? "-translate-y-[700px]" : "translate-y-0"
        } transition-all duration-[1000ms]`}
      >
        Projects
      </Link>

      <Link
        to="/contact"
        className={`tracking-wider selection:shadow-lg bg-gradient-to-b from-gray-800 via-slate-300 to-gray-800 p-4 ${
          isHidden ? "-translate-y-[700px]" : "translate-y-0"
        } transition-all duration-[800ms]`}
      >
        Contact
      </Link>
    </div>
  );
};

export default AsideLinks;
