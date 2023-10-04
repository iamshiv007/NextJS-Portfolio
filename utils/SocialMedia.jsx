import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='absolute left-14 bottom-10 flex flex-col gap-4 z-10'>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit' href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-xl text-white"}
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
        <button
          className='p-2 rounded-full text-xl bg-[#f2925a] text-white'
          onClick={() => setShowModal(true)}
        >
          <MdFeedback />
        </button>
      </div>
    </Fragment>
  );
};

export default SocialMedia;
