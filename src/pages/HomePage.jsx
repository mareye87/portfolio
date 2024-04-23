import React, { useState, useEffect } from "react";
import HeroText from "../components/HeroText";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BluredBrake from "../components/BluredBrake";
import TopTipModule from "../components/TopTipModule";

const HomePage = () => {
  return (
    <main className="relative">
      <HeroText />
      <Skills />
      <BluredBrake />
      <Projects />
    </main>
  );
};

export default HomePage;
