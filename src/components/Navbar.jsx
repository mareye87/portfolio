import React, { useState, useRef, useEffect } from "react";
import PagesLinks from "./PagesLinks";
import { HiBars2 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Aside from "./Aside";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showAside, setShowAside] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      navScrollEffect();
    });
  }, []);

  const navScrollEffect = () => {
    if (navRef.current) {
      navRef.current.style.backdropFilter = "blur(10px)";
    }
    if (window.scrollY === 0) {
      navRef.current.style.backdropFilter = "blur(2px)";
    }
  };

  return (
    <nav
      ref={navRef}
      className=" bg-[rgba(255,255,255,0.3)] backdrop-blur-[2px] border-b border-gray-500 shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-5xl flex items-center justify-between py-2 px-2 mx-auto relative   ">
        <Link to="/">
          <h1
            className="text-3xl sm:text-4xl font-bold"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            m<span className="text-red-600">.</span>
          </h1>
        </Link>

        <div
          className="sm:hidden text-4xl mr-2 z-50"
          onClick={() => {
            setShowAside(!showAside);
            setIsHidden(!isHidden);
          }}
        >
          {showAside ? <AiOutlineClose /> : <HiBars2 />}
        </div>

        <div className="hidden sm:block">
          <PagesLinks />
        </div>
        <Aside
          showAside={showAside}
          setShowAside={setShowAside}
          isHidden={isHidden}
          setIsHidden={setIsHidden}
        />
      </div>
    </nav>
  );
};

export default Navbar;
