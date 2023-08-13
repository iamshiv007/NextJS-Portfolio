import BackTo from "@/components/BackTo";
import Theme from "@/components/Theme";
import Head from "next/head";
import React, { Fragment, useState } from "react";
const axios = require("axios");

const HindiTranslator = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const translateFun = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `/api/translate?text=${text}&language=${language}`
      );
      if (!data.success) {
        alert(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log(data.translatedText);
      setOutput(data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Hindi-Translator</title>
      </Head>

      <Theme>
        <BackTo backTo={""} />

        <div className="md:px-[20%] px-[3%] dark:bg-gray-900 min-h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5">
            Hindi Translator
          </h1>

          <div className="mt-8">
            <div className="flex">
              <textarea
                className="border dark:bg-black border-solid dark:border-white border-black rounded p-3 text-xl h-[22vh] w-[90%] sm:w-[60%] m-auto"
                name="from"
                id="from"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Wirte here..."
              ></textarea>
            </div>

            <div className="w-fit m-auto my-4">
              <label className="mr-3 font-bold" htmlFor="language">
                Translate in
              </label>
              <select
                className="dark:bg-black border border-solid border-black rounded p-1 text-lg"
                name="language"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="hi">Hindi</option>
                {/* <option value="en">English</option> */}
              </select>

              <button
                className="p-2 px-5 dark:bg-[#286969] bg-[#c72c6c] text-white font-bold rounded hidden sm:inline sm:ml-5"
                onClick={translateFun}
              >
                Translate
              </button>
            </div>

            <div className="flex">
              <textarea
                className="border dark:bg-black dark:border-white border-solid border-black rounded p-3 text-xl h-[22vh] w-[90%] sm:w-[60%] m-auto"
                name=""
                id="output"
                value={loading ? "...Loading" : output}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex justify-center w-[100%] fixed bottom-10">
          <button
            className="p-2 px-5 dark:bg-[#286969] bg-[#c72c6c] text-white rounded sm:ml-5"
            onClick={translateFun}
          >
            Translate
          </button>
        </div>
      </Theme>
    </Fragment>
  );
};

export default HindiTranslator;
