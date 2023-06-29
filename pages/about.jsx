import Intro from "@/components/Intro";
import Theme from "@/components/Theme";
import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <Theme>
        <div className="dark:bg-gray-700 h-[100vh]">
          <Intro />
        </div>
      </Theme>
    </Fragment>
  );
};

export default About;
