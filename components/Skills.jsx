import React, { Fragment, useContext } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNodedotjs, SiNextdotjs, SiVercel, SiNetlify } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiRedux, SiTailwindcss, SiMui } from "react-icons/si";
import { DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BlogContext } from "@/contextApi/blogContext";

const Skills = () => {
  const { dark, setDark } = useContext(BlogContext);

  return (
    <Fragment>
      <section id="skills">
        <div className="skillsContainer pt-6 dark:bg-[#000000d0]">
          <h3 className="text-center flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
            <span className="mr-4">
              {" "}
              <FaLaptopCode />
            </span>{" "}
            Skills & Abilities
          </h3>

          <div>
            <div className="mx-[7%] flex gap-8 py-8 flex-wrap justify-center">
              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <DiReact color="#53c1de" className="text-4xl" />
                <p>ReactJs</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiNodedotjs color="#4caf50" className="text-4xl" />
                <p>Nodejs</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <DiMongodb color="#4caf50" className="text-4xl" />
                <p>Mongodb</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <FaBootstrap color="#673ab7" className="text-4xl" />
                <p>Bootstrap</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiMui color="#29b6f6" className="text-4xl" />
                <p>Mui</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiNextdotjs
                  color={dark ? "white" : `#000`}
                  className="text-4xl"
                />
                <p>NextJS</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <DiJavascript1 color="#ffd600" className="text-4xl" />
                <p>JavaScript</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiRedux color="#7e57c2" className="text-4xl" />
                <p>Redux</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiExpress color="#555555" className="text-4xl" />
                <p>ExpressJs</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <DiSass color="#f06292" className="text-4xl" />
                <p>Sass</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiTailwindcss color="#4caf50" className="text-4xl" />
                <p>Tailwind CSS</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <AiFillHtml5 color="#fa6700" className="text-4xl" />
                <p>HTML5</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <FaCss3Alt color={"#039be5"} className="text-4xl" />
                <p>CSS3</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <BsGit color="#f4511e" className="text-4xl" />
                <p>Git</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <BsGithub color="#c9d1d9" className="text-4xl" />
                <p>Github</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiVercel
                  color={dark ? `white` : "#000"}
                  className="text-4xl"
                />
                <p>Vercel</p>
              </div>

              <div className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white w-32 h-32 rounded-lg">
                <SiNetlify color={`#31b5ba`} className="text-4xl" />
                <p>Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
