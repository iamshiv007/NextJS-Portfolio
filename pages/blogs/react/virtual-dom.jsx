import React, { Fragment } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const VirtualDom = () => {
  return (
    <Fragment>
      <Head>
        <title>Virtual DOM</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">
              Virtual DOM in React
            </h1>

            <p className="mt-5">
              When you&apos;re working with a web application built using frameworks
              like React, there are often many changes happening in user
              interface(UI). The virtual dom is a concept that helps optimize
              these changes and improve performance.
            </p>

            <p className="font-bold my-3">1. Traditional DOM</p>
            <p className="my-3">
              The document object model(DOM) is representation of the html
              structure of a web page. It defines how elements are organized,
              their attributes and their relationship with each other. Whenever
              there&apos;s a change in the application&apos;s state or data, the DOM needs
              to be updated to reflect those changes.
            </p>

            <p className="my-3 font-bold">2. Virtual DOM</p>
            <p>
              The virtual DOM is like a lightweight copy or representation of
              actual DOM. It&apos;s a javascript object that keeps track of current
              state of the ui. When changes occures in your application, the
              virtual dom is updated instead of directly modifying the actual
              DOM.
            </p>
          </div>

          <div className="layoutBox2">&quot;Ram Ram&quot;</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default VirtualDom;
