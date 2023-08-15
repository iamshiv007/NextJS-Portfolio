import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const ObjectFit = () => {
  return (
    <Fragment>
      <Head>
        <title>Object-Fit</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">
              object-fit
            </h1>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>fill</strong>
            </div>

            <p className="text-gray-700 text-sm my-2">
              In This condition image cover all it&apos;s parent width and height but
              not maintain it&apos;s own width and hight ratio.
            </p>

            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image alt="" fill={true} src="/images/room.jpg" />
            </div>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>contain</strong>
            </div>
            <p className="text-gray-700 text-sm my-2">
              In This condition image maintain it&apos;s own width and heigth ratio
              but not neccessary to cover parent element&apos;s all height and width.
            </p>
            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image
                alt=""
                className="object-contain"
                fill={true}
                src="/images/room.jpg"
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
                alt=""
                className="object-cover"
                fill={true}
                src="/images/room.jpg"
              />
            </div>

            <div className="text-xl mt-6 mb-2">
              object-fit : <strong>none</strong>
            </div>
            <p className="text-gray-700 text-sm my-2">
              In This condition image have it&apos;s real width and height.
            </p>
            <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border border-solid dark:border-white border-black relative">
              <Image
                alt=""
                className="object-none"
                fill={true}
                src="/images/room.jpg"
              />
            </div>
          </div>

          <div className="layoutBox2" />
        </div>
      </Theme>
    </Fragment>
  );
};

export default ObjectFit;
