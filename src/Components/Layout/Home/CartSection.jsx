import { BsGrid1X2 } from "react-icons/bs";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import CartItem2 from "./CartItem2";
import { BsGrid1X2Fill } from "react-icons/bs";
import PropTypes from "prop-types";

const CartSection = ({ liveData }) => {
  const [url, setUrl] = useState(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news"
  );
  const [flexToggle, setFlexToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 2);
  };

  const getNewsData = async (url) => {
    try {
      const fullUrl = `${url}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const res = await fetch(fullUrl);

      if (!res.ok) {
        throw new Error(`An error occurred: ${res.statusText}`);
      }
      const data = await res.json();
      const filteredData = data?.articles?.filter(
        (article) =>
          article?.source?.id !== null && article?.urlToImage !== null
      );
      setNewsData(filteredData);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching the news data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      setIsLoading(true);
      getNewsData(url);
    }
  }, [url]);

  return (
    <section className='max-w-[1366px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20'>
      <div className='max-w-[916px]'>
        <div className='flex items-center justify-between px-5 bg-white h-[54px] md:w-[916px] mb-2'>
          <div className='flex items-center gap-5 px-3 md:px-0'>
            <button
              onClick={() =>
                setUrl("https://newsapi.org/v2/top-headlines?sources=bbc-news")
              }
              className='group flex cursor-pointer flex-col text-[#2A2A2A]'
            >
              Latest Stories
              <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full'></span>
            </button>
            <button
              onClick={() =>
                setUrl("https://newsapi.org/v2/top-headlines?country=us")
              }
              className='group flex cursor-pointer flex-col text-[#2A2A2A]'
            >
              Think
              <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full'></span>
            </button>
            <button
              onClick={() =>
                setUrl(
                  "https://newsapi.org/v2/top-headlines?country=us&category=health"
                )
              }
              className='group flex cursor-pointer flex-col text-[#2A2A2A]'
            >
              Health
              <span className='mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full'></span>
            </button>
          </div>
          {flexToggle ? (
            <BsGrid1X2Fill
              onClick={() => setFlexToggle(!flexToggle)}
              className='text-[#000000] cursor-pointer'
            />
          ) : (
            <BsGrid1X2
              onClick={() => setFlexToggle(!flexToggle)}
              className='text-[#000000] cursor-pointer'
            />
          )}
        </div>

        <div
          className={`${
            flexToggle
              ? "grid grid-cols-1 gap-10"
              : "grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-10"
          }`}
        >
          {isLoading ? (
            <div className='w-[916px] h-96 flex justify-center items-center'>
              <div className='w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600'></div>
            </div>
          ) : error ? (
            <div className='w-full h-72 flex justify-center items-center text-red-600'>
              {error}
            </div>
          ) : (
            newsData
              .slice(0, page)
              .map((newsItem, index) =>
                flexToggle ? (
                  <CartItem2 key={index} newsItem={newsItem} />
                ) : (
                  <CartItem key={index} newsItem={newsItem} />
                )
              )
          )}
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button
            onClick={handleLoadMore}
            className='text-[#C31815] font-medium w-[220px] h-[60px] border border-[#C31815] text-center'
            disabled={page >= newsData.length}
          >
            {page >= newsData.length ? "No More Data" : "View More"}
          </button>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='relative text-[#C31815] text-lg font-semibold'>
            Live
            <span className='absolute left-10 top-2 right-2 h-2.5 w-2.5 animate-ping rounded-full bg-[#C31815]'></span>
          </h3>
          <div className='w-[370px] h-[218px] mt-3'>
            <img src={liveData?.urlToImage} alt='' className='w-full h-full' />
          </div>
          <h3 className='font-bold w-[370px] h-[45px] text-[#2A2A2A]'>
            {liveData?.title ||
              "Beloved Arizona coach loses battle with coronavirus"}
          </h3>
        </div>

        <div className='mt-10 flex flex-col items-center md:items-start'>
          <h3 className='text-[#2A2A2A] text-lg font-semibold mb-3'>
            Location News
          </h3>
          <div className='bg-white p-5'>
            <div className='flex flex-col items-start gap-3 my-5'>
              <label htmlFor='text' className='text-sm text-[#141414]'>
                Get Location specific News
              </label>
              <input
                type='text'
                id='text'
                className='w-[330px] h-[60px] outline-none ring-offset-1 duration-200 focus:outline-none focus:ring-1 focus:ring-[#141414] rounded-md'
                placeholder='Enter Your Location'
              />
            </div>
            <button className='w-[100px] h-10 bg-[#C31815] text-white text-sm text-center'>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
CartSection.propTypes = {
  liveData: PropTypes.object,
};
export default CartSection;
