import React, { Fragment } from "react";
import Theme from "./Theme";
import { IoMdAppstore } from "react-icons/io";
import { apps } from "./AppsData";
import Link from "next/link";

const Apps = () => {
  return (
    <Fragment>
      <Theme>
        <section id="apps">
          <div className="dark:bg-black pt-6">
            <h3 className="text-center md:mb-12 mb-3 flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
              <span className="mr-4">
                {" "}
                <IoMdAppstore />
              </span>{" "}
              Apps
            </h3>

            <div className="md:grid hidden md:grid-cols-5 grid-cols-3 justify-center md:px-16 px-4 gap-5 pb-10">
              {apps.map((app, key) => (
                <div key={key} className="overflow-hidden">
                  <Link href={`/posts/${app.linkName}`}>
                    <img
                      className="object-cover rounded md:rounded-[30px] w-full"
                      src={app.imageUrl}
                      alt="app"
                    />
                  </Link>
                </div>
              ))}
            </div>

            <div className="md:hidden gap-4 grid grid-cols-4 px-8 pb-10">
              {apps.map((app) => (
                <div>
                  <Link href={app.linkName}>
                    <div className="p-3 rounded-xl bg-blue-400">
                      <img src={app.iconUrl} alt={app.name} />
                    </div>
                  </Link>
                  <p className="text-center text-xs py-1">{app.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Theme>
    </Fragment>
  );
};

export default Apps;
