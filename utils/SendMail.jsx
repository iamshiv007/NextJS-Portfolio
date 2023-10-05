import React, { Fragment, useState } from "react";
import axios from "axios";
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
      .post("/api/mail/new", formData)
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
      <section id='getInTouch'>
        <div className='py-8 pt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'>
          <h3 className='text-3xl font-bold text-center pb-8 flex justify-center items-center gap-3'>
            <span className='mr-3'>
              <FiMessageCircle />
            </span>
            Drop A Message
          </h3>

          <form action='' onSubmit={sendMessage}>
            <div className='flex flex-col gap-4 w-[90%] md:w-[35%] m-auto'>
              <input
                className='dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded'
                id='name'
                name='name'
                onChange={collectData}
                placeholder='Your Good Name'
                value={formData.name || ""}
              />
              <input
                className='dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded'
                id='email'
                name='email'
                onChange={collectData}
                placeholder='Your Email Address'
                value={formData.email || ""}
              />
              <input
                className='dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded'
                id='subject'
                name='subject'
                onChange={collectData}
                placeholder='Subject for mail'
                value={formData.subject || ""}
              />

              <textarea
                className='dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded'
                id='message'
                name='message'
                onChange={collectData}
                placeholder='Write Your Message'
                rows='3'
                value={formData.message || ""}
              />

              <button
                className='font-bold text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]'
                disabled={sending}
                type='submit'
              >
                {sending ? "sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default SendMail;
