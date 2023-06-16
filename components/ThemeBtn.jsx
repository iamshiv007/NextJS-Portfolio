import React, { useContext } from "react";
import { BlogContext } from "@/contextApi/blogContext";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeBtn = () => {
  const { dark, setDark } = useContext(BlogContext);

  return (
    <div
      onClick={() => setDark(!dark)}
      className="w-fit fixed bg-white right-8 bottom-6 rounded-full shadow-md shadow-gray-700 dark:shadow-white p-2 text-2xl dark:bg-black dark:text-white cursor-pointer z-10"
    >
      {dark ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ThemeBtn;
