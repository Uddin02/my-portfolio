import React from "react";

const SkillCard = ({ skill }) => {
  const { color, icon, name } = skill;

  return (
    <div>
      <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
        <p className="flex items-center relative h-14 bottom-0 hover:bottom-2 transition-all duration-300">
          <span className={`${color} mr-2 text-xl`}>{icon}</span>
          <span className="">{name}</span>
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
