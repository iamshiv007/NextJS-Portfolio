import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { DiTechcrunch } from "react-icons/di";

const Navbar = () => {
  const { dark, setDark } = useContext(BlogContext);

  return (
    <Fragment>
      <div
        className={`hidden bg-white items-center justify-between py-4 px-8 h-[12vh] dark:bg-black md:flex sticky top-0`}
      >
        <div className="flex dark:text-[gray] text-xl text-[gray] items-start">
          <span className="font-extrabold font-mono">SHIV</span>
          <span className="pl-1">
            <DiTechcrunch />
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <Link href="#home" className="navLinks">
            Home
          </Link>
          <Link href="#skills" className="navLinks">
            Skills
          </Link>
          <Link href="#projects" className="navLinks">
            Projects
          </Link>
          <Link href="#blogs" className="navLinks">
            Blogs
          </Link>
          <Link href="#myJourney" className="navLinks">
            My Journey
          </Link>
          <Link href="#apps" className="navLinks">
            Apps
          </Link>
        </div>

        <div>
          <button className="dark:text-white" onClick={() => setDark(!dark)}>
            {dark ? (
              <RiSunFill color="#c72c6c" size={22} />
            ) : (
              <BsFillMoonFill color="#07d0e5" size={22} />
            )}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
