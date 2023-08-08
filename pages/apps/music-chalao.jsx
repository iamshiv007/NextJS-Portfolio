import Navbar from "@/components/layout/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/layout/mobileNavbar";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
const axios = require("axios");

const MusicChalao = () => {
  const [songs, setSongs] = useState({});

  useEffect(() => {}, []);

  const loadMusic = async () => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/infos",
      headers: {
        "X-RapidAPI-Key": process.enc.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSongs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Music Chalao</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="dark:bg-gray-900 min-h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5 flex items-center justify-center gap-8">
            News App
          </h1>

          <audio controls src={"http://stream.zeno.fm/eo2imd7yypwuv"} />

          <button onClick={loadMusic}>Load Data</button>
        </div>
      </Theme>
    </Fragment>
  );
};

export default MusicChalao;
