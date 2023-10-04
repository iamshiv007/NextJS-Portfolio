import Head from "next/head";
import React, { Fragment, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const MyFragment = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Fragment in React</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h1 className='blog-heading'>Fragment in React</h1>

            <p className='mt-5'>
              In React Whenever you want to render something on the screen, you
              need to use a <strong>render</strong> method inside the component.
              This render method can return single elements or multiple
              elements. The render method will only render a{" "}
              <strong> single root node</strong> inside it at a time. However,
              if you want to return multiple elements, the render method will
              require a &quot;div&quot; tag and put the entire content or
              elements inside it. This extra node to DOM sometimes result in the
              wrong formatting of your HTML output and also not loved by the
              many developers.
            </p>

            <Example1 myDark={theme === "dark"} />

            <p className='mt-5'>
              To solve this problem, React introduced Fragment from{" "}
              <strong> 16.2 and above version</strong>. Fragments allows you to
              group a list of children without adding extra node to DOM.{" "}
            </p>

            <Example2 myDark={theme === "dark"} />
            <Example3 myDark={theme === "dark"} />

            <div>
              <p className='text-lg mt-5 font-bold'>
                Why we use React Fragment?
              </p>
              <p>
                1. It makes the execution of code faster as compared to the div
                tag.
              </p>
              <p>2. It takes less memory</p>
            </div>

            <div>
              <p className='text-lg mt-5 font-bold'>Fragments Short Syntax</p>
              <p>
                There is also a shorthand exist for declaring fragments for the
                above method. It looks like <strong>empty</strong> tag in which
                we can use of &quot;{String.fromCharCode(60)}
                {String.fromCharCode(62)}&quot; and &quot;
                {String.fromCharCode(60)}/{String.fromCharCode(62)}&quot;
                instead of the <strong>&quot;React.Fragment&quot;</strong>
              </p>

              <Example4 myDark={theme === "dark"} />
            </div>

            <div>
              <p className='text-lg mt-5 font-bold'>Keyed Fragments</p>
              <p>
                This shorthand syntax does not accept key attributes. You need a
                key for mapping a collection to an array of fragments such as to
                create a description list. If you need to provide a keys, you
                have to declare the Fragments with the explicit{" "}
                {String.fromCharCode(60)}
                <strong>React.Fragment</strong>
                {String.fromCharCode(62)} syntax.
              </p>

              <Example5 myDark={theme === "dark"} />
            </div>

            <p className='text-center my-3'>
              🙏 Thank You, You are the most lucky 1 precenty
            </p>
          </div>

          <div className='layoutBox2'>
            <div>
              <p className='text-center'>😂</p>
              <p>
                Did you know that the virtual DOM of React is like a secret
                agent?
              </p>

              <p className='mt-3'>
                It&apos;s always undercover, spying on the real DOM and making
                changes behind the scenes!
              </p>

              <p className='mt-3'>
                Virtual DOM: &quot;I see you, real DOM, but you can&apos;t see
                me!&quot;
              </p>

              <p className='mt-3'>
                Real DOM: &quot;What&apos;s that rustling noise? Is someone
                messing with my elements?&quot;
              </p>

              <p className='mt-3'>
                Virtual DOM: wearing sunglasses &quot;Just doing my job, keeping
                things snappy and efficient!&quot;
              </p>

              <p className='mt-3'>
                Real DOM: &quot;Well, as long as yo&apos;ure not causing any
                trouble... Carry on, Agent VDOM!&quot;
              </p>
            </div>
          </div>
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
             <p> Welcome to the Shiv's Blog. </p>   
           </div>   
        );   
       }   
  }`;

  return (
    <>
      <p className='my-2'>Example</p>
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

const Example2 = ({ myDark }) => {
  const codeString = `<React.Fragment>  
  <h2> child1 </h2>   
  <p> child2 </p>   
  .. ..... .... ...  
</React.Fragment>  `;

  return (
    <>
      <p className='my-2'>Syntax</p>
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

const Example3 = ({ myDark }) => {
  const codeString = `  // Rendering with fragments tag  
  class App extends React.Component {   
      render() {   
       return (   
         <React.Fragment>  
              <h2> Hello World! </h2>   
              <p> Welcome to the Shiv's Blog. </p>   
           </React.Fragment>  
       );   
      }   
  }`;

  return (
    <>
      <p className='my-2'>Example</p>
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

const Example4 = ({ myDark }) => {
  const codeString = `  //Rendering with short syntax   
  class Columns extends React.Component {   
    render() {   
      return (   
        <>    
          <h2> Hello World! </h2>   
          <p> Welcome to the Shiv's Blog </p>   
        </>   
      );   
    }   
  }`;

  return (
    <>
      <p className='my-2'>Example</p>
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
      <p className='my-2'>Example</p>
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
