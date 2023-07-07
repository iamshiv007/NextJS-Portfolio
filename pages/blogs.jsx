import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment } from "react";

const BlogsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Blogs</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="p-[5%] dark:bg-gray-700">
          <Blogs />
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlogsPage;
