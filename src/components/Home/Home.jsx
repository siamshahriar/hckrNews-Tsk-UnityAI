import React, { useEffect, useState } from "react";
import Details from "../Details/Details";

const Home = () => {
  const [news, setNews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getNewsData = async () => {
    const res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${inputValue}&page=1`
    );
    const data = await res.json();
    const datas = data.hits;
    setNews(datas);
  };

  useEffect(() => {
    getNewsData();
    setPage(1);
  }, [inputValue]);

  const getNewsData2 = async () => {
    const res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${inputValue}&page=${page}`
    );
    const data = await res.json();
    const datas = data.hits;
    setNews((prev) => [...prev, ...datas]);
   
  };
  useEffect(() => {
    getNewsData2();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("page", page);
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  
  return (
    <div className="mb-14">
      <h2 className="text-2xl font-semibold text-center my-7">Search News</h2>
      <div className="form-control w-[600px] mx-auto mb-10">
        <input
          type="text"
          placeholder="Search News"
          className="input input-bordered w-full md:w-auto"
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-6 justify-center">
        {news?.map((each, index) => (
          <Details key={index} each={each}></Details>
        ))}
      </div>
      <div className="text-center mt-6">
        {loading && <span className="loading loading-bars loading-lg"></span>}
      </div>
    </div>
  );
};

export default Home;
