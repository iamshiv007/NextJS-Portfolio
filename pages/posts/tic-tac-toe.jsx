import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";

const TicTacToe = () => {
  const [game, setGame] = useState(0);

  useEffect(() => {
    const ones = document.getElementsByClassName("one");
    const twos = document.getElementsByClassName("two");
    const threes = document.getElementsByClassName("three");
    const fours = document.getElementsByClassName("four");
    const fives = document.getElementsByClassName("five");
    const sixs = document.getElementsByClassName("six");
    const sevens = document.getElementsByClassName("seven");
    const eights = document.getElementsByClassName("eight");
    const nines = document.getElementsByClassName("nine");

    if (
      (ones[0].innerText === "0" &&
        ones[1].innerText === "0" &&
        ones[2].innerText === "0") ||
      (ones[0].innerText === "1" &&
        ones[1].innerText === "1" &&
        ones[2].innerText === "1")
    ) {
      alert("one is  won");
    } else if (
      (twos[0].innerText === "0" &&
        twos[1].innerText === "0" &&
        twos[2].innerText === "0") ||
      (twos[0].innerText === "1" &&
        twos[1].innerText === "1" &&
        twos[2].innerText === "1")
    ) {
      alert("two is  won");
    } else if (
      (threes[0].innerText === "0" &&
        threes[1].innerText === "0" &&
        threes[2].innerText === "0") ||
      (threes[0].innerText === "1" &&
        threes[1].innerText === "1" &&
        threes[2].innerText === "1")
    ) {
      alert("three is  won");
    } else if (
      (fours[0].innerText === "0" &&
        fours[1].innerText === "0" &&
        fours[2].innerText === "0") ||
      (fours[0].innerText === "1" &&
        fours[1].innerText === "1" &&
        fours[2].innerText === "1")
    ) {
      alert("four is  won");
    } else if (
      (fives[0].innerText === "0" &&
        fives[1].innerText === "0" &&
        fives[2].innerText === "0") ||
      (fives[0].innerText === "1" &&
        fives[1].innerText === "1" &&
        fives[2].innerText === "1")
    ) {
      alert("five is  won");
    } else if (
      (sixs[0].innerText === "0" &&
        sixs[1].innerText === "0" &&
        sixs[2].innerText === "0") ||
      (sixs[0].innerText === "1" &&
        sixs[1].innerText === "1" &&
        sixs[2].innerText === "1")
    ) {
      alert("six is  won");
    } else if (
      (sevens[0].innerText === "0" &&
        sevens[1].innerText === "0" &&
        sevens[2].innerText === "0") ||
      (sevens[0].innerText === "1" &&
        sevens[1].innerText === "1" &&
        sevens[2].innerText === "1")
    ) {
      alert("seven is  won");
    } else if (
      (eights[0].innerText === "0" &&
        eights[1].innerText === "0" &&
        eights[2].innerText === "0") ||
      (eights[0].innerText === "1" &&
        eights[1].innerText === "1" &&
        eights[2].innerText === "1")
    ) {
      alert("eight is  won");
    }
  }, [game]);

  const gameFun = (e) => {
    if (!e.target.innerText) {
      e.target.innerText = game;
      setGame(game ? 0 : 1);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Tic-Tac-Toe</title>
      </Head>

      <Theme>
        <Navbar />

        <ThemeBtn />

        <div className="dark:bg-gray-900 h-[92vh]">
          <div className="ttt w-fit m-auto h-auto pt-16 flex">
            <FirstRow gameFun={gameFun} />
            <SecondRow gameFun={gameFun} />
            <ThirdRow gameFun={gameFun} />
          </div>
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
        <div onClick={gameFun} className="one four seven"></div>
        <div onClick={gameFun} className="one five"></div>
        <div onClick={gameFun} className="one six eight"></div>
      </div>
    </>
  );
};

const SecondRow = ({ gameFun }) => {
  return (
    <>
      <div>
        <div onClick={gameFun} className="two four"></div>
        <div onClick={gameFun} className="two five eight seven"></div>
        <div onClick={gameFun} className="two six"></div>
      </div>
    </>
  );
};

const ThirdRow = ({ gameFun }) => {
  return (
    <>
      <div>
        <div onClick={gameFun} className="three four eight"></div>
        <div onClick={gameFun} className="three five"></div>
        <div onClick={gameFun} className="three six seven"></div>
      </div>
    </>
  );
};
