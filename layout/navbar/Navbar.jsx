import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { RiSunFill } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";
import { DiTechcrunch } from "react-icons/di";

import { PortfolioContext } from "@/contextApi/PortfolioContext";
import { NavbarData } from "@/constants/NavbarData";

const Navbar = () => {
  const { dark, setDark } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div
        className={"hidden bg-[#ccf2f6] items-center justify-between py-4 px-8 h-[12vh] dark:bg-black md:flex sticky top-0 z-20"}
      >
        <div className="flex dark:text-[gray] text-xl text-[gray] items-start">
          <span className="font-extrabold font-mono">SHIV</span>
          <span className="pl-1">
            <DiTechcrunch />
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {NavbarData.map((item) => (
            <Link className="navLinks" href={item.link} key={item.name}>
              {item.name}
            </Link>
          ))}
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
