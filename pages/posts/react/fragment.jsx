import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BlogContext } from "@/contextApi/blogContext";

const MyFragment = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>Fragment in React</title>
      </Head>

      <Theme>
        <Navbar />

        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              Fragment in React
            </h1>

            <p className="mt-5">
              In React Whenever you want to render something on the screen, you
              need to use a render method inside the component. This render
              method can return single elements or multiple elements. The render
              method will only render a single root node inside it at a time.
              However, if you want to return multiple elements, the render
              method will require a 'div' tag and put the entire content or
              elements inside it. This extra node to DOM sometimes result in the
              wrong formatting of your HTML output and also not loved by the
              many developers.
            </p>

            <Example1 myDark={myDark} />

            <p className="mt-5">
              To solve this problem, React introduced Fragments from 16.2 and
              above version. Fragments allows you to group a list of children
              withouth adding extra node to DOM.{" "}
            </p>

            <Example2 myDark={myDark} />
            <Example3 myDark={myDark} />

            <div>
              <p className="text-lg mt-5 font-bold">
                Why we use React Fragment?
              </p>
              <p>
                1. It makes the execution of code faster as compared to the div
                tag.
              </p>
              <p>2. It takes less memory</p>
            </div>

            <div>
              <p className="text-lg mt-5 font-bold">Fragments Short Syntax</p>
              <p>
                There is also a shorthand exist for declaring fragments for the
                above method. It looks like <strong>empty</strong> tag in which
                we can use of '{String.fromCharCode(60)}
                {String.fromCharCode(62)}' and '{String.fromCharCode(60)}/
                {String.fromCharCode(62)}' instead of the{" "}
                <strong>'React.Fragment'</strong>
              </p>

              <Example4 myDark={myDark} />
            </div>

            <div>
              <p className="text-lg mt-5 font-bold">Keyed Fragments</p>
              <p>
                This shorthand syntax does not accept key attributes. You need a
                key for mapping a collection to an array of fragments such as to
                create a description list. If you need to provide a keys, you
                have to declare the Fragments with the explicit{" "}
                {String.fromCharCode(60)}
                <strong>React.Fragment</strong>
                {String.fromCharCode(62)} syntax.
              </p>

              <Example5 myDark={myDark} />
            </div>

            <p className="text-center my-3">
              🙏 Thank You, You are the most lucky 1 precenty
            </p>
          </div>

          <div className="layoutBox2">Pranam</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default MyFragment;

const Example1 = ({ myDark }) => {
  const codeString = `  // Rendering with div tag  
  class App extends React.Component {   
       render() {    
        return (   
           //Extraneous div element   
           <div>  
             <h2> Hello World! </h2>   
             <p> Welcome to the JavaTpoint. </p>   
           </div>   
        );   
       }   
  }`;

  return (
    <>
      <p className="my-2">Example</p>
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

const Example2 = ({ myDark }) => {
  const codeString = `<React.Fragment>  
  <h2> child1 </h2>   
<p> child2 </p>   
  .. ..... .... ...  
</React.Fragment>  `;

  return (
    <>
      <p className="my-2">Syntax</p>
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

const Example3 = ({ myDark }) => {
  const codeString = `  // Rendering with fragments tag  
  class App extends React.Component {   
      render() {   
       return (   
         <React.Fragment>  
              <h2> Hello World! </h2>   
          <p> Welcome to the JavaTpoint. </p>   
           </React.Fragment>  
       );   
      }   
  }`;

  return (
    <>
      <p className="my-2">Example</p>
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

const Example4 = ({ myDark }) => {
  const codeString = `  //Rendering with short syntax   
  class Columns extends React.Component {   
    render() {   
      return (   
        <>    
          <h2> Hello World! </h2>   
          <p> Welcome to the JavaTpoint </p>   
        </>   
      );   
    }   
  }`;

  return (
    <>
      <p className="my-2">Example</p>
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

const Example5 = ({ myDark }) => {
  const codeString = `  Function  = (props) {  
    return (  
      <Fragment>  
        {props.items.data.map(item => (  
          // Without the 'key', React will give a key warning  
          <React.Fragment key={item.id}>  
            <h2>{item.name}</h2>  
            <p>{item.url}</p>  
            <p>{item.description}</p>  
          </React.Fragment>  
        ))}  
      </Fragment>  
    )  
  }  `;

  return (
    <>
      <p className="my-2">Example</p>
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
