import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import { BlogContext } from "@/contextApi/blogContext";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const UseEffect = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>useEffect in React</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              useEffect
            </h1>

            <ol className="list-decimal list-inside">
              <li className="mt-5">
                The useEffect hook allows you to perform side Effects in your
                components.
              </li>

              <li className="mt-2">
                Some Examples of side effect are : Fetching Data, directly
                updating the form, and timers.
              </li>

              <li className="mt-2">
                useEffect accepts two arguments, The second argument is optional
                = useEffect(&lt;function&gt;, &lt;dependency&gt;)
              </li>
            </ol>

            <Example1 myDark={myDark} />
            <Example2 myDark={myDark} />
            <Example3 myDark={myDark} />

            <div className="text-center m-5 text-2xl">❤️ Thank You 🙏</div>
          </div>

          <div className="layoutBox2">Pranam</div>
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
      <h3 className="text-lg font-bold mt-6 mb-4">Example 1</h3>
      <p className="mb-2">1. No dependency passed:</p>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
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
      <h3 className="text-lg font-bold mt-6 mb-4">Example 2</h3>
      <p className="mb-2">2. An empty array:</p>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
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
      <h3 className="text-lg font-bold mt-6 mb-4">Example 3</h3>
      <p className="mb-2">3. Props or state values:</p>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
