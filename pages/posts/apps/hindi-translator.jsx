import Navbar from "@/components/Navbar";
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
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "to[0]": language,
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "46e102466emsh069eb8e1a1f88bep148650jsn161589bc0004",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: [
        {
          Text: text,
        },
      ],
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setLoading(false);
      console.log(response.data);
      setOutput(response.data[0].translations[0].text);
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
        <Navbar />
        <MobileNavbar />

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
                className="p-2 px-5 bg-blue-400 font-bold dark:bg-blue-700 dark:text-white rounded hidden sm:inline sm:ml-5"
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
            className="p-2 px-5 bg-blue-400 font-bold dark:bg-blue-700 dark:text-white rounded sm:ml-5"
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
