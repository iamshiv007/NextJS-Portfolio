import React, { useContext } from "react";

import { PortfolioContext } from "@/contextApi/PortfolioContext";

const Theme = ({ children }) => {
  const { dark } = useContext(PortfolioContext);

  return (
    <>
      <div className={dark ? "dark" : ""}>{children}</div>
    </>
  );
};

export default Theme;
