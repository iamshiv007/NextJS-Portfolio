import { BlogContext } from "@/contextApi/blogContext";
import Link from "next/link";
import React, { Fragment, useContext, useState } from "react";
import { SlMenu } from "react-icons/sl";

const MobileNavbar = () => {
  const { dark, setDark } = useContext(BlogContext);
  const [menu, setMenu] = useState(false);

  return (
    <Fragment>
      {!menu ? (
        <div className="navbar3 md:hidden flex items-center justify-end h-[8vh] p-8 dark:bg-black">
          <button
            onClick={() => setMenu(!menu)}
            className="p-2 border border-black border-solid rounded dark:border-white"
          >
            <SlMenu size={22} color={dark ? "white" : black} />
          </button>
        </div>
      ) : (
        <div className="h-screen md:hidden block bg-black z-20">
          <div className="navbar3 flex items-center justify-end h-[8vh] p-8 dark:bg-black">
            <button
              onClick={() => setMenu(!menu)}
              className="p-2 border border-black border-solid rounded dark:border-white"
            >
              <SlMenu size={22} color={dark ? "white" : black} />
            </button>
          </div>
          <div>
            <div className="flex justify-center">
              <Link href="/">
                <img
                  className=" my-2 h-9 mx-10"
                  src="/images/Logo.ico"
                  alt=""
                />
              </Link>
            </div>
            <div className="sm:mx-4 mx-1 flex justify-center">
              <Link
                className="my-2 p-2 font-bold dark:text-white hover:no-underline"
                href="/"
              >
                Home
              </Link>
            </div>
            <div className="sm:mx-4 mx-1 flex justify-center">
              <Link
                className="my-2 p-2 font-bold dark:text-white hover:no-underline"
                href="/blogs"
              >
                Blogs
              </Link>
            </div>
            <div className="sm:mx-4 mx-1  flex justify-center">
              <Link
                className="my-2 p-2 font-bold dark:text-white hover:no-underline"
                href="/about"
              >
                About
              </Link>
            </div>
            <div className="sm:mx-4 mx-1  flex justify-center">
              <Link
                className="my-2 p-2 font-bold dark:text-white hover:no-underline"
                href="/contacts"
              >
                Contacts
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MobileNavbar;
