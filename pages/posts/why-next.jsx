import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { Fragment } from "react";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Navbar from "@/components/Navbar";

const FirstPost = () => {
  return (
    <Fragment>
      <Head>
        <title>Why Next js</title>
      </Head>
      <div>
        <Navbar>
          <div className="sm:w-[60%] sm:ml-[10%] w-[90%] m-auto">
            <h1 className="text-4xl mt-4">Why you should move in to Next js</h1>
            <p className="text-sm text-gray-600 my-2">Aprile 17, 2023</p>
            <div className="mt-5">
              <p className="font-bold">
                If you are a React js developer and understand its concepts
                then, you should consider moving to Next js for the following
                reasons:
              </p>
              <ol>
                <li>
                  <Link href="#">
                    1. Built-in Routing Support (Super easy to code)
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    2. 700 Times Faster speed in production (Fast)
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    3. Ability to write both Backend and Frontend code (API
                    support)
                  </Link>
                </li>
                <li>
                  <Link href="#">4. Search Engine Optimization (SEO)</Link>
                </li>
              </ol>
              <div className="w-fit m-auto pt-2">
                <img
                  src="https://static.agilitycms.com/illustrations/blog-illustrations/benefits-of-next.js.jpg?w=800"
                  alt=""
                  className="w-[600px]"
                />
              </div>
              <p className="bg-gray-200 my-4 p-2 rounded">
                {" "}
                <strong>Note:-</strong> if you are a student who is building a
                website using HTML, CSS , JavaScript and Bootstrap, I recommend
                you learning the basics of React js and then moving on to Next
                js.
              </p>
              <hr />
              {/* Routing */}
              <BuiltInRouting />

              <hr />
              {/* Speed */}
              <FasterSpeed />

              <hr />
              {/* Api */}
              <ApiSupport />

              <hr />
              {/* SEO */}
              <Seo />
            </div>
          </div>
        </Navbar>
      </div>
    </Fragment>
  );
};

export default FirstPost;

const BuiltInRouting = () => {
  return (
    <div className="py-4">
      <p className="text-2xl pb-2">1. Built-in Routing Support</p>
      <p>
        Next js provides a built-in-file-based Routing system, which means you
        don't need to use any external packages or libraries, React js requires
        the use of react-router-dom for Routing.
      </p>
      <h4 className="font-bold">For below version to Next.js 13</h4>
      <p className="text-gray-700 text-sm">
        Currently, i am working with Next js 13.3.0, where pages directory used
        for routing(Because the app directory is in experimental mode). For
        example if you create a directory called <strong>my-folder</strong>{" "}
        under the pages directory and create a file called{" "}
        <strong>my-file.js</strong>, the route to access this file will be{" "}
        <strong>my-folder/my-file</strong>.
      </p>
      <h4 className="font-bold">For above or equal version to Next.js 13</h4>
      <p className="text-gray-700 text-sm">
        If you are working with Next js version 13 or above and have an{" "}
        <strong>app</strong> directory in your project's folder structure, you
        can create a route by creating a folder inside app directory and adding
        a <strong>page.js</strong> file inside it. , for example if you create a
        folder called <strong>my-folder</strong> inside app directory and create
        a file called <strong>page.js</strong> inside it, the path of this file
        will be <strong>/my-folder</strong>.
      </p>
      <h4 className="font-bold">Include params in Route (:id)</h4>
      <p className="text-gray-700 text-sm">
        If you want to create a route like <strong>student/:id</strong>, you can
        create a file called <strong>[id].js</strong> inside a folder called{" "}
        <strong>student</strong> under the pages directory.
      </p>
    </div>
  );
};

const FasterSpeed = () => {
  return (
    <div className="py-4">
      <p className="text-2xl pb-2">2. 700 Times Faster Speed in Production</p>
      <h4 className="font-bold mt-1">Meaning?</h4>
      <p className="text-gray-700 text-sm">
        Next.js can be up to 700 times faster in production mode, which means
        that When you are building a website and it's running on localhost, any
        changes you make and save will updated 700 times faster than React.
        However, in deployment mode, it's speed approximately the same as to
        React.
      </p>
      <h4 className="font-bold">Why?</h4>
      <p className="text-gray-700 text-sm">
        Next.js uses Turbopack, which can updated up to 700 times faster than
        webpack used by react.
      </p>
      <h4 className="font-bold">Advantage?</h4>
      <p className="text-gray-700 text-sm">
        It saves developers time by updating code quickly in production mode.
      </p>
    </div>
  );
};

const ApiSupport = () => {
  return (
    <div className="py-4">
      <p className="text-2xl pb-2">3. Write both Backend and Frontend</p>
      <p className="text-gray-700 text-sm">
        Next js provides developers with a built-in server system, which means
        that you don't need to set up a separate server to write backend code
        for your application.
      </p>
      <p className="text-gray-700 text-sm">
        When you create a Next js app, a built-in folder called api
        automatically created inside the pages directory. You can create any
        file inside this api folder, and you can access the API defined in these
        file by using the api/&lt;fileName&gt;.
      </p>
    </div>
  );
};

const Seo = () => {
  return (
    <div className="py-4">
      <p className="text-2xl pb-2">4. Search Engine Optimization (SEO)</p>
      <p className="text-gray-700 text-sm">
        SEO means the ranking of your website on Search Engines such as Google,
        Bing, Yahoo and DuckDuckGo etc.
      </p>
      <p className="text-gray-700 text-sm">
        Load speed is the one of most important factors when it comes to SEO and
        Google ranking and with Next.js you're simply faster. What makes Next.js
        stand out against other popular framework, is that it renders the HTML
        on the server(server-side) rather than in the browser (client side).
      </p>
    </div>
  );
};
