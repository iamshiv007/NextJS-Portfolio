import Head from "next/head";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Fragment, useContext, useState } from "react";
import Intro from "@/components/Intro";
import Blogs from "@/components/Blogs";
import { BlogContext } from "@/contextApi/blogContext";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/mobileNavbar";

export default function Home() {
  const { dark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="blogs about React, JavaScript, CSS, Next.js, React best Libraries, Github, Git, Web App, Games, Rapid Apis, Free Apis, learn css, css Example, play with css, small projects, and advanced concepts." />
        <meta name="keywords" content="React Projects, Learn JavaScript, Learn CSS, Learn Next.js, small projects, advanced concepts, blog, Shivraj Gurjar Blog, Shivraj, React best Libraries, Github, Git, how To make simple Web App, how to make simple Games, best free Rapid Apis, How to use Free Rapid Apis, learn css, css Example, play with css" />
        <meta property="og:title" content="My Blog" />
        <meta property="og:description" content="blogs about React, JavaScript, CSS, Next.js, React best Libraries, Github, Git, Web App, Games, Rapid Apis, Free Apis, learn css, css Example, play with css, small projects, and advanced concepts." />
        <meta property="og:image" content="./images/Logo.ico" />
        <meta name="author" content="Shivraj" />
      </Head>
      <div className={dark ? "dark" : ""}>
        <div className="dark:bg-gray-700 ">
          <Navbar />
          <MobileNavbar />
          <Intro />
          <div className={`${utilStyles.headingMd} w-[90%] m-auto mt-6`}>
            <Blogs />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
