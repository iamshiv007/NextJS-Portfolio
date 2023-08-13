import Head from "next/head";
import { Fragment, useState } from "react";
import Link from "next/link";
import Theme from "@/components/Theme";
import { RiCloseLine } from "react-icons/ri";
import BackTo from "@/components/BackTo";
import Image from "next/image";

const FirstPost = () => {
  const [close, setClose] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Why Next js</title>
      </Head>
      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer h-full">
          <div className="layoutBox1">
            <h1 className="blog-heading">Why you should move in to Next js</h1>
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
              <p className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
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

              <div className="text-center m-5 text-2xl">❤️ Thank You 🙏</div>
            </div>
          </div>

          <div className="layoutBox2">
            <div className={close ? "hidden" : ""}>
              <Link
                href={"https://shiv-s-blog.vercel.app/posts/react/fragment"}
              >
                <div
                  style={{
                    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77S6c9Tlz-zqWRRPgKeJDd8kSjbR_alp30g&usqp=CAU')`,
                  }}
                  className={`border border-solid border-black h-[150px]`}
                >
                  <div
                    onClick={() => setClose(true)}
                    className="text-[0.8rem] w-fit bg-white ml-auto z-20"
                  >
                    <RiCloseLine color="blue" />
                  </div>
                </div>
              </Link>
              <p className="text-[0.6rem] text-right">Report this ad</p>
            </div>
          </div>
        </div>
      </Theme>
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
      <h4 className="font-bold my-1">For Pages directory</h4>
      <Image
        width={800}
        height={500}
        className="sm:w-[60%] w-[90%] m-auto mt-3"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--DIT1rRjH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/akuks/Misc/main/Images/nextjs_routing.png"
        alt="image1"
      />
      <p className="text-center mb-3">Image 1</p>
      <p className="text-gray-700 text-sm">
        Currently, i am working with Next js 13.3.0, where pages directory used
        for routing(Because the app directory is in experimental mode). For
        example if you create a directory called <strong>my-folder</strong>{" "}
        under the pages directory and create a file called{" "}
        <strong>my-file.js</strong>, the route to access this file will be{" "}
        <strong>my-folder/my-file</strong>. &#123;image 1&#125;
      </p>
      <h4 className="font-bold my-1">Include params in Route (:id)</h4>
      <p className="text-gray-700 text-sm">
        If you want to create a route like <strong>student/:id</strong>, you can
        create a file called <strong>[id].js</strong> inside a folder called{" "}
        <strong>student</strong> under the pages directory. &#123;image 1&#125;
      </p>
      <h4 className="font-bold my-1">For app directory</h4>
      <Image
        width={800}
        height={500}
        className="sm:w-[75%] w-[90%] m-auto mt-3"
        src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2FTvIi0gcnHOrapoHrT3qjq%2F9039474cdf25f27125cbdbdde35f32f5%2Froute-segments-to-path-segments.png&w=1920&q=75"
        alt="image2"
      />
      <p className="text-center mb-3">Image 2</p>
      <Image
        width={800}
        height={500}
        className="sm:w-[75%] w-[90%] m-auto mt-3"
        src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2FTvIi0gcnHOrapoHrT3qjq%2F9039474cdf25f27125cbdbdde35f32f5%2Froute-segments-to-path-segments.png&w=1920&q=75"
        alt="image3"
      />
      <p className="text-center mb-3">Image 3</p>
      <p className="text-gray-700 text-sm">
        If you are working with Next js version 13 or above and have an{" "}
        <strong>app</strong> directory in your project's folder structure, you
        can create a route by creating a folder inside app directory and adding
        a <strong>page.js</strong> file inside it. , for example if you create a
        folder called <strong>my-folder</strong> inside app directory and create
        a file called <strong>page.js</strong> inside it, the path of this file
        will be <strong>/my-folder</strong>. &#123;Image 2, Image 3&#125;
      </p>
    </div>
  );
};

const FasterSpeed = () => {
  return (
    <div className="py-4">
      <p className="text-2xl pb-2">2. 700 Times Faster Speed in Production</p>
      <h4 className="font-bold my-1">Meaning?</h4>
      <p className="text-gray-700 text-sm">
        Next.js can be up to 700 times faster in production mode, which means
        that When you are building a website and it's running on localhost, any
        changes you make and save will updated 700 times faster than React.
        However, in deployment mode, it's speed approximately the same as to
        React.
      </p>
      <h4 className="font-bold my-1">Why?</h4>
      <p className="text-gray-700 text-sm">
        Next.js uses Turbopack, which can updated up to 700 times faster than
        webpack used by react.
      </p>
      <h4 className="font-bold my-1">Advantage?</h4>
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
      <h4 className="font-bold my-1">For Pages Directory</h4>
      <p className="text-gray-700 text-sm">
        When you create a Next js app, a built-in folder called api
        automatically created inside the pages directory. You can create any
        file inside this api folder, and you can access the API defined in these
        file by using the api/&lt;fileName&gt;.
      </p>
      <h4 className="font-bold my-1">For App Directory</h4>
      <Image
        width={800}
        height={500}
        className="sm:w-[75%] w-[90%] m-auto mt-3"
        src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-special-file.png&w=1920&q=75"
        alt="image4"
      />
      <p className="text-center mb-3">Image 4</p>
      <p className="text-gray-700 text-sm">
        With next js latest version(13) we can make api routes with help of
        route.js/route.ts file. In App directory we can make folder and make a
        file name route.js then our api route is /&lt;folder name&gt;.
        &#123;image4&#125;
      </p>
      <p className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
        <strong>Note :-</strong> We can make api routes by making folder and
        route.js file in only app directory. We cannot make same api route or
        frontend component route in this condition route will conflicted.
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
