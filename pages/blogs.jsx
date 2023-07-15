import BackTo from "@/components/BackTo";
import Blogs from "@/components/Blogs";
import Theme from "@/components/Theme";
import Head from "next/head";
import React, { Fragment } from "react";

const BlogsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Blogs</title>
      </Head>

      <Theme>
        <BackTo backTo={""} />
        <div className="p-[5%] pt-[2%] dark:bg-gray-700">
          <Blogs />
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlogsPage;
