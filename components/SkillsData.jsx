import { AiFillHtml5 } from "react-icons/ai";
import { SiNodedotjs, SiNextdotjs, SiVercel, SiNetlify } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiRedux, SiTailwindcss, SiMui } from "react-icons/si";
import { DiReact, DiMongodb, DiSass } from "react-icons/di";

export const skillsData = [
  {
    icon: <DiReact color="#53c1de" className="md:text-4xl text-2xl" />,
    name: "ReactJs",
  },
  {
    icon: <SiNodedotjs color="#4caf50" className="md:text-4xl text-2xl" />,
    name: "NodeJS",
  },
  {
    icon: <DiMongodb color="#4caf50" className="md:text-4xl text-2xl" />,
    name: "MongoDB",
  },
  {
    icon: <FaBootstrap color="#673ab7" className="md:text-4xl text-2xl" />,
    name: "Bootstrap1",
  },
  {
    icon: <SiMui color="#29b6f6" className="md:text-4xl text-2xl" />,
    name: "Mui",
  },
  {
    icon: (
      <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
    ),
    name: "NextJS",
  },
  {
    icon: <DiJavascript1 color="#ffd600" className="md:text-4xl text-2xl" />,
    name: "JavaScript",
  },
  {
    icon: <SiRedux color="#7e57c2" className="md:text-4xl text-2xl" />,
    name: "Redux",
  },
  {
    icon: <SiExpress color="#555555" className="md:text-4xl text-2xl" />,
    name: "ExpressJS",
  },
  {
    icon: <DiSass color="#f06292" className="md:text-4xl text-2xl" />,
    name: "Sass",
  },
  {
    icon: <SiTailwindcss color="#4caf50" className="md:text-4xl text-2xl" />,
    name: "Tailwind",
  },
  {
    icon: <AiFillHtml5 color="#fa6700" className="md:text-4xl text-2xl" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt color={"#039be5"} className="md:text-4xl text-2xl" />,
    name: "CSS3",
  },
  {
    icon: <BsGit color="#f4511e" className="md:text-4xl text-2xl" />,
    name: "Git",
  },
  {
    icon: <BsGithub color="#c9d1d9" className="md:text-4xl text-2xl" />,
    name: "GitHub",
  },
  {
    icon: (
      <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
    ),
    name: "Vercel",
  },
  {
    icon: <SiNetlify color={`#31b5ba`} className="md:text-4xl text-2xl" />,
    name: "Netlify",
  },
];
