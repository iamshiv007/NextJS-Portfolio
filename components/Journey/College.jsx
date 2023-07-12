import React, { Fragment } from "react";

const College = () => {
  return (
    <Fragment>
      <div className="md:mr-4 mr-0 mt-8 md:mt-[30vh] md:justify-around flex md:flex-row flex-col md:items-start items-center">
        <div className="w-[50vh]">
          <p className="text-lg font-bold text-center">College</p>
          <p className="py-2 px-4">
            After quite IIT again, without reason i jumped to the BSC, actually
            i am finding to my self what can i do in my life in which thing i
            should made my carrier. In end of First year i decided to go in to
            tech field so quite bsc after completing first year exams.
          </p>
        </div>
        <div className="md:w-[50vh] w-[40vh] h-[30vh] bg-gray-600 rounded-3xl md:rounded-s-3xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xSTnbK57kUx2XgDd_zzXJp5uXPSNUmeZ9g&usqp=CAUF"
            alt=""
            className="md:rounded-s-3xl rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default College;
