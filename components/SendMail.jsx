import React, { Fragment } from "react";
import { FiMessageCircle } from "react-icons/fi";

const SendMail = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    alert("Message Sended");
  };

  return (
    <Fragment>
      <div className="dark:bg-[#000000d0] bg-[#efeeee] py-8">
        <h3 className="sectionHeading">
          <span className="mr-4">
            <FiMessageCircle />
          </span>
          Drop a Message
        </h3>

        <form onSubmit={sendMessage} action="">
          <div className="flex flex-col gap-4 w-[90%] md:w-[35%] m-auto">
            <input
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              id="name"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              id="email"
              placeholder="Your Email Address"
              name="email"
            />
            <input
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              id="mobile"
              placeholder="Your Mobile No"
              name="mobile"
            />

            <textarea
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              name="message"
              id="message"
              rows="3"
              placeholder="Write Your Message"
            />

            <button
              className="font-bold text-white dark:bg-[#0ab0c2] p-2 rounded  dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]s"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SendMail;
