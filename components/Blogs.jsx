import React, { Fragment } from "react";
import Link from "next/link";
import { blogs } from "@/constants/blogData";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const Blogs = () => {
  return (
    <Fragment>
      <p className="font-bold text-2xl p-2 dark:text-white">Blogs</p>

      <div className="pb-5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {blogs.map((blog) => (
              <div
                key={blog.name}
                className="dark:bg-gray-900 rounded-md border border-gray-400 border-solid m-2"
              >
                <Link key={blog.name} href={`/blogs/${blog.linkName}`}>
                  <div>
                    <Image
                      width={400}
                      height={250}
                      className="rounded-t-md"
                      src={blog.imageUrl}
                      alt="img not found"
                      style={{ width: "100%" }}
                    />
                    <div className="px-1 py-2  border-t border-solid border-gray-600 dark:border-white">
                      <div className="blogLink">{blog.name}</div>
                      <p className="dark:text-white text-[0.5rem] md:text-xs py-1 text-gray-600 text-center">
                        {blog.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Fragment>
  );
};

export default Blogs;
