import React from "react";

interface ExperienceType {
  id: number;
  company: string;
  role: string;
  startPeriod: string;
  endPeriod: string;
  imgUrl: string;
}

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card flex flex-row gap-4 justify-start items-start relative bg-experienceCardLightBg  dark:bg-experienceCardBg p-4 lg:p-6 rounded-xl">
      <img
        src={experience.imgUrl}
        alt="universitas-indonesia"
        className="items-start w-12 md:w-16"
      />
      <div className="experience-detail flex flex-col gap-3 justify-start items-start relative font-inter">
        <h4 className="experience-company text-lg xl:text-xl font-semibold text-primaryDarkText dark:text-primaryDarkText">
          {experience.company}
        </h4>
        <h6 className="experience-rol text-base text-experienceCardLightDetail">
          {experience.role}
        </h6>
        <p className="experience-period text-experienceCardLightDetail text-wrap">
          {experience.startPeriod} - {experience.endPeriod}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
