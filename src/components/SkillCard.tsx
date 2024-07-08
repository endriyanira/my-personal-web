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
    <div
      key={`skillKey-${skill.name}`}
      className="skill-card grid grid-rows-2 gap-1 justify-center items-center"
    >
      <img src={skill.urlImg} alt={skill.name} />
      <p className="text-center text-secondaryHeadingText">{skill.name}</p>
    </div>
  );
};

export default SkillCard;
