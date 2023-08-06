import React, { Fragment } from "react";
import { skillsData } from "./SkillsData";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <Fragment>
      <section id="skills">
        <div className="dark:bg-[#000000d0] py-8">
          <h3 className="sectionHeading">
            <span className="mr-4">
              <FaLaptopCode />
            </span>
            Skills
          </h3>

          <div>
            <div className="flex flex-wrap gap-6 mx-6 justify-center">
              {skillsData.map((skill, key) => (
                <div
                  key={key}
                  className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white md:w-32 md:h-32 w-20 h-20 rounded-lg"
                >
                  {skill.icon}
                  <p className="md:text-base text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
