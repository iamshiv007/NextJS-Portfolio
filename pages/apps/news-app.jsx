import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Theme from "@/utils/Theme";
import { savedArticles } from "@/constants/NewsData";
import BackTo from "@/components/buttons/BackTo";

const NewsApp = () => {
  const [articles, setArticles] = useState(savedArticles);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/api/news?category=general&lang=en&country=in&max=10")
      .then((res) => {
        if (!res.data.success) {
          setArticles(savedArticles);
          setLoading(false);
          alert("Not Found1 : Showing Old News");
        } else {
          setArticles(res.data.articles);
          setCountry("in");
          setCategory("general");
          setLanguage("en");
          setLoading(false);
        }
      })
      .catch((err) => {
        alert(err?.response?.data?.message || err.message || err);
        alert("Not Found2 : Showing Old News");
        setArticles(savedArticles);
        setLoading(false);
      });
  }, []);

  const loadNews = () => {
    setLoading(true);
    axios
      .get(
        `/api/news?category=${category}&lang=${language}&country=${country}&max=10`
      )
      .then((res) => {
        if (res.data.articles.length === 0) {
          setLoading(false);
          alert("Bad Request : No Result Found");
        } else {
          setArticles(res.data.articles);
          setLoading(false);
        }
      })
      .catch((err) => {
        setArticles(savedArticles);
        alert("Not Found : Showing Old News");
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>NewsApp</title>
      </Head>

      <Theme>
        <BackTo backTo={""} />

        <div className="dark:bg-gray-900 min-h-[92vh]">
          <div className="text-3xl font-bold text-center pt-5 flex items-center justify-center gap-8">
            News App
            <button
              className="p-3 dark:bg-[#0ab0c2] bg-[#c72c6c] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setFilter(!filter)}
            >
              <AiOutlineMenu />
            </button>
          </div>

          <Filters
            category={category}
            country={country}
            filter={filter}
            language={language}
            loadNews={loadNews}
            setCategory={setCategory}
            setCountry={setCountry}
            setLanguage={setLanguage}
          />

          <MyMasonry articles={articles} loading={loading} />
        </div>
      </Theme>
    </Fragment>
  );
};

export default NewsApp;

const Filters = ({
  filter,
  language,
  country,
  category,
  setLanguage,
  setCountry,
  setCategory,
  loadNews,
}) => {
  const categories = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  const countries = [
    { name: "India", keyword: "in" },
    { name: "United States", keyword: "us" },
    { name: "Pakistan", keyword: "pk" },
    { name: "Australia", keyword: "au" },
    { name: "United Kingdom", keyword: "gb" },
  ];

  const languages = [
    { name: "Hindi", keyword: "hi" },
    { name: "English", keyword: "en" },
  ];

  return (
    <div
      className="flex justify-center flex-wrap w-fit m-auto gap-4 mt-4"
      style={filter ? {} : { display: "none" }}
    >
      <select
        className="dark:bg-black border border-solid dark:border-white border-black rounded"
        id="language"
        name="language"
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
      >
        <option disabled value="">
          Languages
        </option>
        {languages.map((lang, key) => (
          <option key={key} value={lang.keyword}>
            {lang.name}
          </option>
        ))}
      </select>

      <select
        className="dark:bg-black border border-solid dark:border-white border-black rounded"
        id="country"
        name="country"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      >
        <option disabled value="">
          Countries
        </option>
        {countries.map((con, key) => (
          <option key={key} value={con.keyword}>
            {con.name}
          </option>
        ))}
      </select>

      <select
        className="dark:bg-black border border-solid dark:border-white border-black rounded"
        id="category"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option disabled value="">
          Categories
        </option>
        {categories.map((cate, key) => (
          <option key={key} value={cate}>
            {cate}
          </option>
        ))}
      </select>

      <button
        className="dark:bg-[#0ab0c2] bg-[#c72c6c] text-white rounded p-1 px-3 text-sm font-bold"
        onClick={loadNews}
      >
        Load News
      </button>
    </div>
  );
};

const MyMasonry = ({ loading, articles }) => {
  const descFun = (e) => {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "block";
  };

  const descFun2 = (e) => {
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "block";
  };

  return (
    <div className="w-[90%] m-auto mt-4 sm:mt-8">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {!loading ? (
            articles?.map((news, key) => {
              const descLength = news.description.split(" ").length / 2;

              const dateString = news.publishedAt;
              const dateObj = new Date(dateString);
              const year = dateObj.getFullYear();
              const month = dateObj.getMonth() + 1; // Add 1 because getMonth() returns zero-based values
              const day = dateObj.getDate();

              const formattedDate = `${year}-${month
                .toString()
                .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

              return (
                <div
                  className="border border-solid dark:border-white border-black rounded-md cursor-pointer m-3 mb-5"
                  key={key}
                >
                  <p className="font-medium font-serif text-center p-3 text-lg">
                    {news.title}
                  </p>

                  <Link href={news.url} target="_blank">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Not Found" src={news.image} />
                  </Link>

                  <div className="p-3" onClick={descFun}>
                    {news.description.split(" ").slice(0, descLength).join(" ")}{" "}
                    ...
                  </div>

                  <div
                    className="p-3"
                    onClick={descFun2}
                    style={{ display: "none" }}
                  >
                    {news.description}
                  </div>

                  <p className="px-3 pb-2 text-center text-xs">
                    {formattedDate}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-center p-3">...Loading</p>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
