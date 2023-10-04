import Head from "next/head";
import React, { Fragment, useContext, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const Throttling = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Throttling in JavaScript</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h2 className='blog-heading'>Throttling in JavaScript</h2>

            <p className='text-lg font-bold mt-5'>Defination</p>

            <p className='font-bold mt-3 mb-1'>English wale</p>
            <p>
              Trottling is a technique in which, no matters how many times user
              fires the event, the attached function executed only once in a
              given time interval.
            </p>

            <p className='font-bold mt-3 mb-1'>Hindi Wale</p>
            <p>
              Dekho bhai user bar bar button click kar ke jyada payment na kar
              de 😂😂 .Esliye button click karte hi usko kuch time disable kr
              dete hai. Jisase ki galti se 1 se jyada bar click na hoye. Yahi
              apni throttling hai.
            </p>

            <Example1 myDark={theme === "dark"} />
          </div>

          <div className='layoutBox2'>Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Throttling;

const Example1 = ({ myDark }) => {
  const codeString = `const Example1 = () => {
        const [isTime, setIsTime] = useState(false);
        const [count, setCount] = useState(0);

        const throttleFun = (call, delay) => {
          return function () {
            if (isTime) return;
            setIsTime(true);
            call();
      
            setTimeout(() => {
              setIsTime(false)
            }, delay);
          };
        };
      
        const runFun = throttleFun(() => {
            setCount(count + 1);
        }, 3000);
      
        return (
          <>
            <button style={isTime ? { background: "red" } : {background:'blue'}} onClick={runFun}>Click</button>
            <p>{count}</p>
          </>
        );
      };`;

  const [isTime, setIsTime] = useState(false);
  const [count, setCount] = useState(0);

  const throttleFun = (call, delay) => {
    return function () {
      if (isTime) return;
      setIsTime(true);
      call();

      setTimeout(() => {
        setIsTime(false);
      }, delay);
    };
  };

  const runFun = throttleFun(() => {
    setCount(count + 1);
  }, 3000);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 1</h3>
      <p className='mb-2'>
        In This example when you clicked button it delays for 3 second before
        next call.
      </p>
      <button
        className='bg-blue-600 text-white font-bold px-2 py-1 rounded mb-3'
        onClick={runFun}
        style={isTime ? { background: "red" } : {}}
      >
        Click
      </button>
      <p className='p-2'>{count}</p>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
