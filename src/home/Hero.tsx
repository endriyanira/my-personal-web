import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import profile from "../assets/images/profile/profile.svg";

const Hero = () => {
  return (
    <section className="hero-section flex content-start items-start gap-[27px] md:gap-[38px] xl:gap-[62px] basis-auto flex-col flex-nowrap xl:flex-row p-0 relative justify-center overflow-x-hidden overflow-y-hidden">
      {/* top hero section*/}
      <div className="relative hero profile-title items-start content-start gap-0 flex flex-col basis-auto xl:basis-0 grow-0 xl:grow-[1px] xl:shrink-0 flex-nowrap justify-start px-[20px] md:pl-[40px] xl:pl-[50px] md:pr-0 pt-[160px] text-2xl md:text-[43px] xl:text-[48px] font-syne font-bold dark:text-secondaryDarkText text-secondaryHeadingText">
        {/* title top */}
        <div className="profile-title-detail flex flex-row gap-3 md:gap-6 justify-start items-start md:items-center content-start md:content-center">
          <img
            src={profile}
            alt="profile"
            className="w-[61px] md:w-[106px] xl:w-[123px]"
          />
          <h1 className="profile-title dark:text-secondaryHeadingText">
            &nbsp;Hello!
          </h1>
        </div>
        {/* title bottom */}
        <div className="profile-title-desc flex basis-auto flex-col justify-start text-wrap xl:w-[550px]">
          <h1 className="leading-8 md:leading-[50px] xl:leading-[60px] dark:text-secondaryHeadingText text-start text-wrap">
            I'am{" "}
            <span className="dark:text-primaryDarkText text-primaryLightText">
              Ayu
            </span>{" "}
            — Frontend{" "}
            <span className="dark:text-primaryDarkText text-primaryLightText">
              Dev Enthuasiast
            </span>
          </h1>
        </div>
      </div>
      {/* bottom hero section*/}
      <div className="hero profile-desc content-start items-start flex flex-col basis-auto flex-nowrap xl:flex-grow-[2] xl:basis-0 gap-9 xl:gap-[40px] justify-start xl:justify-start px-[20px] md:px-[40px] xl:pb-0 xl:pl-0 xl:pr-[50px] xl:py-[160px] relative">
        <div className="items-center content-center gap-4 md:gap-5 xl:gap-6 flex basis-auto flex-col flex-nowrap justify-center p-0 relative">
          <h4 className="text-primaryLightText dark:text-primaryDarkText text-lg md:text-xl xl:text-[22px] md:leading-7 xl:leading-8 font-inter font-light">
            I recently graduated with a degree in Computer Science from
            University of Indonesia. I am excited to start my journey in
            frontend web development and bring creative and functional designs
            to life.
          </h4>
          <p className="text-sm md:text-lg font-inter font-light text-secondaryHeadingText dark:text-secondaryDarkText ">
            I am currently expanding my knowledge through online courses and
            collaborating on open-source projects to further enhance my skills
            as a fresh graduate in frontend development.
          </p>
        </div>
        <div className="contact content-center items-center gap-6 flex basis-auto flex-row p-0 relative">
          <div className="contact-item text-xl md:text-2xl contents">
            <a
              href={"https://github.com/endriyanira"}
              className="transition ease-in-out duration-500 hover:scale-110"
            >
              <IoLogoGithub />
            </a>
          </div>
          <div className="contact-item text-xl md:text-2xl contents">
            <a
              href="https://www.linkedin.com/in/endriyani-rahayu/"
              className="transition ease-in-out duration-500 hover:scale-110"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
