import AnimatedButton from "@/components/AnimatedButtons";
import { blogs } from "@/components/blogData";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaLaptopCode } from "react-icons/fa";

const LatestBlogs = () => {
  return (
    <Fragment>
      {" "}
      <section id="blogs">
        <div className={`p-[5%] pt-6 dark:bg-black`}>
          <h3 className="text-center flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
            <span className="mr-4">
              {" "}
              <FaLaptopCode />
            </span>{" "}
            Latest Blogs
          </h3>{" "}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md pb-5">
            {blogs.slice(-3).map((blog) => (
              <div
                key={blog.name}
                className="dark:bg-gray-900 rounded-md border border-gray-400 border-solid"
              >
                <div>
                  <img
                    className="rounded-t-md"
                    src={blog.imageUrl}
                    alt="img not found"
                    style={{ width: "100%" }}
                  />
                  <div className="px-1 py-2  border-t border-solid border-gray-600 dark:border-white">
                    <Link href={`/posts/${blog.linkName}`}>
                      <div className="blogLink">{blog.name}</div>
                    </Link>
                    <p className="dark:text-white text-xs py-1 text-gray-600 text-center">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-auto w-fit">
            <AnimatedButton />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LatestBlogs;
