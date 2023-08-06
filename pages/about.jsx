import Intro from "@/seactions/Intro";
import Theme from "@/components/Theme";
import React, { Fragment } from "react";
import MobileNavbar from "@/components/layout/mobileNavbar";
import Navbar from "@/components/layout/Navbar";

const About = () => {
  return (
    <Fragment>
      <Theme>
        <div className="dark:bg-gray-700 h-[100vh]">
          <Navbar />
          <MobileNavbar />
          <Intro />
        </div>
      </Theme>
    </Fragment>
  );
};

export default About;
