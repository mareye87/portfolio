import React from "react";
import AsideLinks from "./AsideLinks";
const Aside = ({ showAside, setShowAside, isHidden, setIsHidden }) => {
  return (
    <aside
      className={` absolute top-0 left-0 w-full h-screen z-30 bg-[rgba(255,255,255,0.7)] backdrop-blur-md pt-24 ${
        showAside
          ? " translate-y-0 opacity-100 "
          : " -translate-y-full opacity-0 "
      } transition duration-500`}
    >
      <div
        onClick={() => {
          setShowAside(false);
          setIsHidden(!isHidden);
        }}
      >
        <AsideLinks isHidden={isHidden} />
      </div>
    </aside>
  );
};

export default Aside;
