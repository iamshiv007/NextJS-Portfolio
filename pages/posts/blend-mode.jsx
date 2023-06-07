import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import Head from "next/head";
import React, { Fragment } from "react";

const BlendMode = () => {
  return (
    <Fragment>
      <Head>
        <title>Background Blend Mode</title>
      </Head>

      <Theme>
        <ThemeBtn />

        <Navbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h2 className="text-3xl font-bold mt-4 bg-blue-400 p-2 rounded-md">
              Background Blend Mode
            </h2>
            <p className="text-lg text-gray-600 my-2 mt-6">
              In this blog we are exlore rare but some time very userfull
              property of css ya! it's nothing but background-blend-mode
            </p>
            <p className="text-lg text-gray-600 my-2">
              Before we are starting a example we have to know this property use
              for two images
            </p>
            <p className="text-lg text-gray-600 my-2">
              Let's fly on independent code universe(icu)
            </p>
            <br />
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>normal</strong>
            </div>
            <div className="exa1Images1"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>screen</strong>
            </div>
            <div className="exa1Images2"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>multiply</strong>
            </div>
            <div className="exa1Images3"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>overlay</strong>
            </div>
            <div className="exa1Images4"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>darken</strong>
            </div>
            <div className="exa1Images5"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>lighten</strong>
            </div>
            <div className="exa1Images6"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>color-dodge</strong>
            </div>
            <div className="exa1Images7"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>saturation</strong>
            </div>
            <div className="exa1Images8"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>color</strong>
            </div>
            <div className="exa1Images9"></div>
            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>luminocity</strong>
            </div>
            <div className="exa1Images10"></div>
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlendMode;
