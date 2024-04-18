import React, { useState } from "react";
import AboutMeText from "../components/AboutMeText";

const AboutPage = () => {
  const [isSmile, setIsSmile] = useState(false);

  const makeSmile = () => {
    setTimeout(() => {
      setIsSmile(false);
    }, 2000);
    setIsSmile(true);
  };

  return (
    <AboutMeText isSmile={isSmile} makeSmile={makeSmile} />
    // <div className="pt-16 bg-black min-h-[calc(100vh-40px)]">
    //   <div className="grid sm:grid-cols-2 lg:gap-10 max-w-5xl mx-auto  ">
    //     <div className="px-4 pb-8 sm:pt-24 md:pl-8  text-slate-100  ">
    //       <div className="flex ">
    //         <h1 className="px-2 text-lg mb-4 lg:mb-8 bg-red-500 ">
    //           My name's{" "}
    //           <span className="font-semibold tracking-wider text-3xl md:text-4xl lg:text-5xl ">
    //             Marek Szmyd
    //           </span>
    //         </h1>
    //       </div>
    //       <div className="flex justify-center">
    //         <h2 className=" px-2 lg:text-xl mb-2 bg-blue-400">
    //           I'm an aspiring web developer, trying to change career
    //         </h2>
    //       </div>
    //       <div className="flex">
    //         <h2 className="px-2 lg:text-xl bg-yellow-300 text-slate-800 mb-3 ">
    //           I'm 36 so it's not so easy
    //         </h2>
    //       </div>
    //       <div className="flex justify-end">
    //         <h2 className="px-2 lg:text-xl mb-4 text-right text-slate-700 bg-green-400">
    //           but I'm working hard and trying my best
    //         </h2>
    //       </div>
    //       <div className="flex">
    //         <h3 className="px-2 lg:text-lg bg-pink-400 mb-3">
    //           Hopefully, you are reading it and thinking{" "}
    //         </h3>
    //       </div>

    //       <h3 className="px-2 lg:text-lg text-center italic text-slate-800 bg-cyan-400 mb-3">
    //         'Well, this is the guy! Let's give him a chance'
    //       </h3>
    //       <div className="flex justify-center">
    //         <h3 className="px-2 lg:text-lg text-center mb-6 bg-gray-400">
    //           and you smile...{" "}
    //         </h3>
    //       </div>

    //       <h4 className="px-2 lg:text-lg mb-2 text-center  bg-red-400">
    //         That's the power to change my life!
    //       </h4>
    //       <div className="flex justify-end ">
    //         <div className="flex gap-4 items-center justify-end bg-yellow-500 pr-2">
    //           <h4 className="px-2 lg:text-lg text-slate-800  ">
    //             Think about it and
    //           </h4>
    //           <button
    //             onClick={makeSmile}
    //             className="text-xs font-semibold bg-gradient-to-b from-red-700 via-red-400 to-red-700  text-slate-900 shadow-md rounded-full px-2 pb-[1px] hover:scale-95 transition duration-300"
    //           >
    //             make me smile
    //           </button>
    //           <FaRegSmileWink className=" text-xl text-blue-900 " />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="self-end ">
    //       <img
    //         src={`${isSmile ? img2 : img}`}
    //         alt="profile-image"
    //         className="opacity-100 transition-all duration-300 "
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutPage;
