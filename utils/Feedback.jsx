import React, { Fragment, useContext, useState } from "react";

import { BlogContext } from "@/contextApi/blogContext";

const Feedback = () => {
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(false);
  const { showModal, setShowModal } = useContext(BlogContext);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitFun = () => {};

  return (
    <Fragment>
      <div
        className={`fixed z-30 top-0 left-0 h-screen w-screen bg-[#80808082] flex justify-center md:items-center ${
          showModal ? "" : "hidden"
        }`}
      >
        <form className="dark:bg-black bg-[#ccf2f6] z-40 p-4 rounded sm:w-full sm:h-screen md:h-fit md:w-[500px] flex flex-col gap-4">
          <h3 className="text-center text-2xl font-bold dark:text-[#07d0e5] text-[#c72c6c]">
            Feedback
          </h3>
          <p>As a developer, you understand the importance of feedback.</p>
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="name"
            name="name"
            onChange={collectData}
            placeholder="*Your Name"
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="email"
            name="email"
            onChange={collectData}
            placeholder="Your Email Address"
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="rating"
            name="rating"
            onChange={collectData}
            placeholder="*Rating out of 5"
            type="number"
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="good"
            name="good"
            onChange={collectData}
            placeholder="What is good about this Project ?"
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="bad"
            name="bad"
            onChange={collectData}
            placeholder="What is bad about this Project ?"
          />
          <textarea
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="suggetion"
            name="suggetion"
            onChange={collectData}
            placeholder="What is Your Suggetion ?"
            rows="3"
          />
          <div className="flex justify-between">
            <button
              className="font-bold px-4 text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              onClick={() => setShowModal(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="font-bold px-4 text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              disabled={submitFun}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Feedback;
