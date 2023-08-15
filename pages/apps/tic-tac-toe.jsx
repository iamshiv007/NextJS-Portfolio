import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const TicTacToe = () => {
  const [game, setGame] = useState(0);
  const [over, setOver] = useState(false);
  const [winer, setWiner] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ones = document.getElementsByClassName("one");
    const twos = document.getElementsByClassName("two");
    const threes = document.getElementsByClassName("three");
    const fours = document.getElementsByClassName("four");
    const fives = document.getElementsByClassName("five");
    const sixs = document.getElementsByClassName("six");
    const sevens = document.getElementsByClassName("seven");
    const eights = document.getElementsByClassName("eight");

    if (
      (ones[0].innerText === "0" &&
        ones[1].innerText === "0" &&
        ones[2].innerText === "0") ||
      (ones[0].innerText === "❌" &&
        ones[1].innerText === "❌" &&
        ones[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(ones[0].innerText);
    } else if (
      (twos[0].innerText === "0" &&
        twos[1].innerText === "0" &&
        twos[2].innerText === "0") ||
      (twos[0].innerText === "❌" &&
        twos[1].innerText === "❌" &&
        twos[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(twos[0].innerText);
    } else if (
      (threes[0].innerText === "0" &&
        threes[1].innerText === "0" &&
        threes[2].innerText === "0") ||
      (threes[0].innerText === "❌" &&
        threes[1].innerText === "❌" &&
        threes[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(threes[0].innerText);
    } else if (
      (fours[0].innerText === "0" &&
        fours[1].innerText === "0" &&
        fours[2].innerText === "0") ||
      (fours[0].innerText === "❌" &&
        fours[1].innerText === "❌" &&
        fours[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(fours[0].innerText);
    } else if (
      (fives[0].innerText === "0" &&
        fives[1].innerText === "0" &&
        fives[2].innerText === "0") ||
      (fives[0].innerText === "❌" &&
        fives[1].innerText === "❌" &&
        fives[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(fives[0].innerText);
    } else if (
      (sixs[0].innerText === "0" &&
        sixs[1].innerText === "0" &&
        sixs[2].innerText === "0") ||
      (sixs[0].innerText === "❌" &&
        sixs[1].innerText === "❌" &&
        sixs[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(sixs[0].innerText);
    } else if (
      (sevens[0].innerText === "0" &&
        sevens[1].innerText === "0" &&
        sevens[2].innerText === "0") ||
      (sevens[0].innerText === "❌" &&
        sevens[1].innerText === "❌" &&
        sevens[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(sevens[0].innerText);
    } else if (
      (eights[0].innerText === "0" &&
        eights[1].innerText === "0" &&
        eights[2].innerText === "0") ||
      (eights[0].innerText === "❌" &&
        eights[1].innerText === "❌" &&
        eights[2].innerText === "❌")
    ) {
      setOver(true);
      setWiner(eights[0].innerText);
    }
  }, [game]);

  const gameFun = (e) => {
    if (!e.target.innerText && !over) {
      e.target.innerText = game;
      setGame(game ? 0 : "❌");
      setCount(count + 1);
    }
  };

  const resetGame = () => {
    const allSquares = document.getElementsByClassName("square");
    for (let i = 0; i < 9; i++) {
      allSquares[i].innerText = null;
    }

    setOver(false);
    setWiner();
    setCount(0);
  };

  return (
    <Fragment>
      <Head>
        <title>Tic-Tac-Toe</title>
      </Head>

      <Theme>
        <BackTo backTo={""} />

        <div className="dark:bg-gray-900 h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5">Tic-Tac-Toe</h1>

          <div className="ttt w-fit m-auto h-auto pt-10 flex">
            <FirstRow gameFun={gameFun} />
            <SecondRow gameFun={gameFun} />
            <ThirdRow gameFun={gameFun} />
          </div>
          {(over || (count === 9 && !winer)) && (
            <div className="flex items-center justify-center flex-col my-5">
              {count === 9 && !winer ? (
                <div className="text-2xl">Game draw</div>
              ) : (
                <div className="text-2xl">
                  <span className="text-3xl font-bold">{winer}</span> is won the
                  game
                </div>
              )}
              <button
                className="rounded bg-red-500 text-xl py-1 px-4 my-2 text-white"
                onClick={resetGame}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </Theme>
    </Fragment>
  );
};

export default TicTacToe;

const FirstRow = ({ gameFun }) => {
  return (
    <>
      <div>
        <div className="square one four seven" onClick={gameFun} />
        <div className="square one five" onClick={gameFun} />
        <div className="square one six eight" onClick={gameFun} />
      </div>
    </>
  );
};

const SecondRow = ({ gameFun }) => {
  return (
    <>
      <div>
        <div className="square two four" onClick={gameFun} />
        <div className="square two five eight seven" onClick={gameFun} />
        <div className="square two six" onClick={gameFun} />
      </div>
    </>
  );
};

const ThirdRow = ({ gameFun }) => {
  return (
    <>
      <div>
        <div className="square three four eight" onClick={gameFun} />
        <div className="square three five" onClick={gameFun} />
        <div className="square three six seven" onClick={gameFun} />
      </div>
    </>
  );
};
