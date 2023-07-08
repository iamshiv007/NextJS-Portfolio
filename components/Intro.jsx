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
          <div className="md:pt-[100px] md:pl-[150px] pt-[70px] ml-[50px]">
            {/* <img className="w-12 h-12 hiIcon" src="./images/hii.png" alt="" /> */}
            <p className="text-3xl">Hii</p>
            <p className="text-3xl mt-4">I am Shivraj Gurjar</p>
            <p className="text-3xl mt-4">from India,</p>
            <p className="text-3xl mt-4">I am a Developer of</p>
            <div className="mt-4">
              <MyProfession profession={profession} />
            </div>
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

const profession = [
  "ReactJS",
  "NextJS",
  "MERN Stack",
  "Frontend ",
  "NodeJS ",
  "FullStack ",
];

const MyProfession = () => {
  return (
    <>
      <div className="text-3xl">
        <TypeAnimation
          sequence={[
            "Software",
            2000,
            "ReactJS",
            2000,
            "NextJS",
            2000,
            "NodeJS",
            2000,
            "MERN Stack",
            2000,
          ]}
          speed={10}
          repeat={Infinity}
          className="text2xl"
        />
      </div>
    </>
  );
};
