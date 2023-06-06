import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import ThemeBtn from "@/components/ThemeBtn";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <Navbar>
        <div className="w-[90%] m-auto">
          <Blogs />
        </div>
        <ThemeBtn />
      </Navbar>
    </div>
  );
};

export default BlogsPage;
