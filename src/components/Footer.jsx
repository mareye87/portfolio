import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-gradient-to-b from-gray-600 via-gray-900 to-gray-600 text-slate-100  h-10">
      <ul className="flex justify-center items-center gap-10 md:text-xl">
        <li>
          <a target="new-tab" href="https://github.com/mareye87">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            target="new-tab"
            href="https://www.linkedin.com/in/marek-szmyd-026540301"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a target="new-tab" href="https://www.facebook.com/marek.szmyd.5">
            <FaSquareFacebook />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
