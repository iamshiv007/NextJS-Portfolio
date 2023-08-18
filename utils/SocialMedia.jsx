import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";

import { BlogContext } from "@/contextApi/blogContext";

const socials = [
  {
    icon: <AiOutlineInstagram />,
    color:
      "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FFDC80)",
    link: "https://www.instagram.com/iam_shiv_726",
  },
  {
    icon: <IoClose />,
    color: "#0f0f0f",
    link: "https://twitter.com/ShivrajGurjar15",
  },
  {
    icon: <FaLinkedinIn />,
    color: "#0072b1",
    link: "https://www.linkedin.com/in/shivraj-dev",
  },
  {
    icon: <BsGithub />,
    color: "#171515",
    link: "https://www.github.com/iamshiv007",
  },
];

const SocialMedia = () => {
  const { setShowModal } = useContext(BlogContext);

  return (
    <Fragment>
      <div className="absolute left-14 bottom-10 flex flex-col gap-4 z-10">
        {socials.map((social, key) => (
          <Link className="w-fit" href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-xl text-white"}
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
        <button
          className="p-2 rounded-full text-xl bg-[#f2925a] text-white"
          onClick={() => setShowModal(true)}
        >
          <MdFeedback />
        </button>
      </div>
    </Fragment>
  );
};

export default SocialMedia;
