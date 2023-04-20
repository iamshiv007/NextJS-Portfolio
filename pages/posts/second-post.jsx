import Layout from "@/components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

const SecondPost = () => {
  return (
    <Layout>
      <Head>
        <title>Next js Vs React js</title>
      </Head>
      <p>Next js Vs React js</p>
      <p className={utilStyles.headingSm}>Aprile 20, 2023</p>
    </Layout>
  );
};

export default SecondPost;
