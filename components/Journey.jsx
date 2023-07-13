import React, { Fragment } from "react";
import School from "./Journey/School";
import Iit from "./Journey/Iit";
import College from "./Journey/College";
import YouTube from "./Journey/YouTube";
import { GiRailRoad } from "react-icons/gi";

const Journey = () => {
  return (
    <Fragment>
      <section id="myJourney">
        <div className="min-h-[110vh] pt-6 dark:bg-[#000000d0] overflow-x-hidden">
          <h3 className="text-center md:mb-12 mb-3 flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
           <span className="mr-4"> <GiRailRoad /></span> My Journey
          </h3>

          <div className="md:flex block justify-center pb-10">
            <div className="py-5">
              <School />

              <div className="md:block hidden">
                <College />
              </div>

              <div className="md:hidden block">
                <Iit />
              </div>
            </div>

            <div className="border-2 md:block hidden dark:border-white border-black border-solid min-h-[90vh]" />

            <div className="py-5">
              <div className="md:block hidden">
                <Iit />
              </div>

              <div className="md:hidden block">
                <College />
              </div>

              <YouTube />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Journey;
