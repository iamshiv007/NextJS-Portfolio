import Head from "next/head";
import { Fragment, useContext, useEffect } from "react";
import Intro from "@/components/Intro";
import { BlogContext } from "@/contextApi/blogContext";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/mobileNavbar";
import Skills from "@/components/Skills";
import LatestBlogs from "@/components/LatestBlogs";
import Journey from "@/components/Journey";
import Apps from "@/components/Apps";
import Footer from "@/components/Footer";
import SendMail from "@/components/SendMail";
import SocialMedia from "@/components/SocialMedia";
import Projects from "@/components/Projects";
import ChatSystem from "@/components/ChatSystem";

export default function Home() {
  const { dark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>Shiv's Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Shiv's Portfolio"/>
          <meta name="description" content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
              <meta property="og:url" content="https://shiv-s-portfolio.vercel.app"/>
                <meta property="og:title" content="Shiv's Portfolio"/>
                  <meta property="og:description" content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."/>
                    <meta property="og:image" content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"/>

                      {/* <!-- Twitter --> */}
                      <meta property="twitter:card" content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"/>
                        <meta property="twitter:url" content="https://shiv-s-portfolio.vercel.app"/>
                          <meta property="twitter:title" content="Shivraj Gurjar - Portfolio"/>
                            <meta property="twitter:description" content="Explore the best Next.js and React.js portfolio by Shivraj Gurjar. Featuring simple, dark and light theme designs and mobile responsiveness."/>
                              <meta property="twitter:image" content="https://shiv-s-portfolio.vercel.app/images/welcome-screen.png"/>

                                {/* <!-- Other Meta Tags --> */}
                                <meta name="keywords" content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"/>
                                  <meta name="author" content="Shivraj Gurjar"/>
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                                      {/* <!-- Favicon --> */}
                                      <link rel="icon" href="https://shiv-s-portfolio.vercel.app/favicon.ico" type="image/x-icon"/>

                                      </Head>
                                      <div className={dark ? "dark" : ""}>
                                        <div className="dark:bg-gray-700 ">
                                          {/* Desktop Navbar */}
                                          <Navbar />
                                          {/* Mobile Navbar */}
                                          <MobileNavbar />
                                          {/* Welcome Page */}
                                          <Intro />
                                          {/* SocialMedia */}
                                          <SocialMedia />
                                          {/* Skills  */}
                                          <Skills />
                                          {/* Projects */}
                                          <Projects />
                                          {/* LatestBlog */}
                                          <LatestBlogs />
                                          {/* Education Experience Journey */}
                                          <Journey />
                                          {/* Apps */}
                                          <Apps />
                                          {/* Send Mail */}
                                          <SendMail />
                                          {/* Footer */}
                                          <Footer />

                                          <ChatSystem />
                                        </div>
                                      </div>
                                    </Fragment>
                                    );
}
