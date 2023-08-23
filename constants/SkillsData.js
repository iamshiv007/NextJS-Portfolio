import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";

export const SkillsData = [
  {
    icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
    name: "ReactJs",
  },
  {
    icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
    name: "NodeJS",
  },
  {
    icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
    name: "MongoDB",
  },
  {
    icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
    name: "Bootstrap",
  },
  {
    icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
    name: "Mui",
  },
  {
    icon: (
      <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
    ),
    name: "NextJS",
  },
  {
    icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
    name: "JavaScript",
  },
  {
    icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
    name: "Redux",
  },
  {
    icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
    name: "ExpressJS",
  },
  {
    icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
    name: "Sass",
  },
  {
    icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
    name: "Tailwind",
  },
  {
    icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
    name: "CSS3",
  },
  {
    icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
    name: "Git",
  },
  {
    icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
    name: "GitHub",
  },
  {
    icon: (
      <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
    ),
    name: "Vercel",
  },
  {
    icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />,
    name: "Netlify",
  },
];
