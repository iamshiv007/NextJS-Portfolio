import React, { Fragment, useState } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const BlendMode = () => {
  const [blendMode, setBlendMode] = useState("normal");

  return (
    <Fragment>
      <Head>
        <title>Background Blend Mode</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h2 className="blog-heading">Background Blend Mode</h2>

            <p className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
              {" "}
              <strong>Note:-</strong> Before we are starting a example you
              should know, this property use for two images.
            </p>

            <select
              className="border border-black font-bold font-xl dark:bg-black py-1 px-2"
              id=""
              name="blend-mode"
              onChange={(e) => setBlendMode(e.target.value)}
              value={blendMode}
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
              className="w-52 h-52 bg-contain mt-8"
              style={{
                backgroundBlendMode: blendMode,
                backgroundImage: "url(/images/circle.png), url(/images/x.png)",
              }}
            />
          </div>

          <div className="layoutBox2">
            <p>
              CSS was first proposed by Håkon Wium Lie in 1994 and has since
              become a fundamental technology for designing and styling web
              pages.
            </p>
            F
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlendMode;
