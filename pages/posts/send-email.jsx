import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import { BlogContext } from "@/contextApi/blogContext";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, github } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SendEmail = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>send-email</title>
      </Head>

      <Theme>
        <Navbar />

        <ThemeBtn />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              How to send a email with attachment using node js
            </h1>

            <div className="mt-8 mb-3 font-bold text-lg">
              1. Start with new node js project.
            </div>

            <div className="text-red-600 font-bold dark:bg-gray-700 bg-gray-400 text-sm p-2 rounded">
              npm init -y
            </div>

            <div className="mt-8 mb-3 font-bold text-lg">
              2. install express, nodemon, nodemailer
            </div>
            <div className="text-red-600 font-bold dark:bg-gray-700 bg-gray-400 text-sm p-2 rounded">
              npm i express mongoose nodemailer
            </div>

            <div className="mt-8 mb-3">
              Now you have a{" "}
              <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
                package.json
              </span>{" "}
              and{" "}
              <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
                package.lock.json
              </span>{" "}
              file in your project root folder.
            </div>

            <div className="mt-8 mb-3 font-bold text-lg">
              3. Now create a{" "}
              <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
                {" "}
                index.js
              </span>{" "}
              file in project root folder.
            </div>

            <PointFour myDark={myDark} />
            <PointFive />
            <PointSix myDark={myDark} />
            <PointSeven myDark={myDark} />
            <PointEight />
            <PointNine myDark={myDark} />
            <PointTen myDark={myDark} />
            <PointEleven myDark={myDark} />
            <PointTwelve myDark={myDark} />
            <PointThirteen myDark={myDark} />

            <div className="text-center text-2xl font-bold text-green-600 dark:text-green-500 my-6">
              Now you can test 👉 http://localhost:yourport/api/mail/new/
            </div>

            <div className="dark:bg-gray-700 bg-gray-400 text-sm p-2 rounded">
              <div className="text-3xl">😃</div> Email sent successfully250
              2.0.0 OK 1686314142
              t1-20020aa79381000000b0064381853bfcsm2607717pfe.89 - gsmtp
            </div>

            <img
              className="my-6 border border-solid border-black dark:border-white"
              src="/images/screen1.png"
              alt=""
            />
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default SendEmail;

const PointFour = ({ myDark }) => {
  const codeString = `  const express = require('express') 
  const app = express()
  
  app.use(express.json())
  
  // Server
  const port = process.env.PORT || 6060
  
  app.listen(port, () => {
      console.log(\`Server is listen on port \${port}\`)
  })
  
  // test 
  app.get('/', (req, res) => {
      res.json({ name: "Your Name" })
  })`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        4. Write code for listen backend server on localhost.
      </div>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointFive = () => {
  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        5. Now create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          connection
        </span>{" "}
        folder in project root folder and create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          connect.js
        </span>{" "}
        file under connection folder.
      </div>
    </>
  );
};

const PointSix = ({ myDark }) => {
  const codeString = `  const mongoose = require('mongoose')

  // Database
  const connectDb = async () => {
      try {
          await mongoose.connect('mongodb://localhost:27017')
          console.log("Connected to database")
  
      } catch (error) {
          console.log(error)
      }
  }`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        6. Create A database connnection.
      </div>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointSeven = ({ myDark }) => {
  const codeString = `  // Database
  const connectDb = require('./connection/connect')
  connectDb()`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        7. Now import{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          connectDb
        </span>{" "}
        function in{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          index.js
        </span>{" "}
        file.
      </div>
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointEight = () => {
  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        8. Now create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          controllers
        </span>{" "}
        folder in project root folder and create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          mail.js
        </span>{" "}
        file under controllers folder.
      </div>
    </>
  );
};

const PointNine = ({ myDark }) => {
  const codeString = `  const nodemailer = require("nodemailer")

  exports.sendMail = async (req, res) => {
  
      let sender = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'iamshiv20032003@gmail.com',
              pass: 'wgo************'
          }
      })
  
      let mail = {
          from: 'iamshiv20032003@gmail.com',
          to: "shivrajg20032003@gmail.com",
          subject: "test",
          text: "Send a email using node.js"
      }
  
      sender.sendMail(mail, function (error, info) {
          if (error) {
              res.status(500).json(error.message)
          } else {
              res.status(200).json("Email sent successfully" + info.response)
          }
      })
  
  }`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        9. In{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          /controllers/mail.js
        </span>{" "}
        import nodemailer and Create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          sendMail
        </span>{" "}
        function, under sendMail function create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          {" "}
          sender
        </span>{" "}
        by{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          nodemailer.createTransport
        </span>{" "}
        also write a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          mail
        </span>{" "}
        and finally send mail by{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          sender.sendMail
        </span>
        .
      </div>

      <div className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
        {" "}
        <strong>Note:-</strong> In sender, pass is not email password to
        generate pass follow these steps.
        <p>1. Open chrom and go to settings menu.</p>
        <p>2. Click on Manage your Google Account.</p>
        <p>3. Click on Security menu.</p>
        <p>
          4. Now you can see How you sign in with google section. In this
          section click on passkeys.
        </p>
        <p>
          5. Verify your email by input your email password and pass is ready
          for use.
        </p>
      </div>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>

      <div className="mt-8 mb-3 font-bold text-lg">Sender : -</div>
      <p>
        Sender is like Info about sender like, which service use for send mail
        ?, sender's email address and password.
      </p>
      <div className="mt-8 mb-3 font-bold text-lg">Mail : -</div>
      <p>
        Mail is info about mail which was send by sender mail have from : which
        is sender email again, to : which is receiver email, subject : is
        subject of mail and text : is text write in email.{" "}
      </p>
    </>
  );
};

const PointTen = () => {
  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        10. Now create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          routes
        </span>{" "}
        folder in project root folder and create a{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          mail.js
        </span>{" "}
        and{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          router.js
        </span>{" "}
        file under routes folder.
      </div>
    </>
  );
};

const PointEleven = ({ myDark }) => {
  const codeString = `  const router = require('express').Router()
  const { sendMail } = require('../controllers/mail')
  
  router.route('/mail/new').post(sendMail)
  
  module.exports = router`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        11. Write this code under{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          /routes/mail
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointTwelve = ({ myDark }) => {
  const codeString = `  const router = require('express').Router()

  // mail routes
  const mailRoute = require('./mail')
  router.use('/', mailRoute)
  
  module.exports = mailRoute`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        12. Write this code under{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          /routes/router
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointThirteen = ({ myDark }) => {
  const codeString = `  // routes
  const router = require('./routes/router')
  app.use('/api', router)`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        13. And final step add api routes to our backend app{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          /index
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
