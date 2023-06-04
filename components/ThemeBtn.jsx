import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeBtn = ({ darkTheme, setDarkTheme }) => {
  return (
    <div
      onClick={() => setDarkTheme(!darkTheme)}
      className="w-fit fixed right-3 bottom-6 rounded-full shadow-md shadow-gray-700 dark:shadow-white p-2 text-2xl dark:bg-black dark:text-white cursor-pointer"
    >
      {darkTheme ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ThemeBtn;
