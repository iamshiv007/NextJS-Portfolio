import React, { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar, { Navbar2 } from "./Navbar";
import MobileNavbar from "./mobileNavbar";

const Intro = () => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <MobileNavbar />

        <div className="h-[88vh] dark:bg-black bg-white md:grid grid-cols-2">
          <div className="md:pt-[100px] md:pl-[120px] pt-[70px] ml-[30px]">
            {/* <img className="w-12 h-12 hiIcon" src="./images/hii.png" alt="" /> */}
            <p className="md:text-6xl text-4xl font-bold">Hi</p>
            <p className="md:text-6xl text-4xl font-bold mt-5">
              I'm{" "}
              <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                Shivraj
              </span>
            </p>
            <p className="md:text-6xl text-4xl font-bold mt-5">
              a Web Developer
            </p>
            {/* <div className="mt-4">
              <MyProfession profession={profession} />
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            {/* <img className="rounded-full w-[300px] h-[300px] object-cover " src="./images/shivraj.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
