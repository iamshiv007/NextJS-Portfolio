import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";
import { ThemeContext } from "@/context/themeContext";

const SpreadOperator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>Rest and Spread Operator</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className='layoutContainer'>
          <div className='layoutBox1'>
            <h2 className='blog-heading'>
              Rest And Spread Operator in JavaScript
            </h2>

            <p className='text-lg font-bold mt-5'>What is Spread Operator?</p>

            <p>
              The spread operator, denoted by three dots(&quot;...&quot;), is a
              feature introduced in javascript ES6 that allow us to expand and
              spread the elements of an array or an object. It provides a
              concise and flexible way to manipulate and combine array and
              object.
            </p>

            <Example1 myDark={theme === "dark"} />
            <Example2 myDark={theme === "dark"} />
            <Example3 myDark={theme === "dark"} />
            <Example4 myDark={theme === "dark"} />
            <Example5 myDark={theme === "dark"} />
            <Example6 myDark={theme === "dark"} />

            <p className='text-lg font-bold mt-8'>What is Rest Operator?</p>

            <p>
              The rest operator also denoted by three dot(&quot;...&quot;), is
              another feature introduced in JavaScript ES6 that works in the
              opposite way to the spread operator. It Allows us to gather or
              collect multiple elements into an array.
            </p>
            <Example7 myDark={theme === "dark"} />
            <Example8 myDark={theme === "dark"} />
            <Example9 myDark={theme === "dark"} />
          </div>

          <div className='layoutBox2'>Namaskaram</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default SpreadOperator;

const Example1 = ({ myDark }) => {
  const codeString = `  const Example1 = () => {
    // Array Clone
  
    const numbers = [1, 2, 3];
  
    const newNumbers = [...numbers];
  
    console.log(newNumbers); // [1, 2, 3]
  
    return (
      <></>
    );
  };
  `;
  // Array Clone

  const numbers = [1, 2, 3];

  const newNumbers = [...numbers];

  console.log(newNumbers);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 1</h3>

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
  const codeString = `  const Example2 = () => {
    // Combine Array
  
    const numbers1 = [1, 2, 3];
    const numbers2 = [4, 5, 6];
  
    const combineArray = [...numbers1, ...numbers2];
  
    console.log(combineArray); // [1, 2, 3, 4, 5, 6]
  
    return <></>;
  };`;
  //Combine Array

  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];

  const combineArray = [...numbers1, ...numbers2];

  console.log(combineArray);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 2</h3>

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
  const codeString = `  const Example3 = () => {
    // Compose
  
    const numbers1 = [1, 2, 3];
    const numbers2 = [4, 5, 6];
  
    const composedArray = [100, ...numbers1, ...numbers2, 200];
  
    console.log(composedArray); // [100, 1, 2, 3, 4, 5, 6, 200]
  
    return <></>;
  };`;
  //Compose

  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];

  const composedArray = [100, ...numbers1, ...numbers2, 200];

  console.log(composedArray);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 3</h3>

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
  const codeString = `  const Example4 = () => {
    //string
  
    const string = "iamshiv";
  
    const stringArray = [...string];
  
    console.log(stringArray); // ["i", "a", "m", "s", "h", "i", "v"]
  
    return <></>;
  };
  `;
  //string

  const string = "iamshiv";

  const stringArray = [...string];

  console.log(stringArray);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 4</h3>

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
  const codeString = `  const Example5 = () => {
    // Object Clone
  
    const order = {
      productName: "T-shirt",
      price: 209,
      quantity: 1,
    };
  
    const newOrder = { ...order };
  
    console.log(newOrder); // { productName: "T-shirt", price: 209, quantity: 1};
  
    return <></>;
  };`;
  // Object Clone

  const order = {
    productName: "T-shirt",
    price: 209,
    quantity: 1,
  };

  const newOrder = { ...order };

  console.log(newOrder);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 5</h3>

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

const Example6 = ({ myDark }) => {
  const codeString = `  const Example6 = () => {
    // Spread
  
    const numbers = [17, 37, 74, 2, 8218, 27];
  
    console.log(Math.max(...numbers)); // 8281

    return <></>;
  };`;
  // Spread

  const numbers = [17, 37, 74, 2, 8218, 27];

  console.log(Math.max(...numbers));

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 6</h3>

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

const Example7 = ({ myDark }) => {
  const codeString = `  const Example1 = () => {
    // Rest operator packing
  
    function sum(...numbers) {
      console.log(numbers); // [3, 4, 5, 6]
  
      let result = 0;
      for (let num of numbers) {
        result += num;
      }
  
      return result;
    }
  
    console.log(sum(3, 4, 5, 6)); // 18
  
    return <></>;
  };`;
  // Rest operator packing

  function sum(...numbers) {
    console.log(numbers);

    let result = 0;
    for (let num of numbers) {
      result += num;
    }

    return result;
  }

  console.log(sum(3, 4, 5, 6));

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 1</h3>

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

const Example8 = ({ myDark }) => {
  const codeString = `  const Example2 = () => {
    // Rest
  
    function sum(number1, number2, ...numbers) {
      console.log(number1, number2, numbers); // 3, 4, [5, 6]
  
      let result = 0;
      for (let num of numbers) {
        result += num;
      }
  
      return result;
    }
  
    console.log(sum(3, 4, 5, 6)); // 11
  
    return <></>;
  };`;
  // Rest

  function sum(number1, number2, ...numbers) {
    console.log(number1, number2, numbers);

    let result = 0;
    for (let num of numbers) {
      result += num;
    }

    return result;
  }

  console.log(sum(3, 4, 5, 6));

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 2</h3>

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

const Example9 = ({ myDark }) => {
  const codeString = `  const Example3 = () => {
    // Rest operator packing
  
    const order = {
      name: "Water bottle",
      street: "Hanuman Nagar",
      city: "Kota",
    };
  
    const { name, ...address } = order; 
  
    console.log(name, address);   // water bottle, {street:"Hanuman Nagar", city:"Kota"}
  
    return <></>;
  };`;
  // Rest operator packing

  const order = {
    name: "Water bottle",
    street: "Hanuman Nagar",
    city: "Kota",
  };

  const { name, ...address } = order;

  console.log(name, address);

  return (
    <>
      <h3 className='text-lg font-bold mt-6 mb-4'>Example 3</h3>

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
