import React, { Fragment, useContext } from "react";
import Theme from "./Theme";
import { IoMdAppstore } from "react-icons/io";
import { apps } from "./AppsData";
import Link from "next/link";
import { BlogContext } from "@/contextApi/blogContext";

const Apps = () => {
  const { dark } = useContext(BlogContext);

  return (
    <Fragment>
      <div className="dark:bg-black py-8">
        <section id="apps"></section>
        <h3 className="sectionHeading">
          <span className="mr-4">
            {" "}
            <IoMdAppstore />
          </span>{" "}
          Apps
        </h3>

        <div className="md:grid hidden md:grid-cols-5 grid-cols-3 justify-center mx-8 gap-5">
          {apps.map((app, key) => (
            <div key={key} className="overflow-hidden">
              <Link href={`/${app.linkName}`}>
                <img
                  className="object-cover rounded md:rounded-[30px] w-full"
                  src={dark ? app.imageUrl : app.imageLight}
                  alt="app"
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
      {apps.map((app, key) => (
        <div key={key}>
          <Link href={`/${app.linkName}`}>
            <div className="p-3 rounded-xl bg-[pink] dark:bg-[aqua]">
              <img src={app.iconUrl} alt={app.name} />
            </div>
          </Link>
          <p className="text-center text-xs py-1">{app.name}</p>
        </div>
      ))}
    </div>
  );
};
