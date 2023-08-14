import React, { Fragment } from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <AiOutlineInstagram />,
    color:
      "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FFDC80)",
    link: "https://www.instagram.com/iam_shiv_726",
  },
  {
    icon: <FaTwitter />,
    color: "#00acee",
    link: "https://twitter.com/ShivrajGurjar15",
  },
  {
    icon: <FaLinkedinIn />,
    color: "#0072b1",
    link: "https://www.linkedin.com/in/shivraj-gurjar-iamshiv007007",
  },
  {
    icon: <BsGithub />,
    color: "#171515",
    link: "https://www.github.com/iamshiv007",
  },
];

const SocialMedia = () => {
  return (
    <Fragment>
      <div className="absolute left-14 bottom-10 flex flex-col gap-4 z-10">
        {socials.map((social, key) => (
          <Link key={key} href={social.link}>
            <div
              style={{ background: social.color }}
              className={`p-2 rounded-full text-xl dark:text-white text-white`}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMedia;
