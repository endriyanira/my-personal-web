import React from "react";
import python from "../assets/images/skills/python.svg";
import java from "../assets/images/skills/java.svg";
import javascript from "../assets/images/skills/javascript.svg";
import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import mysql from "../assets/images/skills/mySQL.svg";
import postgreSQL from "../assets/images/skills/postgreSQL.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import tailwindCSS from "../assets/images/skills/tailwind.svg";
import reactJS from "../assets/images/skills/reactJs.svg";
import nextJS from "../assets/images/skills/nextJs.svg";
import springboot from "../assets/images/skills/springboot.svg";
import django from "../assets/images/skills/django.svg";
import figma from "../assets/images/skills/figma.svg";
import github from "../assets/images/skills/github.svg";
import gitlab from "../assets/images/skills/gitlab.svg";
import postman from "../assets/images/skills/postman.svg";
import SkillCard from "../components/SkillCard";

const SkillsList = [
  { id: 1, name: "Python", urlImg: python },
  { id: 2, name: "Java", urlImg: java },
  { id: 3, name: "Javascript", urlImg: javascript },
  { id: 4, name: "HTML", urlImg: html },
  { id: 5, name: "CSS", urlImg: css },
  { id: 6, name: "MySQL", urlImg: mysql },
  { id: 7, name: "PostgreSQL", urlImg: postgreSQL },
  { id: 8, name: "Bootstrap", urlImg: bootstrap },
  { id: 9, name: "Tailwind CSS", urlImg: tailwindCSS },
  { id: 10, name: "React Js", urlImg: reactJS },
  { id: 10, name: "Next Js", urlImg: nextJS },
  { id: 10, name: "Springboot", urlImg: springboot },
  { id: 10, name: "Django", urlImg: django },
  { id: 10, name: "Figma", urlImg: figma },
  { id: 10, name: "Github", urlImg: github },
  { id: 10, name: "Gitlab", urlImg: gitlab },
  { id: 10, name: "Postman", urlImg: postman },
];

const Skills = () => {
  return (
    <section className="skills-section content-start items-start gap-6 md:gap-8 flex flex-col flex-nowrap justify-start overflow-x-hidden overflow-y-hidden py-0 px-5 md:px-8 xl:px-[50px] relative">
      <div className="section-detail flex basis-auto flex-col gap-3 justify-start relative text-wrap md:leading-7 xl:leading-8">
        <h1 className="section-title block font-syne text-2xl md:text-[43px] font-bold leading-normal text-left text-primaryLightText dark:text-primaryDarkText">
          <span className="text-secondaryHeadingText">Explore the</span>{" "}
          technical skills{" "}
          <span className="text-secondaryHeadingText">and </span>
          tools{" "}
          <span className="text-secondaryHeadingText">I have learned.</span>
        </h1>
        <h2 className="font-inter text-primaryLightText dark:text-secondaryDarkText text-lg md:text-xl xl:text-[22px] md:leading-7 xl:leading-8 font-light">
          Curious about what I can do? Here’s a quick snapshot of my skills.
        </h2>
        <div className="skills grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-9 justify-center pt-6 md:pt-8">
          {/* skill card */}
          {SkillsList.map((skill) => (
            <SkillCard key={`skillKey-${skill.name}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
