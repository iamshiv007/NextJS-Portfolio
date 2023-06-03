import React, { Fragment } from "react";
import Link from "next/link";
import { blogs } from "@/blogData";
import utilStyles from "../styles/utils.module.css";

const Blogs = () => {
  return (
    <Fragment>
      {blogs.map((blog) => (
        <div>
          <div className={utilStyles.shadow1}>
            <img src={blog.imageUrl} alt="img not found" />
            <div className="px-1 py-2">
              <Link href={`/posts/${blog.linkName}`}>{blog.name}</Link>
              <p className={utilStyles.headingSm}>{blog.date}</p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Blogs;

const BlendMode = () => {
  return (
    <div>
      <div className={utilStyles.shadow1}>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/a9e6f9b548512fc1e81455a6ca2d59e273d41bda/668f7/assets/images/blending-examples.png"
          alt=""
        />
        <div className="px-1 py-2">
          <Link className="mt-2 block" href={"/posts/blend-mode"}>
            CSS background-blend-mode
          </Link>
          <p className={utilStyles.headingSm}>May 30, 2023</p>
        </div>
      </div>
    </div>
  );
};

const CssSelector = () => {
  return (
    <div>
      <div className={utilStyles.shadow1}>
        <img
          src="https://internetingishard.netlify.app/css-selectors-1f0064.464e0c0e.png"
          alt=""
        />
        <div className="px-1 py-2">
          <Link href={"/posts/css-rare-selector"}>CSS Rare Selector</Link>
          <p className={utilStyles.headingSm}>May 31, 2023</p>
        </div>
      </div>
    </div>
  );
};

const Hoisting = () => {
  return (
    <div>
      <div className={utilStyles.shadow1}>
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612248117684/PTiy4Ga2n.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webpy"
          alt=""
        />
        <div className="px-1 py-2">
          <Link href={"/posts/Hoisting"}>Hoisting In Javasript</Link>
          <p className={utilStyles.headingSm}>June 1, 2023</p>
        </div>
      </div>
    </div>
  );
};

const ReactResCarousel = () => {
  return (
    <div>
      <div className={utilStyles.shadow1}>
        <img
          src="https://reactscript.com/wp-content/uploads/2016/07/React.js-Responsive-Carousel.png"
          alt=""
        />
        <div className="px-1 py-2">
          <Link href={"/posts/react-res-carousel"}>
            React Responsive Carousel
          </Link>
          <p className={utilStyles.headingSm}>June 2, 2023</p>
        </div>
      </div>
    </div>
  );
};
