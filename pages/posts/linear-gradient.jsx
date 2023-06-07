import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import Head from "next/head";
import React, { Fragment, useState } from "react";

const LinearGradient = () => {
  const [dire1, setDire1] = useState("t");
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("green");

  return (
    <Fragment>
      <Head>
        <title>linear-gradient</title>
      </Head>

      <Theme>
        <Navbar />

        <ThemeBtn />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              linear-gradient
            </h1>

            <div className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>
                linear-gradient(to{" "}
                <select
                  value={dire1}
                  name="dire1"
                  id=""
                  onChange={(e) => setDire1(e.target.value)}
                  className="border border-solid border-blue-600 dark:bg-black"
                >
                  <option value="t">top</option>
                  <option value="l">left</option>
                  <option value="r">right</option>
                  <option value="b">bottom</option>
                </select>
                ,
                <select
                  value={color1}
                  name="color1"
                  id=""
                  onChange={(e) => setColor1(e.target.value)}
                  className="border border-solid border-blue-600 dark:bg-black"
                >
                  <option value="red">red</option>
                  <option value="yellow">yellow</option>
                  <option value="green">green</option>
                  <option value="pink">pink</option>
                </select>
                ,{" "}
                <select
                  value={color2}
                  name="color2"
                  id=""
                  onChange={(e) => setColor2(e.target.value)}
                  className="border border-solid border-blue-600 dark:bg-black"
                >
                  <option value="red">red</option>
                  <option value="yellow">yellow</option>
                  <option value="green">green</option>
                  <option value="pink">pink</option>
                </select>
                )
              </strong>
            </div>
            <div
              className={`h-[200px] w-[200px] bg-gradient-to-${dire1} from-[${color1}] to-[${color2}]`}
            ></div>

            <p className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>linear-gradient(to top right, blue, red)</strong>
            </p>
            <div className="h-[200px] w-[200px] bg-gradient-to-tr from-blue-500 to-red-500"></div>

            <p className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>linear-gradient(to right, blue, yellow, red)</strong>
            </p>
            <div className="h-[200px] w-[200px] bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500"></div>
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default LinearGradient;
