import React, { Fragment } from "react";
import Image from "next/image";

import { JourneyData } from "@/constants";

export const SecondInternship = () => {
  return (
    <Fragment>
      <div className="ml-5 mt-8 md:mt-[30vh] md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className={JourneyData[5].image ? "w-[50vh]" : "w-[100vh]"}>
          <p className="text-center text-lg font-bold">
            {JourneyData[5].heading} - 2 Months
          </p>
          <div className={"mx-4 my-2"}>{JourneyData[5].summary}</div>
        </div>
        {JourneyData[5].image && (
          <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 md:rounded-e-3xl rounded-3xl">
            <Image
              alt="youtube"
              className="md:rounded-e-3xl rounded-3xl w-full h-full object-cover"
              height={200}
              src={JourneyData[5].image}
              width={300}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};
