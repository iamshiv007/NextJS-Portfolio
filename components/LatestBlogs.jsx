import AnimatedButton from "@/components/AnimatedButtons";
import { blogs } from "@/components/blogData";
import Link from "next/link";
import React, { Fragment } from "react";
import { BsPenFill } from "react-icons/bs";

const LatestBlogs = () => {
  return (
    <Fragment>
      {" "}
      <section id="blogs">
        <div className={`p-[5%] pt-6 dark:bg-black`}>
          <h3 className="text-center flex items-center justify-center text-3xl md:text-5xl font-medium p-4 dark:text-[#07d0e5] text-[#c72c6c]">
            <span className="mr-4">
              {" "}
              <BsPenFill />
            </span>{" "}
            Latest Blogs
          </h3>{" "}
          <div className="py-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-md pb-5">
            {blogs
              .slice(-4)
              .reverse()
              .map((blog) => (
                <div key={blog.name}>
                  <Link href={`/blogs/${blog.linkName}`}>
                    <div className="h-fit dark:bg-gray-900 rounded-md border border-gray-400 border-solid">
                      <img
                        className="rounded-t-md md:h-[180px] h-fit md:object-cover"
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
          <div className="ml-auto w-fit">
            <AnimatedButton />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LatestBlogs;
