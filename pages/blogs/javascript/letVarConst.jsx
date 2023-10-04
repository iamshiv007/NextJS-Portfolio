import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const LetVarConst = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Let Var Const</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <p className='font-bold text-center mb-3'>🙏Namaskaram🙏</p>
            <h2 className='blog-heading'>Let Var and Const</h2>

            <p className='mt-2'>
              In javascript &quot;let&quot;, &quot;var&quot;, and
              &quot;const&quot; are used to declare variables, but they have
              some differences in terms of their scope and behavior.
            </p>

            <Var myDark={theme === "dark"} />
            <Let myDark={theme === "dark"} />
            <Const myDark={theme === "dark"} />
          </div>

          <div className='layoutBox2'>Hii</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default LetVarConst;

const Var = ({ myDark }) => {
  return (
    <>
      <h3 className='text-xl font-bold mt-6'>Var</h3>
      <ul className='list-inside list-disc'>
        <li>
          Variables declared with &quot;var&quot; are function-scoped. This
          means that they are accessible within the entire function in which
          they are defined.
        </li>
        <li>
          If a &quot;var&quot; variable is declared outside of any function, it
          becomes a global variable, accessible throughout the entire program.
        </li>
        <li>&quot;var&quot; variables can be redeclared and reassigned.</li>
      </ul>

      <Example1 myDark={myDark} />
    </>
  );
};

const Example1 = ({ myDark }) => {
  const codeString = `  const Example1 = () => {
    var x = 10;
    if (true) {
      var x = 20; // This will overwrite the outer variable
      console.log(x); // Output: 20
    }

    const myFunction = () => {
      var x = 30;
      console.log("function scope", x); // Output: 30
    };
    myFunction();

    const myFunction2 = () => {
      console.log("Point two", x) // Output: 20
    }
    myFunction2()

    console.log(x); // Output: 20
  };`;

  var x = 10;
  if (10 === 10) {
    var x = 20; // This will overwrite the outer variable
    console.log(x); // Output: 20
  }

  const myFunction = () => {
    var x = 30;
    console.log("function scope", x); // Output: 30
  };
  myFunction();

  const myFunction2 = () => {
    console.log("Point two", x); // Output: 20
  };
  myFunction2();

  console.log(x); // Output: 20
  return (
    <>
      <h3 className='text-lg font-bold my-4'>Example 1</h3>
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

const Let = ({ myDark }) => {
  return (
    <>
      <h3 className='text-xl font-bold mt-6'>Let</h3>
      <ul className='list-inside list-disc'>
        <li>
          Variables declared with &quot;let&quot; are block-scoped. This means
          that they are accessible only within the block in which they are
          defined, such as within loops or conditional statement.
        </li>
        <li>
          &quot;let&quot; variable can be reassigned, but they cannot be
          redeclared within the same block scope.{" "}
        </li>
      </ul>

      <Example2 myDark={myDark} />
    </>
  );
};

const Example2 = ({ myDark }) => {
  const codeString = `  const Example2 = () => {
    let x = 10;
    if (10 === 10) {
      let x = 20; // This creates a new variable in a different scope
      console.log(x); // Output: 20

      x = 30 // Reassign
      console.log(x) // Output: 30

      // let x = 40 // wrong ❌  not redclarable
    }
    console.log(x); // Output: 10
  };
  `;
  let x = 10;
  if (true) {
    let x = 20; // This creates a new variable in a different scope
    console.log(x); // Output: 20

    x = 30; // Reassign
    console.log(x); // Output: 30

    // let x = 40 // wrong ❌  not redclarable
  }
  console.log(x); // Output: 10
  return (
    <div>
      <h3 className='text-lg font-bold my-4'>Example 2</h3>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

const Const = ({ myDark }) => {
  return (
    <>
      <h3 className='text-xl font-bold mt-6'>const</h3>
      <ul className='list-inside list-disc'>
        <li>
          Variables declared with &quot;const&quot; are also block-scoped.
        </li>
        <li>
          &quot;const&quot; variables cannot be reassigned once they are
          initialized. However, for objects and arrays, the properties and
          elements can be modified.
        </li>
        <li>
          It is common to use &quot;const&quot; for values that are not intended
          to be changed.
        </li>
      </ul>

      <Example3 myDark={myDark} />
    </>
  );
};

const Example3 = ({ myDark }) => {
  const codeString = `const Example3 = () => {
    const x = 10;
    if (true) {
      const x = 20; // This creates a new variable in a different scope
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10

    // x = 30; // cannot reassign

    // const x = 40;  // cannot redclare
  };`;

  const x = 10;
  if (true) {
    const x = 20; // This creates a new variable in a different scope
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10

  // x = 30; // cannot reassign

  // const x = 40;  // cannot redclare

  return (
    <div>
      <h3 className='text-lg font-bold my-4'>Example 3</h3>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
