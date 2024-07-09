import React from "react";
import ui from "../assets/images/experiences/univIndo.svg";
import sealabs from "../assets/images/experiences/sealabs.svg";
import hci from "../assets/images/experiences/hci.svg";
import devcamp from "../assets/images/experiences/devcamp.svg";
import justika from "../assets/images/experiences/justika.svg";

interface ExperienceType {
  id: number;
  company: string;
  role: string;
  startPeriod: string;
  endPeriod: string;
  imgUrl: string;
}

const ExperiencesList: ExperienceType[] = [
  {
    id: 1,
    company: "Faculty of Computer Science, University of Indonesia",
    role: "Teaching Assistant of Enterprise Application Architecture and Programming",
    startPeriod: "1/8/2023",
    endPeriod: "1/1/2024",
    imgUrl: ui,
  },
  {
    id: 2,
    company: "Sea Labs Indonesia (Shopee)",
    role: "Frontend Engineer Bootcamp Trainee",
    startPeriod: "1/8/2023",
    endPeriod: "1/12/2023",
    imgUrl: sealabs,
  },
  {
    id: 3,
    company: "Home Credit Indonesia",
    role: "Backend Developer Intern",
    startPeriod: "1/8/2022",
    endPeriod: "1/12/2022",
    imgUrl: hci,
  },
  {
    id: 4,
    company: "Faculty of Computer Science, University of Indonesia",
    role: "Teaching Assistant of Enterprise Application Architecture and Programming",
    startPeriod: "1/9/2022",
    endPeriod: "1/1/2023",
    imgUrl: ui,
  },
  {
    id: 5,
    company: "Tokopedia Devcamp 2023",
    role: "Web Platform Frontend Trainee",
    startPeriod: "1/10/2022",
    endPeriod: "1/10/2022",
    imgUrl: devcamp,
  },
  {
    id: 6,
    company: "Justika",
    role: "Frontend Developer Intern",
    startPeriod: "1/1/2022",
    endPeriod: "1/6/2022",
    imgUrl: justika,
  },
];

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
        <div className="experiences grid grid-cols-1 gap-5 justify-center pt-6 md:pt-8">
          {ExperiencesList.map((experience) => (
            <div
              key={`ExpKey${experience.id.toString()}`}
              className="experience-card flex flex-row gap-4 justify-start items-start relative bg-experienceCardBg p-3 rounded-xl"
            >
              <img
                src={experience.imgUrl}
                alt="universitas-indonesia"
                className="items-start"
              />
              <div className="experience-detail flex flex-col gap-3 justify-start items-start relative font-inter">
                <h4 className="experience-company  text-lg font-semibold text-primaryLightText dark:text-primaryDarkText">
                  {experience.company}
                </h4>
                <h6 className="experience-rol text-base text-secondaryDarkText">
                  {experience.role}
                </h6>
                <p className="experience-period text-secondaryDarkText text-wrap">
                  Aug 2023 - Jan 2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
