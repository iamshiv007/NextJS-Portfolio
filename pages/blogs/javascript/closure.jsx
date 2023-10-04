import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const Closure = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Closure in Javascript</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h2 className='blog-heading'>Closure in JavaScript</h2>

            <h3 className='text-lg font-bold my-4'>Defination :-</h3>
            <p className='mt-3 font-bold'>Defination by javascript</p>
            <p className='mt-3'>
              Closure in Javascript refers to the conbination of a function and
              the lexical enviroment in which it declared. It allows a function
              to access variables and data from its outer scope, even after the
              outer function has finished executing.
            </p>

            <p className='mt-3'>
              In Other words, when a function is defined inside another
              function, the inner function retains access to the variables,
              parameters and function of it&apos;s parent function, even after
              the parent function has completed execution. This access to the
              outer scope is made possible by the closure.
            </p>

            <p className='mt-3 font-bold'>Apni defination</p>

            <p>
              Hindi main bolu to muje kya samaj ayaa ki agar hum ek function ke
              undar koi dusara function banaye to hum bahar(outer) wale function
              ke variabe ko bhi use kar sakte hai vo variable ya data destroy
              nahi hoga uska access hamesha undar(inner) wale function ko
              milega. To Chalo niche kuch Example dekhe:-
            </p>
            <Example1 myDark={theme === "dark"} />
            <Example2 myDark={theme === "dark"} />
            <Example3 myDark={theme === "dark"} />
            <Example4 myDark={theme === "dark"} />
            <Example5 myDark={theme === "dark"} />
          </div>

          <div className='layoutBox2'>Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Closure;

const Example1 = ({ myDark }) => {
  const codeString = ` function outerFun() {
   var name = "Shivraj";
   function innerFun() {
     console.log(name);
   }
   innerFun();
 }
 outerFun(); // Output will be "Shivraj"`;

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 1</h3>
      <p className='mb-2'>
        In This example you can see inner function access the variable which is
        declared in outer function.
      </p>
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
  const codeString = ` function outerFun() {
   const blog = "Closure in JavaScript";
   function innerFun() {
     console.log(name);
   }
   return innerFun;
 }
 
 const store = outerFun();
 console.log(store()) // output wiil be "Closure in JavaScript" ;`;

  return (
    <>
      {" "}
      <h3 className='text-lg font-bold mt-6 mb-3'>Example 2</h3>
      <p className='mb-2'>
        In This example outer function (outerFun) return a inner fun (innerFun)
        which is stored in store variable.
      </p>
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
  const codeString = ` function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add1 = makeAdder(5);
  const add2 = makeAdder(10);
  
  console.log(add1(12)); // 17
  console.log(add2(11)); // 21" ;`;

  return (
    <>
      {" "}
      <h3 className='text-lg font-bold mt-6 mb-3'>Example 3</h3>
      <p className='mb-2'>
        In This example makeAdder function return a anonymous function which is
        stored in add1 and add2 variables and final output is (parameter passed
        in outer function + parameter passed in inner function)
      </p>
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

const Example4 = ({ myDark }) => {
  const codeString = ` // global scope
  const e = 10;
  function sum(a) {
    return function (b) {
      return function (c) {
        // outer functions scope
        return function (d) {
          // local scope
          return a + b + c + d + e;
        };
      };
    };
  }
  
  console.log(sum(1)(2)(3)(4)); // 20`;

  return (
    <>
      {" "}
      <h3 className='text-lg font-bold mt-6 mb-3'>Example 4</h3>
      <p className='mb-2'>
        In This example when we call sum function then it returns top level
        inner function and now we can access it by calling sum(), like =
        sum()().
      </p>
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

const Example5 = ({ myDark }) => {
  const codeString = `  function sum(a) {
    return function sum2(b) {
      return function sum3(c) {
        return function sum4(d) {
          return a + b + c + d + e;
        };
      };
    };
  }
  
  const sum2 = sum(1);
  const sum3 = sum2(2);
  const sum4 = sum3(3);
  const result = sum4(4);
  console.log(result); // 20`;

  return (
    <>
      {" "}
      <h3 className='text-lg font-bold mt-6 mb-3'>Example 5</h3>
      <p className='mb-2'>
        In This example we are storing inner function one by one and when last
        function is (sum4) called it return the sum of all parameters passed in
        functions.
      </p>
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
