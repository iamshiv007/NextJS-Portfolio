import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const HoistingComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Javascript hoisting</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h2 className='blog-heading'>Hoisting</h2>

            <Example1 myDark={theme === "dark"} />
            <Example2 myDark={theme === "dark"} />
            <Example3 myDark={theme === "dark"} />
          </div>

          <div className='layoutBox2'>Lorem</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default HoistingComponent;

const Example1 = ({ myDark }) => {
  const codeString = `  sayHello();

  function sayHello() {
    console.log("Hello!");
  }`;
  return (
    <>
      <h3 className='text-lg font-bold my-4'>
        Example 1 : Function Declaration Hoisting
      </h3>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className='mt-2'>
        In this example, we call the <strong> sayHello() </strong>
        function before it is actually defined. However JavaScript hoists
        function declaration to the top of their scope, so the function can be
        called before its declarations without causing a error. The output will
        be &quot;Hello&quot;.
      </div>
    </>
  );
};

const Example2 = ({ myDark }) => {
  const codeString = `  console.log(x);
  var x = 5;`;
  return (
    <>
      <h3 className='text-lg font-bold my-4'>
        Example 2 : Variable Declaration Hoisting
      </h3>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className='mt-2'>
        In this example, we try to access the value of the variable{" "}
        <strong>&quot;x&quot;</strong> before it is declared. However javaScript
        hoists variable declaration to the top of their scope, so the variable
        is created before the console log statement is executed. The output will
        be <strong> &quot;undefined&quot; </strong> because the variable is
        declared but not assigned a value at the time &quot;console log&quot;
        statement.
      </div>
    </>
  );
};

const Example3 = ({ myDark }) => {
  const codeString = `  function foo() {
    console.log(x);
    var x = 10;
    console.log(x);
  }
  foo();`;

  return (
    <>
      <h3 className='text-lg font-bold my-4'>
        Example 3 : Hoisting within a Function
      </h3>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className='mt-2'>
        In this example, we define a function <strong>&quot;foo&quot;</strong>{" "}
        that contain variable declaration and assignment. When we call the
        function JavaScript hoist the variable declarations{" "}
        <strong>&quot;var x&quot;</strong> to the top of the functon&apos;s
        scope. However, the assignment <strong> &quot;x=10&quot; </strong> is
        not hoisted, so the first <strong>&quot;console.log&quot;</strong>{" "}
        statement will output <strong> &quot;undefined&quot;</strong>, and the
        second <strong>&quot;console.log&quot;</strong> statement will output{" "}
        <strong>&quot;10&quot;</strong>
      </div>
    </>
  );
};
