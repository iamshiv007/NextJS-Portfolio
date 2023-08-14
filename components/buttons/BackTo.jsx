import React, { Fragment } from "react";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const BackTo = ({ backTo }) => {
  return (
    <Fragment>
      <div className="h-[12vh] sticky top-0 flex items-center px-10 dark:bg-black bg-white">
        <Link href={`/${backTo}`}>
          <div className="flex items-center gap-3">
            <span className="text-xl font-lg">
              <HiArrowNarrowLeft />
            </span>
            <span>Back to {backTo === "" ? "Home" : backTo}</span>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default BackTo;
