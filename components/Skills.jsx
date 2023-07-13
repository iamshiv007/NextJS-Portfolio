import React, { Fragment } from "react";
import { skillsData } from "./SkillsData";
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <Fragment>
      <section id="skills">
        <div className="skillsContainer pt-6 dark:bg-[#000000d0]">
          <h3 className="text-center flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
            <span className="mr-4">
              {" "}
              <FaLaptopCode />
            </span>{" "}
            Skills
          </h3>

          <div>
            <div className="mx-[7%] flex gap-8 py-8 flex-wrap justify-center">
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
