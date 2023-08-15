import React, { Fragment } from "react";
import Image from "next/image";

import Resume from "@/utils/Resume";

const Intro = () => {
  return (
    <Fragment>
      <div id="home">
        <div className="min-h-[88vh] dark:bg-black bg-[#ccf2f6] md:grid grid-cols-2">
          <div className="md:pt-[100px] md:pl-[120px] ml-[30px]">
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

          <div className="mt-14 flex justify-center">
            <div className="w-[300px]">
              <Image
                className="w-full rounded-full"
                src="/images/cartoon 0.png"
                alt="myimage"
                width={300}
                height={300}
              />
              <Resume />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
