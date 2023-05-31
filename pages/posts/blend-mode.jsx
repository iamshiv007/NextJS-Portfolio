import Layout from "@/components/layout";
import Head from "next/head";
import React, { Fragment } from "react";

const BlendMode = () => {
  return (
    <Fragment>
      <Layout>
        <Head>
          <title>Background Blend Mode</title>
        </Head>

        <div>
          <h2>Background Blend Mode</h2>
          <p>
            In this blog we are exlore rare but some time very userfull property
            of css ya! it's nothing but background-blend-mode
          </p>
          <p>
            Before we are starting a example we have to know this property use
            for two images
          </p>
          <h4>Let's fly on independent code universe(icu)</h4>

          <br />

          <h3>Example1</h3>
          <p>normal</p>
          <div className="exa1Images1"></div>
          <p>screen</p>
          <div className="exa1Images2"></div>
          <p>multiply</p>
          <div className="exa1Images3"></div>
          <p>overlay</p>
          <div className="exa1Images4"></div>
          <p>darken</p>
          <div className="exa1Images5"></div>
          <p>lighten</p>
          <div className="exa1Images6"></div>
          <p>color-dodge</p>
          <div className="exa1Images7"></div>
          <p>saturation</p>
          <div className="exa1Images8"></div>
          <p>color</p>
          <div className="exa1Images9"></div>
          <p>luminosity</p>
          <div className="exa1Images10"></div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default BlendMode;
