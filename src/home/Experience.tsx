import React from "react";
import ui from "../assets/images/experiences/univIndo.svg";
import sealabs from "../assets/images/experiences/sealabs.svg";
import hci from "../assets/images/experiences/hci.svg";
import devcamp from "../assets/images/experiences/devcamp.svg";
import justika from "../assets/images/experiences/justika.svg";
import ExperienceCard from "../components/ExperienceCard";

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
    startPeriod: "Aug 2023",
    endPeriod: "Jan 2024",
    imgUrl: ui,
  },
  {
    id: 2,
    company: "Sea Labs Indonesia (Shopee)",
    role: "Frontend Engineer Bootcamp Trainee",
    startPeriod: "Aug 2023",
    endPeriod: "Dec 2023",
    imgUrl: sealabs,
  },
  {
    id: 3,
    company: "Home Credit Indonesia",
    role: "Backend Developer Intern",
    startPeriod: "Aug 2022",
    endPeriod: "Dec 2023",
    imgUrl: hci,
  },
  {
    id: 4,
    company: "Faculty of Computer Science, University of Indonesia",
    role: "Teaching Assistant of Enterprise Application Architecture and Programming",
    startPeriod: "Sept 2022",
    endPeriod: "Jan 2023",
    imgUrl: ui,
  },
  {
    id: 5,
    company: "Tokopedia Devcamp 2023",
    role: "Web Platform Frontend Trainee",
    startPeriod: "Oct 2022",
    endPeriod: "Oct 2022",
    imgUrl: devcamp,
  },
  {
    id: 6,
    company: "Justika",
    role: "Frontend Developer Intern",
    startPeriod: "Jan 2022",
    endPeriod: "Jun 2022",
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
          {ExperiencesList.map((experience, i) => (
            <div
              key={`ExpKey${experience.id.toString()}`}
              className="relative mb-4 pb-3"
            >
              <ExperienceCard experience={experience} />
              {/* {i !== ExperiencesList.length - 1 && (
                <div className="border-r-2 h-8 t-0 absolute left-[50%]"></div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
