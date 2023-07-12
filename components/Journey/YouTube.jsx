import React, { Fragment } from "react";

const YouTube = () => {
  return (
    <Fragment>
      <div className="ml-5 mt-8 md:mt-[30vh] md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className="md:hidden block w-[50vh]">
          <p className="text-center text-lg font-bold">You Tube Learning</p>
          <p className="mx-4 my-2">
            After dropped out to college i decided to learn coding from YouTube
            and i started with Java basics and then i learn html, css,
            javascript and moved into web development in react js and in to MERN
            stack.
          </p>
        </div>
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 md:rounded-e-3xl rounded-3xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbb0NTA9qMmGFF4NPZgMqebIfkPpOpK7TWlQ&usqp=CAU"
            alt="youtube"
            className="md:rounded-e-3xl rounded-3xl w-full h-full object-cover"
          />
        </div>
        <div className="md:block hidden w-[50vh]">
          <p className="text-center text-lg font-bold">You Tube Learning</p>
          <p className="mx-4 my-2">
            After dropped out to college i decided to learn coding from YouTube
            and i started with Java basics and then i learn html, css,
            javascript and moved into web development in react js and in to MERN
            stack.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default YouTube;
