import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className="home content-start items-start gap-[106px] lg:gap-[250px] flex flex-col flex-nowrap justify-start overflow-y-hidden overflow-x-hidden p-0 relative">
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Experience />
    </div>
  );
};

export default Home;
