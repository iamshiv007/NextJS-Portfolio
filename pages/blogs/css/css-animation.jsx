import React, { Fragment } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const CssAnimation = () => {
  return (
    <Fragment>
      <Head>
        <title>Css-Animation</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">Css Animation</h1>
            <p className="text-lg text-gray-600 my-2">
              With help of css Animation we can make our UI more attractive and
              user friendly. In this Blog we are going explore all the
              properties of css animation with example explaination.{" "}
            </p>

            <h4 className="text-2xl">Example 1</h4>
            <p className="font-bold text-gray-600">
              animation-name : widthIncrease
            </p>
            <p className="font-bold text-gray-600">animation-duration : 1s</p>
            <p className="font-bold text-gray-600">
              animation-iteration-count : 1s
            </p>
            <p className="font-bold text-gray-600">animation-delay : 2s</p>
            <p className="font-bold text-gray-600">
              animation-timing-function : linear
            </p>

            <p className="font-bold text-green-600">
              @keyframes widthIncrease &#123;{" "}
            </p>
            <p className="font-bold text-green-600">
              from &#123; width: 6rem; &#125;
            </p>
            <p className="font-bold text-green-600">
              {" "}
              to &#123; width: 20rem; &#125;
            </p>
            <p className="font-bold text-green-600">&#125;</p>

            <div className="h-24 m-auto bg-red-500 animation-1 my-3" />

            <p className="font-bold text-xl text-blue-600 mt-2">
              animation-name
            </p>
            <p>
              According to css animation rules we have to give a animation-name
              so we can use this name next time for animation
            </p>

            <p className="font-bold text-xl text-blue-600 mt-2">
              animation-duration
            </p>
            <p>
              animation-duration is time value in seconds (exa = 2s, 3s,) which
              takes to complete to animation.
            </p>

            <p className="font-bold text-xl text-blue-600 mt-2">
              animation-iteration-count
            </p>
            <p>
              animation-iteration-count is like how many times we want the
              animation
              <span className="font-bold"> repeat</span> we can give it value{" "}
              <p className="font-bold"> 1, 2, 3 ... or infinite</p> etc.
            </p>

            <p className="font-bold text-xl text-blue-600 mt-2">
              animation-delay
            </p>
            <p>
              As Its name animation delay is time in which time animation not
              start value = 1s, 2s, ...
            </p>

            <p className="font-bold text-xl text-blue-600 mt-2">
              animation-timing-function
            </p>
            <p>
              animation-timing-function is speed to complete animation values =
              linear, ease, ease-in, ease-out, ease-in-out, step-end,
              step-start, cubic-bezier
            </p>
          </div>

          <div className="layoutBox2">Lorem</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default CssAnimation;
