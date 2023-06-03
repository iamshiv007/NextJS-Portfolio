import Head from "next/head";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Fragment } from "react";
import Intro from "@/components/Intro";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <section className={`${utilStyles.headingMd} w-[90%] m-auto`}>
        <p className={utilStyles.headingLg}>Blogs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md mb-5">
          <Blogs />
        </div>
      </section>
    </Fragment>
  );
}


