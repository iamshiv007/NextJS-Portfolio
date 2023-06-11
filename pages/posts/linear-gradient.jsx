import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import Head from "next/head";
import React, { Fragment, useState } from "react";

const LinearGradient = () => {
  const [dire1, setDire1] = useState("right");
  const [dire2, setDire2] = useState("top");
  const [dire3, setDire3] = useState("right");
  const [dire4, setDire4] = useState("right");
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("orange");
  const [color3, setColor3] = useState("blue");
  const [color4, setColor4] = useState("aqua");
  const [color5, setColor5] = useState("red");
  const [color6, setColor6] = useState("blue");
  const [color7, setColor7] = useState("green");

  return (
    <Fragment>
      <Head>
        <title>linear-gradient</title>
      </Head>

      <Theme>
        <ThemeBtn />

        <Navbar />

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
                  <option value="top">top</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="bottom">bottom</option>
                </select>
                ,{" "}
                <input
                  value={color1}
                  name="color1"
                  id=""
                  onChange={(e) => setColor1(e.target.value)}
                  type="color"
                />
                ,{" "}
                <input
                  value={color2}
                  name="color2"
                  id=""
                  onChange={(e) => setColor2(e.target.value)}
                  type="color"
                />
                )
              </strong>
            </div>
            <div
              className={`h-[200px] w-[200px]`}
              style={{
                background: `linear-gradient(to ${dire1}, ${color1}, ${color2})`,
              }}
            ></div>

            <p className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>
                linear-gradient(to{" "}
                <select
                  value={dire2}
                  name="dire2"
                  id=""
                  onChange={(e) => setDire2(e.target.value)}
                  className="border border-solid border-blue-600 dark:bg-black"
                >
                  <option value="top">top</option>
                  <option value="bottom">bottom</option>
                </select>{" "}
                <select
                  value={dire3}
                  name="dire3"
                  id=""
                  onChange={(e) => setDire3(e.target.value)}
                  className="border border-solid border-blue-600 dark:bg-black"
                >
                  <option value="left">left</option>
                  <option value="right">right</option>
                </select>
                ,
                <input
                  onChange={(e) => setColor3(e.target.value)}
                  type="color"
                  name="color3"
                  id=""
                />
                ,{" "}
                <input
                  onChange={(e) => setColor4(e.target.value)}
                  type="color"
                  name="color4"
                  id=""
                />
                )
              </strong>
            </p>
            <div
              className="h-[200px] w-[200px]"
              style={{
                background: `linear-gradient(to ${dire2} ${dire3}, ${color3}, ${color4})`,
              }}
            ></div>

            <p className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>
                linear-gradient(to{" "}
                <select
                  value={dire4}
                  name="dire4"
                  id=""
                  onChange={(e) => setDire4(e.target.value)}
                  className="border border-solid border-blue-600 dark:bg-black"
                >
                  <option value="top">top</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="bottom">bottom</option>
                </select>
                ,{" "}
                <input
                  onChange={(e) => setColor5(e.target.value)}
                  type="color"
                  name="color5"
                  id=""
                />
                ,{" "}
                <input
                  onChange={(e) => setColor6(e.target.value)}
                  type="color"
                  name="color6"
                  id=""
                />
                ,
                <input
                  onChange={(e) => setColor7(e.target.value)}
                  type="color"
                  name="color7"
                  id=""
                />
                )
              </strong>
            </p>
            <div
              style={{
                background: `linear-gradient(to ${dire4}, ${color5}, ${color6}, ${color7})`,
              }}
              className="h-[200px] w-[200px]"
            ></div>
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default LinearGradient;
