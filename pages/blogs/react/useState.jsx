import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import BackTo from "@/components/buttons/BackTo";
import Theme from "@/utils/Theme";
import { ThemeContext } from "@/context/themeContext";

const UseState = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>useState in React</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h1 className='blog-heading'>useState in React</h1>

            <div>
              <p className='text-lg font-medium mt-4'>Introduction :-</p>
              <p className='my--2'>
                React is a popular javascript library for building user
                interfaces, and its introduction to hooks in 16.8 brought
                significant improvements to functional component. One of the
                most widely used hooks is useState , which allows developers to
                add state managment capabilities to their functional
                compoenents. In this blog post, we will explore the usestate
                hook, understand its usage, and learn how it simplifies state
                managment in React applications.
              </p>

              <p className='text-lg font-medium mt-4'>Why useState? :-</p>
              <p className='my-2'>
                Before the introduction of hooks, state managment in React is
                primarily done using class components. While class components
                serve the purpose , they often require boilerplate code and
                complex syntax . Functinal components, on the other hand, were
                simpler and more lightweight but lacked built in state managment
                capabilities. The useState hook bridges this gap by enabling
                functinal components to handle state, making them more powerful
                and easier to work with.
              </p>

              <Syntax myDark={theme === "dark"} />

              <p className='text-center my-3'>🙏 Dhanyawaad</p>
            </div>
          </div>

          <div className='layoutBox2'>Namaste</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default UseState;

const Syntax = ({ myDark }) => {
  const codeString = "const [state, setState] = useState(initialState);";

  return (
    <>
      <p className='mt-5'>
        The useState hook is a function that takes an initial state value as its
        arguments and return an array with two elements: the current state value
        and a function to update that state value.
      </p>
      <div className='my-3'>
        <SyntaxHighlighter
          language='javascript'
          showLineNumbers={true}
          style={myDark ? dark : github}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>

      <div>
        <p className='my-4'>Here&apos;s the breakdown of syntax :-</p>

        <p className='mt-2'>
          <strong>state</strong> = Represents the current value of the state
          variable. It can be of any data type e.g = Boolean, String, Object or
          Array.
        </p>

        <p className='mt-2'>
          <strong>setState</strong> = The function return by useState that
          allows you to update the state value . When called with a new value,
          it triggers a re-render of the component , updating the state and any
          component elements that depend on it.
        </p>

        <p className='mt-2'>
          <strong>useState(initialState) = </strong>
          the useState function takes the initial state values as its argument .
          This initial state is only used during the first render of the
          component. After that, the state variable will be updated with new
          values.
        </p>
      </div>
    </>
  );
};
