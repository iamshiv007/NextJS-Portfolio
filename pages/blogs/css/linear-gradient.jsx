import React, { Fragment, useState } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

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
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">
              linear-gradient
            </h1>

            <div className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>
                linear-gradient(to{" "}
                <select
                  className="border border-solid border-blue-600 dark:bg-black"
                  id=""
                  name="dire1"
                  onChange={(e) => setDire1(e.target.value)}
                  value={dire1}
                >
                  <option value="top">top</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="bottom">bottom</option>
                </select>
                ,{" "}
                <input
                  id=""
                  name="color1"
                  onChange={(e) => setColor1(e.target.value)}
                  type="color"
                  value={color1}
                />
                ,{" "}
                <input
                  id=""
                  name="color2"
                  onChange={(e) => setColor2(e.target.value)}
                  type="color"
                  value={color2}
                />
                )
              </strong>
            </div>
            <div
              className={"h-[200px] w-[200px]"}
              style={{
                background: `linear-gradient(to ${dire1}, ${color1}, ${color2})`,
              }}
             />

            <p className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>
                linear-gradient(to{" "}
                <select
                  className="border border-solid border-blue-600 dark:bg-black"
                  id=""
                  name="dire2"
                  onChange={(e) => setDire2(e.target.value)}
                  value={dire2}
                >
                  <option value="top">top</option>
                  <option value="bottom">bottom</option>
                </select>{" "}
                <select
                  className="border border-solid border-blue-600 dark:bg-black"
                  id=""
                  name="dire3"
                  onChange={(e) => setDire3(e.target.value)}
                  value={dire3}
                >
                  <option value="left">left</option>
                  <option value="right">right</option>
                </select>
                ,
                <input
                  id=""
                  name="color3"
                  onChange={(e) => setColor3(e.target.value)}
                  type="color"
                />
                ,{" "}
                <input
                  id=""
                  name="color4"
                  onChange={(e) => setColor4(e.target.value)}
                  type="color"
                />
                )
              </strong>
            </p>
            <div
              className="h-[200px] w-[200px]"
              style={{
                background: `linear-gradient(to ${dire2} ${dire3}, ${color3}, ${color4})`,
              }}
             />

            <p className="text-2xl pb-2 mt-6 mb-3">
              background:{" "}
              <strong>
                linear-gradient(to{" "}
                <select
                  className="border border-solid border-blue-600 dark:bg-black"
                  id=""
                  name="dire4"
                  onChange={(e) => setDire4(e.target.value)}
                  value={dire4}
                >
                  <option value="top">top</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="bottom">bottom</option>
                </select>
                ,{" "}
                <input
                  id=""
                  name="color5"
                  onChange={(e) => setColor5(e.target.value)}
                  type="color"
                />
                ,{" "}
                <input
                  id=""
                  name="color6"
                  onChange={(e) => setColor6(e.target.value)}
                  type="color"
                />
                ,
                <input
                  id=""
                  name="color7"
                  onChange={(e) => setColor7(e.target.value)}
                  type="color"
                />
                )
              </strong>
            </p>
            <div
              className="h-[200px] w-[200px]"
              style={{
                background: `linear-gradient(to ${dire4}, ${color5}, ${color6}, ${color7})`,
              }}
             />
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default LinearGradient;
