import Link from "next/link";
import React, { Fragment } from "react";

const Navbar = ({ children }) => {
  return (
    <Fragment>
      <div className="navbar">
        <div>
          <Link href="/">
            <img className="h-9 mx-10" src="/images/Logo.ico" alt="" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="sm:mx-4 mx-1">
            <Link
              className="p-2 font-bold dark:text-white text-black hover:no-underline"
              href="/blogs"
            >
              Blogs
            </Link>
          </div>
          <div className="sm:mx-4 mx-1">
            <Link
              className="p-2 font-bold dark:text-white text-black hover:no-underline"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="sm:mx-4 mx-1">
            <Link
              className="p-2 font-bold dark:text-white text-black hover:no-underline"
              href="/contacts"
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </Fragment>
  );
};

export default Navbar;
