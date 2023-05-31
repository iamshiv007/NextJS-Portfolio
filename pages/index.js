import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Shivraj. I am a full stack web developer. I was done many projects basic to advance level in MERN stack. We can connect on Instagram  <a target='_blank' href='https://www.instagram.com/iam_shiv_726'>iam_shiv_726</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a target='_blank' href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p className={utilStyles.headingLg}>Blog</p>
        <div>
          <Link href='/posts/first-post'>Why we should move in to Next js</Link>
          <p className={utilStyles.headingSm}>Aprile 17, 2023</p>
        </div>
        <div className={utilStyles.gap1}>
          <Link href='/posts/css-transform'>CSS transform property</Link>
          <p className={utilStyles.headingSm}>May 29, 2023</p>
          {/* <p className={utilStyles.headingSm}>Aprile 20, 2023</p> */}
        </div>
        <div className={utilStyles.gap1}>
          <Link href={'/posts/blend-mode'}>CSS background-blend-mode</Link>
          <p className={utilStyles.headingSm}>May 30, 2023</p>
        </div>
      </section>
    </Layout>
  );
}