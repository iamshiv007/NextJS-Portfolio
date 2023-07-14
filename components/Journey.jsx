import React, { Fragment } from "react";
import School from "./Journey/School";
import Iit from "./Journey/Iit";
import College from "./Journey/College";
import YouTube from "./Journey/YouTube";
import { GiRailRoad } from "react-icons/gi";
import { JourneyData } from "./Journey/JourneyData";

const Journey = () => {
  return (
    <Fragment>
      <section id="myJourney">
        <div className="md:min-h-[110vh] h-auto pt-6 dark:bg-[#000000d0] overflow-x-hidden">
          <h3 className="text-center md:mb-12 flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
            <span className="mr-4">
              {" "}
              <GiRailRoad />
            </span>{" "}
            My Journey
          </h3>

          <div className="md:flex hidden justify-center pb-10">
            <div className="py-5">
              <School />

              <div className="md:block hidden">
                <College />
              </div>

              <div className="md:hidden block">
                <Iit />
              </div>
            </div>

            <div class5ame="border md:block hidden dark:border-white border-black border-solid min-h-[90vh]" />

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

          <MobileScreenJourney />
        </div>
      </section>
    </Fragment>
  );
};

export default Journey;

const MobileScreenJourney = () => {
  const visibleFun = (e) => {
    const smallBorder =
      e.target.parentElement.parentElement.nextElementSibling.classList;

    const detailBox =
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling
        .classList;

    if (smallBorder.contains("h-0")) {
      smallBorder.add("h-[20px]");
      smallBorder.remove("h-0");
    } else {
      smallBorder.add("h-0");
      smallBorder.remove("h-[20px]");
    }

    if (detailBox.contains("h-0")) {
      detailBox.add("h-auto");
      detailBox.remove("h-0");
    } else {
      detailBox.add("h-0");
      detailBox.remove("h-auto");
    }
  };
  return (
    <>
      <div className="mx-[5%] pb-10 md:hidden">
        {JourneyData.map((journey, key) => (
          <React.Fragment key={key}>
            <div className="h-[50px] border border-white m-auto w-fit"></div>

            <div className="border border-white border-solid rounded">
              <div className="flex gap-5 px-5 py-2">
                <p onClick={visibleFun}>+</p>
                <p>{journey.heading}</p>
                <p className="ml-auto">{journey.time}</p>
              </div>
            </div>

            <div className="border border-white m-auto w-fit h-0"></div>

            <div className="border-white h-0 overflow-hidden">
              <img
                className="w-full"
                src={journey.image}
                alt={journey.heading}
              />
              <div className="py-2">
                <ul className="list-inside list-disc">{journey.summary}</ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
