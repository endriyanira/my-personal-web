import React from "react";

const Experience = () => {
  return (
    <section className="experience-section content-start items-start gap-6 md:gap-8 flex flex-col flex-nowrap justify-start overflow-x-hidden overflow-y-hidden py-0 px-5 md:px-8 xl:px-[50px] relative">
      <div className="section-detail flex basis-auto flex-col gap-3 justify-start relative text-wrap md:leading-7 xl:leading-8">
        <h1 className="section-title block font-syne text-2xl md:text-[43px] font-bold leading-normal text-left text-primaryLightText dark:text-primaryDarkText">
          <span className="text-secondaryHeadingText">Learn about my </span>{" "}
          professional journey{" "}
          <span className="text-secondaryHeadingText">and the </span> hands-on
          experience<span className="text-secondaryHeadingText">.</span>
        </h1>
      </div>
    </section>
  );
};

export default Experience;
