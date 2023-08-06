import axios from "axios";
import React, { Fragment, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";

const SendMail = () => {
  const [formData, setFormData] = useState({});
  const [sending, setSending] = useState(false);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const { name, email, message, subject } = formData;

    if (!name || !email || !subject || !message) {
      return alert("Please Fill All Data");
    }

    setSending(true);
    axios
      .post(`/api/message/new`, formData)
      .then((res) => {
        console.log(res.data);
        setSending(false);
        alert("Message Sended Successfully");
        setFormData({});
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        alert(err);
      });
  };

  return (
    <Fragment>
      <div className="dark:bg-black bg-[#ecf8f9] py-8">
        <h3 className="sectionHeading align-top">
          <span className="mr-4">
            <FiMessageCircle />
          </span>
          Drop A Message
        </h3>

        <form onSubmit={sendMessage} action="">
          <div className="flex flex-col gap-4 w-[90%] md:w-[35%] m-auto">
            <input
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              id="name"
              placeholder="Your Good Name"
              name="name"
              onChange={collectData}
              value={formData.name || ""}
            />
            <input
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              id="email"
              placeholder="Your Email Address"
              name="email"
              onChange={collectData}
              value={formData.email || ""}
            />
            <input
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              id="subject"
              placeholder="Subject for mail"
              name="subject"
              onChange={collectData}
              value={formData.subject || ""}
            />

            <textarea
              className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
              name="message"
              id="message"
              rows="3"
              placeholder="Write Your Message"
              onChange={collectData}
              value={formData.message || ""}
            />

            <button
              className="font-bold text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              type="submit"
              disabled={sending}
            >
              {sending ? "sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SendMail;
