import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme-section content-start items-start gap-6 md:gap-8 flex flex-col basis-auto flex-nowrap justify-start overflow-x-hidden overflow-y-hidden py-0 px-5 md:px-8 xl:px-[50px] relative">
      <div className="section-detail flex basis-auto flex-col gap-2 md:gap-3 justify-start relative text-wrap md:leading-7 xl:leading-8">
        <h1 className="section-title block font-syne text-2xl md:text-[43px] font-bold leading-normal text-left">
          About Me
        </h1>
        <h2 className="font-syne font-normal text-secondaryHeadingText dark:text-secondaryDarkText text-[23px]">
          Who Am I?
        </h2>
        <h4 className="text-primaryLightText dark:text-primaryDarkText text-lg md:text-xl xl:text-[22px] md:leading-7 xl:leading-8 font-inter font-light">
          I am a fresh graduate with a keen interest in frontend development.
          Throughout my academic journey, I have honed my skills in frontend web
          development and various frontend frameworks. My goal is to create
          visually appealing and user-friendly websites.
        </h4>
      </div>
    </section>
  );
};

export default AboutMe;
