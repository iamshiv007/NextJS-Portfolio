import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import React, { Fragment } from "react";

const BlogsPage = () => {
  return (
    <Fragment>
      <Theme>
        <Navbar />

        <ThemeBtn />

        <div className="p-[5%] dark:bg-gray-700">
          <Blogs />
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlogsPage;
