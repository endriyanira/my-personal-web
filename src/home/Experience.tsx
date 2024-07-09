import React from "react";
import ui from "../assets/images/experiences/univIndo.svg";
// import sealabs from "../assets/images/experiences/sealabs.svg";
// import hci from "../assets/images/experiences/hci.svg";
// import devcamp from "../assets/images/experiences/devcamp.svg";
// import justika from "../assets/images/experiences/justika.svg";

// const ExperiencesList = [];

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
        <div className="experiences grid grid-cols-1 gap-5 justify-center border-2">
          <div className="experience-card flex flex-row border-[2px] gap-4 justify-start items-start relative bg-experienceCardBg p-3">
            <img src={ui} alt="universitas-indonesia" className="items-start" />
            <div className="experience-detail flex flex-col gap-3 justify-start items-start relative font-inter">
              <h4 className="experience-company  text-lg font-semibold text-primaryLightText dark:text-primaryDarkText">
                Faculty of Computer Science, University of Indonesia
              </h4>
              <h6 className="experience-rol text-base text-secondaryDarkText">
                Teaching Assistant of Enterprise Application Architecture and
                Programming
              </h6>
              <p className="experience-period text-secondaryDarkText text-wrap">
                Aug 2023 - Jan 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
