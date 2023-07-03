import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import { BlogContext } from "@/contextApi/blogContext";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Head from "next/head";
import MobileNavbar from "@/components/mobileNavbar";

const Readme = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>Radme syntax</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              Readme File Syntax
            </h1>
            <PointOne myDark={myDark} />
            <PointTwo myDark={myDark} />
            <PointThree myDark={myDark} />
            <PointFour myDark={myDark} />
            <PointFive myDark={myDark} />
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default Readme;

const PointOne = ({ myDark }) => {
  const codeString1 = `# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">1. Typography</div>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="md"
        style={myDark ? dark : github}
      >
        {codeString1}
      </SyntaxHighlighter>
      <div>
        <h1 className="mt-2 text-[2rem]">Heading level 1</h1>
        <h1 className="mt-2 text-[1.5rem]">Heading level 2</h1>
        <h1 className="mt-2 text-[1.17rem]">Heading level 3</h1>
        <h1 className="mt-2 text-[1rem]">Heading level 4</h1>
        <h1 className="mt-2 text-[0.83rem]">Heading level 5</h1>
        <h1 className="mt-2 text-[0.75rem]">Heading level 6</h1>
      </div>
      <div className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
        {" "}
        <strong>Note:- </strong> Make sure to add a space after last # and must
        be line space after and before heading typography.
      </div>
    </>
  );
};

const PointTwo = ({ myDark }) => {
  const codeString = `**Bold Text**
*Italic Text*`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">2. Bold and Italic</div>

      <SyntaxHighlighter
        className="mt-4"
        showLineNumbers={true}
        language="md"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="mt-4">
        <p className="font-bold">Bold Text</p>
        <p className="italic">Italic Text</p>
      </div>
    </>
  );
};

const PointThree = ({ myDark }) => {
  const codeString = `Write text without any space in starting. <br/>
Simple add two or more space in end of line for line break in a Paragraph.`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">3. Paragraph</div>

      <SyntaxHighlighter
        className="mt-4"
        showLineNumbers={true}
        language="md"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>

      <div className="mt-4">
        <p>
          Write text without any space in starting. <br />
          Simple add 2 or 3 space in end of line for line break in a Paragraph.
        </p>
      </div>
    </>
  );
};

const PointFour = ({ myDark }) => {
  const codeString = `> To create a blockquote, add a (>) in starting of a paragraph or line.`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">4. Blockquotes</div>
      <SyntaxHighlighter
        className="mt-4"
        showLineNumbers={true}
        language="md"
        style={myDark ? dark : github}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
        {" "}
        <strong>Note:- </strong> You can test Blockquotes in a readme.md file
        for how it look likes.
      </div>
      <div className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
        {" "}
        <strong>Bonus:- </strong> You Can Preview your readme.md file in vs
        code, simply open your readme.md file in vs code, at right top you can
        see a option for open preview OR use <strong>ctr+shift+v</strong> .
      </div>
    </>
  );
};

const PointFive = ({ myDark }) => {
  const codeString1 = `1. simply write number in
2. starting of line
3. and don't forget
4. dot (.) after number`;

  const codeString2 = `- for unordered
- list
- simply write (-)
- in starting of line`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">5. Lists</div>
      <SyntaxHighlighter
        className="mt-4"
        language="md"
        style={myDark ? dark : github}
      >
        {codeString1}
      </SyntaxHighlighter>
      <ol className="list-inside list-decimal mt-4">
        <li>simple write number in</li>
        <li>starting of line</li>
        <li>and don't forget</li>
        <li>dot (.) after number</li>
      </ol>

      <SyntaxHighlighter
        className="mt-4"
        language="md"
        style={myDark ? dark : github}
      >
        {codeString2}
      </SyntaxHighlighter>
      <ol className="list-inside list-disc mt-4">
        <li>for unordered</li>
        <li>list</li>
        <li>simply write (-)</li>
        <li>in starting of line</li>
      </ol>
    </>
  );
};
