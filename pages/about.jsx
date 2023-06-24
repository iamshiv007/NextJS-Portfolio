import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <Theme>
        <ThemeBtn />

        <div className="dark:bg-gray-700 h-[92vh]">
          <Intro />
        </div>
      </Theme>
    </Fragment>
  );
};

export default About;
