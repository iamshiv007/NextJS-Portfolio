import Head from "next/head";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Fragment, useState } from "react";
import Intro from "@/components/Intro";
import Blogs from "@/components/Blogs";
import ThemeBtn from "@/components/ThemeBtn";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);
  
  return (
    <Fragment>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={darkTheme ? "dark" : ""}>
        <ThemeBtn setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <div
          className="
       dark:bg-gray-700 "
        >
          <Intro />
          <div className={`${utilStyles.headingMd} w-[90%] m-auto`}>
            <Blogs />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
