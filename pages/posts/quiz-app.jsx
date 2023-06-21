import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import axios from "axios";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import he from "he";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const QuizApp = () => {
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [answer, setAnswer] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    setAnswer();
    setLoading(true);
    axios
      .get("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((res) => {
        setLoading(false);
        setQuestion(he.decode(res.data.results[0].question));
        setOptions([
          ...res.data.results[0].incorrect_answers.slice(0, 3),
          res.data.results[0].correct_answer,
        ]);
        setCorrectAnswer(res.data.results[0].correct_answer);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Quiz App</title>
      </Head>

      <Theme>
        <Navbar />
        <ThemeBtn />

        <div className="md:px-[10%] px-[3%] dark:bg-gray-900 h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5">Quiz App</h1>

          {!loading ? (
            <div className="mt-8 dark:bg-slate-800 bg-blue-200 rounded p-4">
              <p className="text-center font-semibold"> Q. {question}</p>

              <div className="mt-6 text-xl">
                {options.map((option, key) => (
                  <div className="mt-3" key={key}>
                    <input
                      className="mr-3 cursor-pointer"
                      type="checkbox"
                      name="answer"
                      id={option}
                      value={he.decode(option)}
                      onChange={(e) => setAnswer(e.target.value)}
                      checked={answer === option}
                    />
                    <label className="cursor-pointer" htmlFor={option}>{he.decode(option)}</label>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 text-center dark:bg-slate-800 bg-blue-200 rounded p-4">
              ...Loading
            </div>
          )}

          <div className="mt-6">
            {answer ? (
              answer === correctAnswer ? (
                <div className="text-green-500 dark:text-green-500 text-2xl font-bold flex items-center gap-1">
                  <span className="text-4xl">
                    <TiTick />
                  </span>
                  Right Answer
                </div>
              ) : (
                <div>
                  <p className="dark:text-red-500 text-red-500 text-2xl font-bold flex items-center gap-1">
                    <span className="text-4">
                      <ImCross />
                    </span>
                    Wrong Answer
                  </p>
                  <p className="dark:text-blue-500 text-blue-500 text-2xl font-bold my-2">
                    Right Answer Is : {correctAnswer}
                  </p>
                </div>
              )
            ) : null}

            <div>
              <div className="fixed bottom-8 md:static w-[100%] flex justify-center">
                <button
                  onClick={generateQuestion}
                  className="p-2 px-6 border-0 dark:bg-gray-300 dark:text-black rounded-md text-xl font-bold m-2 bg-gray-700 text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default QuizApp;
