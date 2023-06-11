import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";

const ObjectFit = () => {
  return (
    <Fragment>
      <Head>
        <title>Object-Fit</title>
      </Head>

      <Theme>
        <ThemeBtn />

        <Navbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              object-fit
            </h1>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>fill</strong>
            </div>

            <p className="text-gray-700 text-sm my-2">
              In This condition image cover all it's parent width and height but
              not maintain it's own width and hight ratio.
            </p>

            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image src="/images/room.jpg" alt="" fill={true} />
            </div>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>contain</strong>
            </div>
            <p className="text-gray-700 text-sm my-2">
              In This condition image maintain it's own width and heigth ratio
              but not neccessary to cover parent element's all height and width.
            </p>
            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image
                className="object-contain"
                src="/images/room.jpg"
                alt=""
                fill={true}
              />
            </div>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>cover</strong>
            </div>
            <p className="text-gray-700 text-sm my-2">
              This property will cover all with and heigth of parent element of
              image width maintain image width and height ratio.
            </p>
            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image
                className="object-cover"
                src="/images/room.jpg"
                alt=""
                fill={true}
              />
            </div>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>none</strong>
            </div>
            <p className="text-gray-700 text-sm my-2">
              In This condition image have it's real width and height.
            </p>
            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image
                className="object-none"
                src="/images/room.jpg"
                alt=""
                fill={true}
              />
            </div>
          </div>

          <div className="layoutBox2"></div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ObjectFit;
