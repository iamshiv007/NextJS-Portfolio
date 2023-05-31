import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";

const CssTransform = () => {
  return (
    <Layout>
      <Head>
        <title>CSS Transform</title>
      </Head>

      <div>
        <h2>CSS Transform</h2>
        <p>
          Css tranform is less used but very important property of css which is
          use to give some movement in our web page which make ux better. In
          this blog we are going to understand css transform with easy examples.
        </p>
      </div>
      <br />
      <div className="exa1">
        <h3>Example 1</h3>
        <div className="box1">
          <p>transform: translateX(50px)</p>
        </div>
      </div>

      <br />

      <div className="exa2">
        <h3>Example 2</h3>
        <div className="box2">
          <p>transform: rotate(40deg)</p>
        </div>
      </div>
    </Layout>
  );
};

export default CssTransform;
