import { useEffect, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";

const HeroText = () => {
  const bgRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      bgScrollEffect();
    });
  }, []);

  const bgScrollEffect = () => {
    if (bgRef.current) {
      bgRef.current.style.opacity = 1 - window.scrollY / 1000;
      bgRef.current.style.backgroundSize = 100 - window.scrollY / 25 + "%";
    }
    if (bgRef.current && window.scrollY === 0) {
      bgRef.current.style.backgroundSize = "cover";
    }
  };

  return (
    <div
      ref={bgRef}
      className="pt-24 pb-10 px-2 w-full h-screen bg-[url('src/assets/images/landing-bg-mobile2.jpg')] sm:bg-[url('src/assets/images/landing-bg.jpg')] bg-cover bg-top bg-fixed   "
    >
      <div className="h-full flex flex-col justify-between ">
        <div className="flex flex-col justify-center text-center gap-y-4 text-slate-900">
          <h1 className="text-4xl tracking-widest font-semibold ">welcome</h1>
          <div className="flex items-center justify-center text-2xl font-semibold">
            <h2 className=" font-semibold">m</h2>
            <h2 className="text-red-500 font-bold">.</h2>
            <h2>web</h2>
            <h2>dev</h2>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-x-4 hover:gap-x-6 transition-all duration-300"
          onClick={() => {
            window.scroll(0, 500);
          }}
        >
          <SlArrowDown className="text-2xl text-red-500 animate-bounce cursor-pointer  hover:translate-y-2 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
