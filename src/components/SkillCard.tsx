import React from "react";

interface SkillType {
  id: number;
  name: string;
  urlImg: string;
}

interface SkillCardProps {
  skill: SkillType;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="skill-card flex flex-col gap-3 justify-center items-center">
      <img className="items-center" src={skill.urlImg} alt={skill.name} />
      <p className="text-center justify-center items-center text-secondaryHeadingText">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
