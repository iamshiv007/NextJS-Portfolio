import React, { Fragment } from "react";
import Image from "next/image";

import { JourneyData } from "@/constants";

export const School = () => {
  return (
    <Fragment>
      <div className="md:mr-4 mr-0 md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className="w-[50vh]">
          <p className="text-center">
            <span className="text-lg font-bold">{JourneyData[0].heading}</span>{" "}
            <span>( Till 10th Grade )</span>
          </p>
          <div className="py-2 px-4">{JourneyData[0].summary}</div>
        </div>
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 rounded-3xl md:rounded-s-3xl">
          <Image
            alt="school"
            className="md:rounded-s-3xl rounded-3xl w-full h-full object-cover"
            height={200}
            src={JourneyData[0].image}
            width={300}
          />
        </div>
      </div>
    </Fragment>
  );
};
