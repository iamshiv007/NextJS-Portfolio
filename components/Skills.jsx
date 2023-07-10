import React, { Fragment } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNodedotjs } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiRedux, SiTailwindcss, SiMui } from "react-icons/si";
import { DiReact, DiMongodb, DiSass } from "react-icons/di";

const Skills = () => {
  return (
    <Fragment>
      <div className="skillsContainer dark:bg-violet-950">
        <h3 className="text-center flex items-center justify-center text-3xl md:text-5xl font-bold p-4 dark:text-[#07d0e5] text-[#c72c6c]">
          <span className="mr-4">
            {" "}
            <FaLaptopCode />
          </span>{" "}
          Skills & Abilities
        </h3>

        <div>
          <div className="mx-[7%] flex gap-8 py-8 flex-wrap justify-center">
            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <AiFillHtml5 color="#F06529" className="text-4xl" />
              <p>HTML</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <FaCss3Alt className="text-4xl" />
              <p>CSS</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <DiJavascript1 className="text-4xl" />
              <p>JavaScript</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <FaBootstrap className="text-4xl" />
              <p>Bootstrap</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <SiMui className="text-4xl" />
              <p>Mui</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <DiReact className="text-4xl" />
              <p> ReactJs</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <SiExpress className="text-4xl" />
              <p>ExpressJs</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <SiNodedotjs className="text-4xl" />
              <p>Nodejs</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <DiMongodb className="text-4xl" />
              <p>Mongodb</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <SiRedux className="text-4xl" />
              <p>Redux</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <DiSass className="text-4xl" />
              <p>Sass</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <SiTailwindcss className="text-4xl" />
              <p>Tailwind CSS</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <BsGit className="text-4xl" />
              <p>Git</p>
            </div>

            <div className="flex flex-col justify-around items-center p-3 border border-solid border-black w-32 h-32 rounded-lg">
              <BsGithub className="text-4xl" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
