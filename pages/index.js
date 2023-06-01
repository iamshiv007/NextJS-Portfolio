import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi</p>
        <p>
          My name is Shivraj. I am a full stack web developer. I was done many
          projects basic to advance level in MERN stack.
        </p>
        <p className={utilStyles.headingLg}>Blogs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md mb-5">
          {/* Why Next JS */}
          <WhyNextJS />

          {/* CSS Transform */}
          <CssTransform />

          {/* background-blend-mode */}
          <BlendMode />

          {/* Css Rare Selector */}
          <CssSelector />
        </div>
      </section>
    </Layout>
  );
}

const WhyNextJS = () => {
  return (
    <div>
      <div className={utilStyles.shadow1}>
        <img
          src={
            "https://images.prismic.io/launchdarkly/6bfcaa10-40a3-42a5-9346-9e83d25cbeb4_What's%20So%20Great%20About%20Next.js.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C4000%2C2252&w=2000&h=1126"
          }
          alt="Next JS"
        />
        <div className="px-1 py-2">
          <Link href="/posts/first-post">Why we should move in to Next js</Link>
          <p className={utilStyles.headingSm}>Aprile 17, 2023</p>
        </div>
      </div>
    </div>
  );
};

const CssTransform = () => {
  return (
    <div>
      <div className={utilStyles.shadow1}>
        <img
          src="https://tenten.vn/tin-tuc/wp-content/uploads/2022/05/css_transform-4.png"
          alt="Css-Transform"
        />
        <div className="px-1 py-2">
          <Link href="/posts/css-transform">CSS transform property</Link>
          <p className={utilStyles.headingSm}>May 29, 2023</p>
        </div>
      </div>
    </div>
  );
};

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
