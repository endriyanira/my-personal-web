import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div className="home content-center items-center gap-[106px] flex flex-col flex-nowrap justify-start overflow-y-hidden overflow-x-hidden p-0 relative">
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;
