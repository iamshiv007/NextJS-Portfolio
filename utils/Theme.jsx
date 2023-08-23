import React, { useContext } from "react";

import { BlogContext } from "@/contextApi/blogContext";

const Theme = ({ children }) => {
  const { dark } = useContext(BlogContext);

  return (
    <>
      <div className={dark ? "dark" : ""}>{children}</div>
    </>
  );
};

export default Theme;
