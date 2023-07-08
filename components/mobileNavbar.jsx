import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { RiCloseLine } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { TbRectangleFilled } from "react-icons/tb";
import { SiAboutdotme } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import { BsFillSunFill, BsMoon } from "react-icons/bs";

const MobileNavbar = () => {
  const { dark, setDark } = useContext(BlogContext);
  const [menu, setMenu] = useState(false);

  return (
    <Fragment>
      <div className="md:hidden flex items-center justify-end h-[12vh] p-8 dark:bg-black">
        <button onClick={() => setMenu(!menu)} className="">
          <SlMenu size={22} color={dark ? "white" : "black"} />
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
            <Link className="navLinksMobile" href="/">
              <AiTwotoneHome /> Home
            </Link>
          </div>
          <div>
            <Link className="navLinksMobile" href="/blogs">
              <TbRectangleFilled /> Blogs
            </Link>
          </div>
          <div>
            <Link className="navLinksMobile" href="/about">
              <SiAboutdotme /> About
            </Link>
          </div>
          <div>
            <Link className="navLinksMobile" href="/contacts">
              <MdContacts /> Contacts
            </Link>
          </div>

          <div className="m-auto">
            <button
              className="p-3 px-6 bg-[#c72c6c] rounded dark:bg-[#07d0e5]"
              onClick={() => setDark(!dark)}
            >
              {dark ? (
                <BsFillSunFill color="#c72c6c" size={22} />
              ) : (
                <BsMoon color="#07d0e5" size={22} />
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
