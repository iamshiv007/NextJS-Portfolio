import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

const Navbar = () => {
  const { dark, setDark } = useContext(BlogContext);

  return (
    <Fragment>
      <div
        className={`hidden bg-white items-center justify-between py-4 px-8 h-[12vh] dark:bg-black md:flex sticky top-0`}
      >
        <div className="flex items-center">
          <img src="/images/NewLogo.png" alt="Logo" className="w-12 h-12" />
        </div>

        <div className="hidden md:flex items-center gap-12">
          <Link href="#home" className="navLinks">
            Home
          </Link>
          <Link href="#skills" className="navLinks">
            Skills
          </Link>
          <Link href="#blogs" className="navLinks">
            Blogs
          </Link>
          <Link href="#experience" className="navLinks">
            Experience
          </Link>
          <Link href="#contact" className="navLinks">
            Contact
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
