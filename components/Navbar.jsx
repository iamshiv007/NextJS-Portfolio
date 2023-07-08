import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext } from "react";
import { BsFillSunFill, BsMoon } from "react-icons/bs";

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
          <Link href="/" className="navLinks">
            Home
          </Link>
          <Link href="/blogs" className="navLinks">
            Blogs
          </Link>
          <Link href="/about" className="navLinks">
            About
          </Link>
          <Link href="/contact" className="navLinks">
            Contact
          </Link>
        </div>

        <div>
          <button className="dark:text-white" onClick={() => setDark(!dark)}>
            {dark ? (
              <BsFillSunFill color="#c72c6c" size={22} />
            ) : (
              <BsMoon color="#07d0e5" size={22} />
            )}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
