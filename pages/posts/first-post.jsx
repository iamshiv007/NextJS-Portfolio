import Layout from "@/components/layout";
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Why Next js</title>
      </Head>
      <p className={utilStyles.headingXl}>Why you should move in to Next js</p>
      <p className={utilStyles.headingSm}>Aprile 17, 2023</p>
      <p>If you are a React js developer and understand its concepts then, you should consider moving to Next js for the following reasons:</p>
      <ol>
        <li>Built-in Routing Support</li>
        <li>700 Times Faster speed in Froduction</li>
        <li>Ability to write both backend and frontend code</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Scalability</li>
      </ol>
      <p> <strong>Note:-</strong> if you are a student who is building a website using HTML, CSS , JavaScript and Bootstrap, I recommend you learning the basics of React js and then moving on to Next js.</p>
      <hr />
      <div>
      <p className={utilStyles.headingLg}>1. Built-in Routing Support</p>
      <p>Next js provides a built-in-file-based Routing system, which means you don't need to use any external packages or libraries, React js requires the use of react-router-dom for Routing.</p>
      <h4>For below version to Next.js 13</h4>  
      <p>Currently, i am working with Next js 13.3.0, where pages directory used for routing(Because the app directory is in experimental mode). For example if you create a directory called <strong>my-folder</strong> under the pages directory and create a file called <strong>my-file.js</strong>, the route to access this file will be  <strong>my-folder/my-file</strong>.</p>
      <h4>For above or equal version to Next.js 13</h4>  
      <p>If you are working with Next js version 13 or above and have an <strong>app</strong> directory in your project's folder structure, you can create a route by creating a folder inside app directory and adding a  <strong>page.js</strong> file inside it.
        , for example if you create a folder called <strong>my-folder</strong> inside app directory and create a file called <strong>page.js</strong> inside it, the path of this file will be <strong>/my-folder</strong>. 
      </p>
      <h4>Include params in Route (:id)</h4>  
      <p>If you want to create a route like <strong>student/:id</strong>, you can create a file called  <strong>[id].js</strong> inside a folder called <strong>student</strong> under the pages directory.</p>
      </div>
      <hr />
      <div>
      <p className={utilStyles.headingLg}>2. 700 Times Faster Speed in Production</p>
      <strong>Meaning?</strong>
      <p>Next.js can be up to 700 times faster in  production mode, which means that When you are building a website and it's running on localhost, any changes you make and save will updated 700 times faster than React. However, in deploment mode, it's speed approximately the same as to React.
      </p>
      <strong>Why?</strong>
      <p>Next.js uses Turbopack, which can updated up to 700 times faster than webpack used by react.</p>
      <strong>Advantage?</strong>
      <p>It saves developers time by updating code quickly in production mode.</p>
      </div>
    </Layout>
  );
};

export default FirstPost;
