import React, { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";
import { Navbar2 } from "./Navbar";

const Intro = () => {
  return (
    <Fragment>
      <div
        className="myImage h-[100vh] bg-no-repeat bg-blend-multiply hidden md:block"
        style={{
          backgroundImage: `url(./images/shiv2.jpg), linear-gradient(to right, black, gray,  gray)`,
          backgroundSize: "cover",
        }}
      >
        <Navbar2 />
        <div className="p-4 md:ml-14 md:pt-14">
          <img className="w-12 h-12 hiIcon" src="./images/hii.png" alt="" />{" "}
          <h1 className="md:text-7xl text-4xl myName dark:text-blue-700 text-blue-700 mt-4 mb-8">
            My Name is Shivraj.
          </h1>
          <MyProfession profession={profession} />
        </div>
      </div>

      <div
        className="myImage h-[100vh] bg-no-repeat bg-blend-multiply md:hidden block"
        style={{
          backgroundImage: `url(./images/shiv1.jpg), linear-gradient(gray, gray)`,
          backgroundSize: "cover",
        }}
      >
        <Navbar2 />
        <div className="p-4 md:ml-14 md:pt-14">
          <img className="w-12 h-12 hiIcon" src="./images/hii.png" alt="" />{" "}
          <h1 className="md:text-7xl text-3xl myName dark:text-blue-700 text-blue-700 mt-4 mb-8">
            My Name is Shivraj.
          </h1>
          <MyProfession profession={profession} />
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
      <div
        className={`md:text-3xl text-left text-2xl font-bold italic myProfession`}
      >
        I am a{" "}
        <TypeAnimation
          sequence={[
            "Software|",
            1000,
            "ReactJS|",
            1000,
            "NextJS|",
            1000,
            "NodeJS|",
            1000,
            "MERN Stack|",
            1000,
          ]}
          speed={10}
          repeat={Infinity}
          className="text2xl"
        />
        developer
      </div>
    </>
  );
};
