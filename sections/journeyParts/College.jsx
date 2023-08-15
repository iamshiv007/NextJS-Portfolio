import React, { Fragment } from "react";
import Image from "next/image";

import { JourneyData } from "@/constants";

export const College = () => {
  return (
    <Fragment>
      <div className="md:mr-4 mr-0 mt-8 md:mt-[30vh] md:justify-around flex md:flex-row flex-col md:items-start items-center">
        {
          <div className="w-[50vh]">
            <p className="text-lg font-bold text-center">
              {JourneyData[2].heading}
            </p>
            <p className="py-2 px-4">{JourneyData[2].summary}</p>
          </div>
        }
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 rounded-3xl md:rounded-s-3xl">
          <Image
            alt=""
            className="md:rounded-s-3xl rounded-3xl w-full h-full object-cover"
            height={200}
            src={JourneyData[2].image}
            width={300}
          />
        </div>
      </div>
    </Fragment>
  );
};
