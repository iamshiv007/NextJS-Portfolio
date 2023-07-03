import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment } from "react";

const HoistingComponent = () => {
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
            <p className="text-3xl">Hoisting</p>

            <p>
              I want to explain Hoisting in my way which is better than
              theortical language
            </p>

            <p>
              So in javascript whenever we'r decrare a function with function
              keyword then it will be go on top of scope in background, means
              now function is on the top so we can call this function from
              anywhere we can call it before it's declaration but when we
              deaclare a function with const, var, or let keyword we can't call
              the function before it's declaration because in this condition
              function will not go on the top of scope.
            </p>
          </div>

          <div className="layoutBox2">Lorem</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default HoistingComponent;
