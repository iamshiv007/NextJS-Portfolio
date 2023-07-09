import React, { Fragment } from "react";

const Intro = () => {
  return (
    <Fragment>
      <div>

        <div className="h-[88vh] dark:bg-black bg-white md:grid grid-cols-2">
          <div className="md:pt-[100px] md:pl-[120px] pt-[70px] ml-[30px]">
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
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
