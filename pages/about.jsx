import Intro from "@/components/Intro";
import Theme from "@/components/Theme";
import React, { Fragment } from "react";
import MobileNavbar from "@/components/mobileNavbar";
import Navbar from "@/components/Navbar";

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
