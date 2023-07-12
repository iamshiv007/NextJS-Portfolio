import React, { Fragment } from "react";

const School = () => {
  return (
    <Fragment>
      <div className="md:mr-4 mr-0 md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className="w-[50vh]">
          <p className="text-center">
            <span className="text-lg font-bold"> School</span>{" "}
            <span>( Till 10nth Grad )</span>
          </p>
          <div className="py-2 px-4">
            <ul className="list-inside list-disc">
              <li>Topper at School time</li>
              <li>A Mathematics Guy</li>
              <li>Shy and Introverted personality</li>
              <li>Always Boyz friend Zone</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 rounded-3xl md:rounded-s-3xl">
          <img
            src="https://scontent.fjdh1-1.fna.fbcdn.net/v/t1.18169-9/11180626_932953900101923_2418688841280992475_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=p5k0xy1wrJwAX998ZzW&_nc_ht=scontent.fjdh1-1.fna&oh=00_AfAJcbQ7R6X1KMe0cbfgf95MvJN1DnU2fThfh9rSI2wolg&oe=64D624A8"
            alt="school"
            className="md:rounded-s-3xl rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default School;
