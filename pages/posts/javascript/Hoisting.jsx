import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BlogContext } from "@/contextApi/blogContext";

const HoistingComponent = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>Javascript hoisting</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h2 className="blog-heading">Hoisting</h2>

            <Example1 myDark={myDark} />
            <Example2 myDark={myDark} />
            <Example3 myDark={myDark} />
          </div>

          <div className="layoutBox2">Lorem</div>
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
      <h3 className="text-lg font-bold my-4">
        Example 1 : Function Declaration Hoisting
      </h3>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="mt-2">
        In this example, we call the <strong> sayHello() </strong>
        function before it is actually defined. However JavaScript hoists
        function declaration to the top of their scope, so the function can be
        called before its declarations without causing a error. The output will
        be "Hello".
      </div>
    </>
  );
};

const Example2 = ({ myDark }) => {
  const codeString = `  console.log(x);
  var x = 5;`;
  return (
    <>
      <h3 className="text-lg font-bold my-4">
        Example 2 : Variable Declaration Hoisting
      </h3>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="mt-2">
        In this example, we try to access the value of the variable{" "}
        <strong>'x'</strong> before it is declared. However javaScript hoists
        variable declaration to the top of their scope, so the variable is
        created before the console log statement is executed. The output will be{" "}
        <strong> 'undefined' </strong> because the variable is declared but not
        assigned a value at the time 'console log' statement.
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
      <h3 className="text-lg font-bold my-4">
        Example 3 : Hoisting within a Function
      </h3>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="mt-2">
        In this example, we define a function <strong>'foo'</strong> that
        contain variable declaration and assignment. When we call the function{" "}
        JavaScript hoist the variable declarations <strong>'var x'</strong> to
        the top of the functon's scope. However, the assignment{" "}
        <strong> 'x=10' </strong> is not hoisted, so the first{" "}
        <strong>'console.log'</strong> statement will output{" "}
        <strong> 'undefined'</strong>, and the second{" "}
        <strong>'console.log'</strong> statement will output{" "}
        <strong>'10'</strong>
      </div>
    </>
  );
};
