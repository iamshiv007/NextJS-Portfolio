import React, { Fragment } from "react";
import Image from "next/image";

import { JourneyData } from "@/constants";

export const YouTube = () => {
  return (
    <Fragment>
      <div className="ml-5 mt-8 md:mt-[30vh] md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className="w-[50vh]">
          <p className="text-center text-lg font-bold">
            {JourneyData[3].heading}
          </p>
          <p className="mx-4 my-2">{JourneyData[3].summary}</p>
        </div>
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 md:rounded-e-3xl rounded-3xl">
          <Image
            alt="youtube"
            className="md:rounded-e-3xl rounded-3xl w-full h-full object-cover"
            height={200}
            src={JourneyData[3].image}
            width={300}
          />
        </div>
      </div>
    </Fragment>
  );
};