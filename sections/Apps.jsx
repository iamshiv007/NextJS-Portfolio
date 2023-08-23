import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdAppstore } from "react-icons/io";

import { AppsData } from "@/constants";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const Apps = () => {
  const { dark } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className="dark:bg-[#000000d0] py-8">
        <section id="apps" />
        <h3 className="sectionHeading">
          <span className="mr-4">
            {" "}
            <IoMdAppstore />
          </span>{" "}
          Apps
        </h3>

        <div className="md:grid hidden md:grid-cols-5 grid-cols-3 justify-center mx-8 gap-5">
          {AppsData.map((app, key) => (
            <div className="overflow-hidden" key={key}>
              <Link href={`/${app.linkName}`}>
                <Image
                  alt="app"
                  className="object-cover rounded md:rounded-[30px] w-full"
                  height={500}
                  src={dark ? app.imageUrl : app.imageLight}
                  width={250}
                />
              </Link>
            </div>
          ))}
        </div>

        <MobileScreenApps />
      </div>
    </Fragment>
  );
};

export default Apps;

const MobileScreenApps = () => {
  return (
    <div className="md:hidden gap-6 grid grid-cols-4 px-8 pb-10">
      {AppsData.map((app, key) => (
        <div key={key}>
          <Link href={`/${app.linkName}`}>
            <div className="p-3 rounded-xl bg-[pink] dark:bg-[aqua]">
              <Image
                alt={app.name}
                className="object-cover"
                height={150}
                src={app.iconUrl}
                width={150}
              />
            </div>
          </Link>
          <p className="text-center text-xs py-1">{app.name}</p>
        </div>
      ))}
    </div>
  );
};
