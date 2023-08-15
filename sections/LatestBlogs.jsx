import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPenFill } from "react-icons/bs";

import { BlogsData } from "@/constants";
import AnimatedButton from "@/components/buttons/AnimatedButton";

const LatestBlogs = () => {
  return (
    <Fragment>
      <section id="blogs">
        <div className={"dark:bg-[#000000d0] py-8"}>
          <h3 className="sectionHeading">
            <span className="mr-4">
              <BsPenFill />
            </span>
            Blogs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md mx-6">
            {BlogsData.slice(-4)
              .reverse()
              .map((blog) => (
                <div key={blog.name}>
                  <Link href={`/blogs/${blog.linkName}`}>
                    <div className="h-fit dark:bg-gray-900 rounded-md border border-gray-400 border-solid">
                      <Image
                        alt="img not found"
                        className="rounded-t-md"
                        height={250}
                        src={blog.imageUrl}
                        style={{ width: "100%" }}
                        width={400}
                      />
                      <div className="px-1 py-2  border-t border-solid border-gray-600 dark:border-white">
                        <div className="blogLink">{blog.name}</div>
                        <p className="dark:text-white text-xs py-1 text-gray-600 text-center">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="ml-auto w-fit  mx-6 mt-8">
            <AnimatedButton />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LatestBlogs;
