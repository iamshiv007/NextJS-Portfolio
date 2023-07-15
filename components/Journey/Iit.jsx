import React, { Fragment } from "react";
import { JourneyData } from "./JourneyData";

const Iit = () => {
  return (
    <Fragment>
      <div className="md:ml-5 ml-0 mt-8 md:mt-[30vh] md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className="w-[50vh] md:hidden block min-h-[30vh]">
          <p className="text-center">
            <span className="text-lg font-bold">{JourneyData[1].heading} </span>{" "}
            ( Kota 11th and 12th )
          </p>
          <div className="py-2 px-4">
            <p>{JourneyData[1].summary}</p>
          </div>
        </div>
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 rounded-3xl md:rounded-e-3xl">
          <img
            src="https://www.besteducationsikar.com/wp-content/uploads/2021/11/2019-06-15-800x600.jpg"
            alt="IIt"
            className="md:rounded-e-3xl rounded-3xl w-full h-full object-cover"
          />
        </div>
        <div className="w-[50vh] hidden md:block h-[30vh]">
          <p className="text-center">
            <span className="text-lg font-bold">IIT </span> ( Kota 11th and 12th
            )
          </p>
          <div className="py-2 px-4">
            <p>{JourneyData[1].summary}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Iit;
