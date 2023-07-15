import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { RiCloseLine, RiSunFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { TbRectangleFilled } from "react-icons/tb";
import { SiAboutdotme } from "react-icons/si";
import { BsFillMoonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";

const MobileNavbar = () => {
  const { dark, setDark } = useContext(BlogContext);
  const [menu, setMenu] = useState(false);

  return (
    <Fragment>
      <div className="md:hidden z-20 sticky top-0 flex items-center justify-end h-[12vh] p-8 dark:bg-black">
        <button onClick={() => setMenu(!menu)} className="">
          <SlMenu size={22} color={dark ? "#07d0e5" : "#c72c6c"} />
        </button>
      </div>
      <div
        className={`dark:bg-black z-20 md:hidden w-screen block bg-white h-screen fixed top-0 left-0 ${
          menu ? "translate-x-0" : "translate-x-[100%] "
        }`}
      >
        <div className="flex items-center justify-end h-[12vh] p-8 dark:bg-black">
          <button onClick={() => setMenu(!menu)} className="">
            <RiCloseLine size={30} color={dark ? "#07d0e5" : "#c72c6c"} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Link
              onClick={() => setMenu(!menu)}
              className="navLinksMobile"
              href="#home"
            >
              <AiTwotoneHome /> Home
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(!menu)}
              className="navLinksMobile"
              href="#skills"
            >
              <GiSkills /> Skills
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(!menu)}
              className="navLinksMobile"
              href="#blogs"
            >
              <TbRectangleFilled /> Blogs
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(!menu)}
              className="navLinksMobile"
              href="#myJourney"
            >
              <FaBusinessTime /> My Journey
            </Link>
          </div>
          <div>
            <Link
              onClick={() => setMenu(!menu)}
              className="navLinksMobile"
              href="#apps"
            >
              <SiAboutdotme /> Apps
            </Link>
          </div>

          <div className="fixed bottom-32 flex justify-center w-screen left-0">
            <button
              className=""
              onClick={() => {
                setDark(!dark);
                setMenu(!menu);
              }}
            >
              {dark ? (
                <RiSunFill color="#c72c6c" size={22} />
              ) : (
                <BsFillMoonFill color="#07d0e5" size={22} />
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
