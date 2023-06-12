import React, { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <Fragment>
      <div className="flex flex-col-reverse justify-center md:flex-row h-[92vh]">
        <div className="md:w-[70%] w-fit md:ml-8 p-4">
          <img className="w-12 h-12 hiIcon" src="./images/hii.png" alt="" />{" "}
          <h1 className="md:text-7xl text-3xl myName dark:text-white mt-4 mb-8">
            My Name is Shivraj.
          </h1>
          <MyProfession profession={profession} />
        </div>
        <div className="md:w-[30%] p-4">
          <img
            className="myImage md:w-44 md:h-44 w-32 h-32 rounded-full object-cover m-auto"
            src="./images/shiv2.jpg"
            alt=""
          />
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
        className={`md:text-3xl text-2xl mt-4 font-bold italic myProfession`}
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
