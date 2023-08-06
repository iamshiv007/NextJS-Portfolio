import AnimatedButton from "@/components/AnimatedButtons";
import { blogs } from "@/components/blogData";
import Link from "next/link";
import React, { Fragment } from "react";
import { BsPenFill } from "react-icons/bs";

const LatestBlogs = () => {
  return (
    <Fragment>
      <section id="blogs">
        <div className={`dark:bg-[#000000d0] py-8`}>
          <h3 className="sectionHeading">
            <span className="mr-4">
              <BsPenFill />
            </span>
            Blogs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md mx-6">
            {blogs
              .slice(-4)
              .reverse()
              .map((blog) => (
                <div key={blog.name}>
                  <Link href={`/blogs/${blog.linkName}`}>
                    <div className="h-fit dark:bg-gray-900 rounded-md border border-gray-400 border-solid">
                      <img
                        className="rounded-t-md"
                        src={blog.imageUrl}
                        alt="img not found"
                        style={{ width: "100%" }}
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
