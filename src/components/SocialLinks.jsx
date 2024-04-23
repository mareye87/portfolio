import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <ul className="flex justify-around sm:justify-center sm:gap-12 items-center w-full  md:text-xl">
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
  );
};

export default SocialLinks;
