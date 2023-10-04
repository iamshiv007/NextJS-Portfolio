import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, github } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const UseEffect = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>useEffect in React</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h1 className='blog-heading'>useEffect in React</h1>

            <ol className='list-decimal list-inside'>
              <li className='mt-5'>
                The useEffect hook allows you to perform side Effects in your
                components.
              </li>

              <li className='mt-2'>
                Some Examples of side effect are : Fetching Data, directly
                updating the form, and timers.
              </li>

              <li className='mt-2'>
                useEffect accepts two arguments, The second argument is optional
                = useEffect(&lt;function&gt;, &lt;dependency&gt;)
              </li>
            </ol>

            <Example1 myDark={theme === "dark"} />
            <Example2 myDark={theme === "dark"} />
            <Example3 myDark={theme === "dark"} />

            <div className='text-center m-5 text-2xl'>❤️ Thank You 🙏</div>
          </div>

          <div className='layoutBox2'>Pranam</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default UseEffect;

const Example1 = ({ myDark }) => {
  const codeString = ` useEffect(() => {
    //Runs on every render
  });`;

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 1</h3>
      <p className='mb-2'>1. No dependency passed:</p>
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

const Example2 = ({ myDark }) => {
  const codeString = `useEffect(() => {
    //Runs only on the first render
  }, []);`;

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 2</h3>
      <p className='mb-2'>2. An empty array:</p>
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

const Example3 = ({ myDark }) => {
  const codeString = `useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);`;

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 3</h3>
      <p className='mb-2'>3. Props or state values:</p>
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
