import React, { Fragment, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, github } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const SendEmail = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>send-email</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h1 className='blog-heading'>
              How to send a email with attachment using node js
            </h1>

            <div className='mt-8 mb-3 font-bold text-lg'>
              1. Start with new node js project.
            </div>

            <div className='font-bold dark:bg-gray-700 bg-gray-400 text-sm p-2 rounded'>
              npm init -y
            </div>

            <div className='mt-8 mb-3 font-bold text-lg'>
              2. install express, nodemon, dotenv and nodemailer
            </div>
            <div className='font-bold dark:bg-gray-700 bg-gray-400 text-sm p-2 rounded'>
              npm i express mongoose dotenv nodemailer
            </div>

            <div className='mt-8 mb-3'>
              Now you have a{" "}
              <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
                package.json
              </span>{" "}
              and{" "}
              <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
                package.lock.json
              </span>{" "}
              file in your project root folder.
            </div>

            <div className='mt-8 mb-3 font-bold text-lg'>
              3. Now create a{" "}
              <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
                {" "}
                index.js
              </span>{" "}
              file in project root folder.
            </div>

            <PointFour myDark={theme === "dark"} />
            <PointFive />
            <PointSix myDark={theme === "dark"} />
            <PointSeven myDark={theme === "dark"} />
            <PointEight />
            <PointNine myDark={theme === "dark"} />
            <PointTen myDark={theme === "dark"} />
            <PointEleven myDark={theme === "dark"} />
            <PointTwelve myDark={theme === "dark"} />
            <PointThirteen myDark={theme === "dark"} />

            <div className='text-center text-xl font-bold text-green-600 dark:text-green-500 my-6 break-words'>
              Now you can test 👉 http://localhost:yourport/api/mail/new
            </div>

            <div className='dark:bg-gray-700 justify-normal bg-gray-400 text-sm p-2 rounded'>
              <div className='text-3xl p-2'>My Test response😃</div>
              <div className='break-words whitespace-pre-wrap'>
                Email sent successfully250 2.0.0 OK
                1686314142&nbsp;t1-20020aa79381000000b0064381853bfcsm2607717pfe.89
                - gsmtp
              </div>
            </div>

            <Image
              alt=''
              className='my-6 border border-solid border-black dark:border-white'
              height={200}
              src='/images/screen1.png'
              width={800}
            />

            <PointFourteen myDark={theme === "dark"} />
            <PointFifteen />
            <PointSixTeen myDark={theme === "dark"} />

            <div className='text-center text-xl font-bold text-green-600 dark:text-green-500 my-6 break-words'>
              Test again 👉 http://localhost:yourport/api/mail/new
            </div>

            <Image
              alt=''
              className='p-2 border border-black border-solid dark:border-white'
              height={500}
              src='/images/screen2.png'
              width={800}
            />

            <div className='text-center m-5 text-2xl'>❤️ Thank You 🙏</div>
          </div>

          <div className='layoutBox2'>Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default SendEmail;

const PointFour = ({ myDark }) => {
  const codeString = `  const express = require('express') 
  const app = express()
  const dotenv = require('dotenv').config()
  
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        4. Write code for listen backend server on localhost.
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        5. Now create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          connection
        </span>{" "}
        folder in project root folder and create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
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
          await mongoose.connect(process.env.MONGO_URI)
          console.log("Connected to database")
  
      } catch (error) {
          console.log(error)
      }
  }`;

  return (
    <>
      <div className='mt-8 mb-3 font-bold text-lg'>
        6. Create A database connnection in{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          /connection/connect.js
        </span>
        .
      </div>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        7. Now import{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          connectDb
        </span>{" "}
        function in{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          index.js
        </span>{" "}
        file.
      </div>
      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        8. Now create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          controllers
        </span>{" "}
        folder in project root folder and create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          mail.js
        </span>{" "}
        file under controllers folder.
      </div>

      <div className='mt-8 mb-3 font-bold text-lg'>
        9.0 Before going to next point you should know about
      </div>
      <div className='mt-8 mb-3 font-bold text-lg'>Sender : -</div>
      <p>
        Sender is like Info about sender like, which service use for send mail
        ?, sender&apos;s email address and password.
      </p>
      <div className='mt-8 mb-3 font-bold text-lg'>Mail : -</div>
      <p>
        <strong>mail</strong> is info about email which was send by sender. mail
        have <strong>from</strong> which is sender email, <strong>to</strong>{" "}
        which is receiver email, <strong>subject</strong> is subject of email
        and <strong>text</strong> is text write in email.{" "}
      </p>
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
              pass: process.env.PASS
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        9. In{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          /controllers/mail.js
        </span>{" "}
        import nodemailer and Create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          sendMail
        </span>{" "}
        function, under sendMail function create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          {" "}
          sender
        </span>{" "}
        by{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          nodemailer.createTransport
        </span>{" "}
        also write a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          mail
        </span>{" "}
        and finally send mail by{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          sender.sendMail
        </span>
        .
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>

      <div className='bg-gray-200 my-4 p-2 rounded dark:bg-black'>
        {" "}
        <strong>Note:-</strong> In sender, pass is not email password, to
        generate pass follow these steps.
        <p>1. Open chrome and go to settings menu.</p>
        <p>2. Click on Manage your Google Account.</p>
        <p>3. Search for app password and click on it.</p>
        <p>4. Next Input your email password to verify.</p>
        <p>5. select app = mail.</p>
        <p>6. select window (in my case i select = Windows computer).</p>
        <p>7. Click on GENERATE.</p>
        <p>8. Next screen will Show your Password 🎉.</p>
      </div>
    </>
  );
};

const PointTen = () => {
  return (
    <>
      <div className='mt-8 mb-3 font-bold text-lg'>
        10. Now create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          routes
        </span>{" "}
        folder in project root folder and create a{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          mail.js
        </span>{" "}
        and{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        11. For create api write this code under{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          /routes/mail
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        12. Write this code under{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          /routes/router
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
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
      <div className='mt-8 mb-3 font-bold text-lg'>
        13. And final step add api routes to our backend app{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          /index
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointFourteen = ({ myDark }) => {
  const codeString = `  const nodemailer = require("nodemailer")

  exports.sendMail = (req, res) => {
  
      const { email, subject, text } = req.body
      const { originalname, buffer } = req.file
  
      let sender = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'iamshiv20032003@gmail.com',
              pass: process.env.PASS
          }
      })
  
      let mail = {
          from: 'iamshiv20032003@gmail.com',
          to: email,
          subject: subject,
          text: text,
          attachments: {
              filename: originalname,
              content: buffer
          }
      }
  
      sender.sendMail(mail, function (error, info) {
          if (error) {
              res.status(500).json(error.message)
          } else {
              res.status(200).json("Email sent successfully:" + info.response)
          }
      })
  
  }`;

  return (
    <>
      <div className='mt-8 mb-3 font-bold text-lg'>
        14. To Attach a pdf or any attachment file.
        <div>
          a. simply add{" "}
          <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
            {" "}
            attachments
          </span>{" "}
          field in mail like below.
        </div>
        <div>
          d. Destructure{" "}
          <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
            originalname
          </span>{" "}
          and{" "}
          <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
            buffer
          </span>{" "}
          from req.file .
        </div>
        <div>
          c. Also destructure{" "}
          <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
            email
          </span>
          ,{" "}
          <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
            subject
          </span>{" "}
          and{" "}
          <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
            text
          </span>{" "}
          from req.file .
        </div>
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const PointFifteen = () => {
  return (
    <>
      <div className='mt-8 mb-3 font-bold text-lg'>15. install multer</div>
      <div className='font-bold dark:bg-gray-700 bg-gray-400 text-sm p-2 rounded'>
        npm i multer
      </div>
    </>
  );
};

const PointSixTeen = ({ myDark }) => {
  const codeString = `  const router = require('express').Router()
  const { sendMail } = require('../controllers/mail')
  
  const multer = require('multer')
  const upload = multer()
  
  router.route('/mail/new').post(upload.single("attachment"), sendMail)
  
  module.exports = router`;

  return (
    <>
      <div className='mt-8 mb-3 font-bold text-lg'>
        16. Use multer in{" "}
        <span className='text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm'>
          /routes/mail{" "}
        </span>{" "}
        to get file in controller.
      </div>

      <SyntaxHighlighter
        language='javascript'
        showLineNumbers={true}
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>

      <div className='bg-gray-200 my-4 p-2 rounded dark:bg-black'>
        {" "}
        <strong>Note:- </strong> Make sure &quot;attachment&quot; string will
        same for file, when we hit post request.
      </div>
    </>
  );
};
