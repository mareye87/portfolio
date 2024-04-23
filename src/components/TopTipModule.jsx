import React, { useEffect } from "react";
import { FaRegSmileWink } from "react-icons/fa";

import { useState } from "react";

const TopTipModule = () => {
  const [showModule, setShowModule] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModule(true);
    }, 1000);
    window.addEventListener("scroll", () => {
      setShowModule(false);
    });
  }, []);

  return (
    <div
      onClick={() => {
        setShowModule(false);
      }}
      className={`h-screen w-full absolute top-0 left-0 grid place-items-center z-10  ${
        showModule ? "opacity-100" : "opacity-0 -translate-y-full"
      } transition-all duration-1000`}
    >
      <div className="w-2/3 max-w-56  bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-md shadow-md text-slate-100 relative">
        <h1 className="text-2xl bg-red-600 p-1 text-center rounded-t-md">
          Top Tip
        </h1>
        <div className="p-4 text-lg text-center tracking-wider">
          <p>Take it easy</p>
          <p>Enjoy the site and don't scroll too fast</p>
          <div className="flex gap-1 items-end justify-center">
            <p>There's not much content anyway </p>
            <FaRegSmileWink className="text-3xl" />
          </div>
          <p>Yet!</p>
        </div>
      </div>
    </div>
  );
};

export default TopTipModule;
