import React from "react";
import { Link, NavLink } from "react-router-dom";

const PagesLinks = () => {
  return (
    <ul className="flex flex-col sm:flex-row gap-x-8 gap-y-6 text-white ">
      <li>
        <NavLink
          to="/about"
          className=" tracking-wider pr-10 border-b border-red-500 hover:font-semibold  hover:pr-0 hover:pl-10 transition-all duration-300 "
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid blue " : "",
          })}
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className="tracking-wider pr-10 border-b border-red-500 hover:font-semibold hover:pr-0 hover:pl-10 transition-all duration-300"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid blue " : "",
          })}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="tracking-wider pr-10 border-b border-red-500 hover:font-semibold hover:pr-0 hover:pl-10 transition-all duration-300"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid blue " : "",
          })}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default PagesLinks;
