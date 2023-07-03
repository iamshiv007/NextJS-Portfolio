import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { savedArticles } from "@/components/NewsData";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";

const NewsApp = () => {
  const [articles, setArticles] = useState(savedArticles);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const apikey = "18863985ad4df1e7b0b4244b628ff7f7";

    const url =
      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=" +
      apikey;

    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        if (!res.data.articles) {
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
        console.log(err);
        alert("Not Found2 : Showing Old News");
        setArticles(savedArticles);
        setLoading(false);
      });
  }, []);

  const loadNews = () => {
    const apikey = "18863985ad4df1e7b0b4244b628ff7f7";

    const url =
      "https://gnews.io/api/v4/top-headlines?category=" +
      category +
      "&lang=" +
      language +
      "&country=" +
      country +
      "&max=10&apikey=" +
      apikey;

    setLoading(true);
    axios
      .get(url)
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
        <Navbar />
        <MobileNavbar />

        <div className="dark:bg-gray-900 min-h-[92vh]">
          <div className="text-3xl font-bold text-center pt-5 flex items-center justify-center gap-8">
            News App
            <button
              onClick={() => setFilter(!filter)}
              className="p-3 text-base bg-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center"
            >
              <AiOutlineMenu />
            </button>
          </div>

          <Filters
            filter={filter}
            language={language}
            country={country}
            category={category}
            setLanguage={setLanguage}
            setCountry={setCountry}
            setCategory={setCategory}
            loadNews={loadNews}
          />

          <MyMasonry loading={loading} articles={articles} />
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
      style={filter ? {} : { display: "none" }}
      className="flex justify-center flex-wrap w-fit m-auto gap-4 mt-4"
    >
      <select
        className="dark:bg-black border border-solid dark:border-white border-black rounded"
        name="language"
        id="language"
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
        name="country"
        id="country"
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
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        id="category"
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
        className="bg-gray-600 dark:bg-blue-700 rounded p-1 px-3 text-sm font-bold"
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
            articles.map((news, key) => {
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
                    <img src={news.image} alt="Not Found" />
                  </Link>

                  <div onClick={descFun} className="p-3">
                    {news.description.split(" ").slice(0, descLength).join(" ")}{" "}
                    ...
                  </div>

                  <div
                    onClick={descFun2}
                    className="p-3"
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
