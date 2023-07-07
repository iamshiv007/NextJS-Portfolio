import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext } from "react";

const Navbar = () => {
  const { dark, setDark } = useContext(BlogContext);

  return (
    <Fragment>
      <div
        className={`hidden items-center justify-between py-4 px-8 h-[12vh] dark:bg-black md:flex sticky top-0`}
      >
        <div className="flex items-center">
          <img src="/images/NewLogo.png" alt="Logo" className="w-12 h-12" />
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="/" className="navLinks">
            Home
          </a>
          <a href="/blogs" className="navLinks">
            Blogs
          </a>
          <a href="/about" className="navLinks">
            About
          </a>
          <a href="/contact" className="navLinks">
            Contact
          </a>
        </div>

        <div>
          <button className="dark:text-white" onClick={() => setDark(!dark)}>
            Mode
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const Navbar2 = () => {
  const { dark, setDark } = useContext(BlogContext);

  return (
    <Fragment>
      <div className="navbar2">
        <div>
          <Link href="/">
            <img className="h-9 mx-10" src="/images/Logo.ico" alt="" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="sm:mx-4 mx-1">
            <Link
              className="p-2 font-bold dark:text-white hover:no-underline"
              href="/blogs"
            >
              Blogs
            </Link>
          </div>
          <div className="sm:mx-4 mx-1">
            <Link
              className="p-2 font-bold dark:text-white hover:no-underline"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="sm:mx-4 mx-1">
            <Link
              className="p-2 font-bold dark:text-white hover:no-underline"
              href="/contacts"
            >
              Contacts
            </Link>
          </div>
        </div>

        <div className="ml-auto mr-7 hidden md:flex">
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none  after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-blue-600 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-100 dark:checked:bg-blue-500 dark:checked:after:bg-blue-600 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={() => setDark(!dark)}
            checked={dark}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="flexSwitchCheckDefault"
          >
            {dark ? "Dark" : "Light"}
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;

export { Navbar2 };
