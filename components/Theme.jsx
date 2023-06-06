import { BlogContext } from "@/contextApi/blogContext";
import React, { useContext } from "react";

const Theme = ({ children }) => {
  const { dark } = useContext(BlogContext);

  return <div className={dark ? "dark" : ""}>{children}</div>;
};

export default Theme;
