import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment, useState } from "react";

const CssTransform = () => {
  const [value1, setValue1] = useState(0);
  const [direction1, setDirection1] = useState("X");
  const [value2, setValue2] = useState(0);
  const [direction2, setDirection2] = useState("X");

  return (
    <Fragment>
      <Head>
        <title>CSS Transform</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <div>
              <h1 className="blog-heading">CSS Transform</h1>
              <p className="text-lg text-gray-600 my-2">
                Css tranform is less used but very important property of css
                which is use to give some movement in our web page which make ux
                better. In this blog we are going to understand css transform
                with easy examples.
              </p>
            </div>

            <br />

            {/* Example */}
            <Exa1
              value1={value1}
              setValue1={setValue1}
              direction1={direction1}
              setDirection1={setDirection1}
            />
            <br />

            {/* Example */}
            <Exa2
              value2={value2}
              setValue2={setValue2}
              direction2={direction2}
              setDirection2={setDirection2}
            />
          </div>

          <div className="layoutBox2">
            <p className="text-center">
              "College or Degree can't define you and can't decide What you
              can do?."
            </p>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default CssTransform;

const Exa1 = ({ value1, setValue1, direction1, setDirection1 }) => {
  return (
    <div className="exa1 overflow-x-hidden overflow-y-hidden sm:overflow-x-visible sm:overflow-y-visible">
      <h4 className="text-2xl">Example 1</h4>
      <input
        type="range"
        onChange={(e) => setValue1(e.target.value)}
        name=""
        id="value1"
        min="-300"
        max="300"
        step={25}
        value={value1}
      />

      {/* Direction Radios */}
      <Exa1Radios
        setValue1={setValue1}
        direction1={direction1}
        setDirection1={setDirection1}
      />

      <div>
        transform: translate{" "}
        <span className="text-xl text-blue-600 font-bold">{direction1}</span>
        <span className="text-xl text-green-700 font-bold">
          ({`${value1}px`})
        </span>
      </div>
      <div
        style={{ transform: `translate${direction1}(${value1}px)` }}
        className="box1 m-auto mt-5 sm:w-[200px] sm:h-[200px] w-[50px] h-[50px] bg-blue-600"
      ></div>
    </div>
  );
};

const Exa1Radios = ({ setValue1, direction1, setDirection1 }) => {
  return (
    <div className="flex gap-5">
      <div>
        <input
          type="radio"
          name="direction1"
          onChange={() => {
            setDirection1("X");
            setValue1(0);
          }}
          id="direX"
          checked={direction1 === "X"}
        />
        <label className="px-2 font-bold" htmlFor="direX">
          translateX
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="direction1"
          onChange={() => {
            setDirection1("Y");
            setValue1(0);
          }}
          id="direY"
          checked={direction1 === "Y"}
        />
        <label className="px-2 font-bold" htmlFor="direY">
          translateY
        </label>
      </div>
    </div>
  );
};

const Exa2 = ({ value2, setValue2, direction2, setDirection2 }) => {
  return (
    <div className="exa2">
      <h4 className="text-2xl">Example 2</h4>
      <input
        type="range"
        onChange={(e) => setValue2(e.target.value)}
        name=""
        id="value2"
        min="-360"
        max="360"
        step={25}
        value={value2}
      />

      {/* Direction Radios */}
      <Exa2Radios
        setValue2={setValue2}
        direction2={direction2}
        setDirection2={setDirection2}
      />

      <div>
        transform: translate{" "}
        <span className="text-xl text-blue-600 font-bold">{direction2}</span>
        <span className="text-xl text-green-700 font-bold">
          ({`${value2}deg`})
        </span>
      </div>
      <div
        style={{ transform: `rotate${direction2}(${value2}deg)` }}
        className="box2 m-auto mt-5 sm:w-[200px] sm:h-[200px] w-[50px] h-[50px] bg-blue-600"
      ></div>
    </div>
  );
};

const Exa2Radios = ({ setValue2, direction2, setDirection2 }) => {
  return (
    <div className="flex gap-5">
      <div>
        <input
          type="radio"
          name="direction2"
          onChange={() => {
            setDirection2("X");
            setValue2(0);
          }}
          id="direX2"
          checked={direction2 === "X"}
        />
        <label className="px-2 font-bold" htmlFor="direX2">
          rotateX
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="direction2"
          onChange={() => {
            setDirection2("Y");
            setValue2(0);
          }}
          id="direY2"
          checked={direction2 === "Y"}
        />
        <label className="px-2 font-bold" htmlFor="direY2">
          rotateY
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="direction2"
          onChange={() => {
            setDirection2("Z");
            setValue2(0);
          }}
          id="direZ"
          checked={direction2 === "Z"}
        />
        <label className="px-2 font-bold" htmlFor="direZ">
          rotateZ
        </label>
      </div>
    </div>
  );
};
