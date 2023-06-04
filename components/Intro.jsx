import React, { Fragment, useEffect, useState } from "react";

const Intro = () => {
  return (
    <Fragment>
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="md:w-[70%] w-fit m-auto p-4">
          <img className="w-12 h-12 hiIcon" src="./images/hii.png" alt="" />{" "}
          <h1 className="md:text-5xl text-3xl myName dark:text-white">
            My Name is Shivraj.
          </h1>
          <MyProfession />
        </div>
        <div className="md:w-[30%] p-4">
          {" "}
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

const MyProfession = () => {
  return (
    <div className={`md:text-3xl text-2xl mt-4 font-bold italic myProfession`}>
      I am a web Developer
    </div>
  );
};
