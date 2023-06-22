import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import Head from "next/head";
import React, { Fragment, useState } from "react";

const BlendMode = () => {
  const [blendMode, setBlendMode] = useState("normal");

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
            <h2 className="text-3xl font-bold mt-4 dark:bg-blue-800 bg-blue-400 p-2 rounded-md">
              Background Blend Mode
            </h2>

            <p className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
              {" "}
              <strong>Note:-</strong> Before we are starting a example you
              should know, this property use for two images.
            </p>

            <select
              value={blendMode}
              onChange={(e) => setBlendMode(e.target.value)}
              name="blend-mode"
              id=""
              className="border border-black font-bold font-xl dark:bg-black py-1 px-2"
            >
              <option value="normal">normal</option>
              <option value="screen">screen</option>
              <option value="multiply">multiply</option>
              <option value="overlay">overlay</option>
              <option value="darken">darken</option>
              <option value="lighten">lighten</option>
              <option value="color-dodge">color-dodge</option>
              <option value="saturation">saturation</option>
              <option value="color">color</option>
              <option value="difference">difference</option>
              <option value="hue">hue</option>
              <option value="luminocity">luminocity</option>
              <option value="color-burn">color-burn</option>
              <option value="hard-light">hard-light</option>
              <option value="soft-light">soft-light</option>
            </select>

            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>{blendMode}</strong>
            </div>

            <div
              style={{
                backgroundBlendMode: blendMode,
                backgroundImage: `url(/images/circle.png), url(/images/x.png)`,
              }}
              className="w-52 h-52 bg-contain mt-8"
            ></div>
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlendMode;
