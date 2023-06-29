import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import React, { Fragment } from "react";

const BlogsPage = () => {
  return (
    <Fragment>
      <Theme>
        <Navbar />

        <div className="p-[5%] dark:bg-gray-700">
          <Blogs />
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlogsPage;
