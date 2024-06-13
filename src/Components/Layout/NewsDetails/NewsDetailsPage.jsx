import detailCover from "../../../assets/detailsCover.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdsCard from "./AdsCard";
import authorPic from "../../../assets/author.png";
import RelatedCard from "./RelatedCard";
import Floating from "./Floating";
import GetNewsLetter from "./GetNewsLetter";

const NewsDetailsPage = () => {
  const { title } = useParams();
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleData, setSingleData] = useState([]);

  const getAllData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const urls = [
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,
      `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`,
    ];

    try {
      const requests = urls?.map((url) => fetch(url).then((res) => res.json()));
      const responses = await Promise.all(requests);
      const allArticles = responses?.flatMap((response) => response.articles);
      setAllData(allArticles);

      const filteredData = allArticles.filter(
        (article) => article.title === title
      );
      setSingleData(filteredData);
    } catch (error) {
      console.error("Error fetching the news data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  if (isLoading) {
    return (
      <div className=' min-h-screen flex justify-center items-center'>
        <div className='w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600'></div>
      </div>
    );
  }

  if (singleData?.length === 0) {
    return <div>No article found with the title {title}</div>;
  }

  const article = singleData[0];

  return (
    <section className='max-w-[1920px] mx-auto mb-10'>
      <div className='h-[410px] bg-[#0E1E32]'>
        <h2 className='w-full md:w-[800px] mx-auto pt-10 h-auto md:h-[109px] font-semibold md:text-[42px] text-2xl text-white px-3 md:px-0'>
          {article?.title}
        </h2>
      </div>
      <div className='w-full px-3 md:px-0 md:w-[1050px] mx-auto -mt-36 md:-mt-56'>
        <div className='mx-auto'>
          <img
            src={article?.urlToImage || detailCover}
            alt='cover'
            className='w-full md:w-[1050px] h-auto md:h-[423px]'
          />
        </div>

        <div className='flex flex-col md:flex-row gap-[90px] mt-10 group'>
          <div className='flex flex-col justify-start'>
            <div className='flex flex-col md:flex-row justify-start items-start gap-3 md:items-center mt-3 mb-3 px-3 md:px-0'>
              <p className='text-[#2A2A2A] w-24 h-5 text-[13px]'>
                {new Date(article?.publishedAt).toLocaleTimeString()}
              </p>
              <p className='w-[210px] h-5 text-[#2A2A2A] text-[13px]'>
                By {article?.author} | 4min read
              </p>
            </div>
            <Floating></Floating>
            <p className='w-full relative px-3 md:px-0 md:w-[705px] text-justify text-lg text-[#2A2A2A]'>
              {article?.content}
            </p>
            <div className='border-t-2 border-b-2 border-[#C31815] my-10'>
              <p className='text-[#2A2A2A] w-full px-3 md:px-0 md:w-[705px] text-3xl py-10'>
                {article?.description}
              </p>
            </div>
            <div className='mx-auto w-full md:w-[560px]'>
              <img
                src={article?.urlToImage || detailCover}
                alt=''
                className='w-full px-3 md:px-0 md:w-[560px] h-[319px]'
              />
              <div className='border-l-8 border-red-500 pl-5 mt-5 px-3 md:px-0'>
                <p className='text-justify px-3 md:px-0'>
                  {article?.description}
                  <span className='text-red-700'>{article?.source?.name}</span>
                </p>
              </div>
            </div>
            <p className='w-full px-3 md:px-0 md:w-[705px] text-justify text-lg my-6 text-[#2A2A2A]'>
              {article.content}
            </p>
            <div className='mx-auto w-full md:w-[560px]'>
              <img
                src={article?.urlToImage || detailCover}
                alt=''
                className='w-full px-3 md:px-0 md:w-[560px] h-[319px]'
              />
              <div className='border-l-8 border-red-500 pl-5 mt-5 px-3 md:px-0'>
                <p className='text-justify px-3 md:px-0'>
                  {article?.description}{" "}
                  <span className='text-red-700'>{article?.source?.name}</span>
                </p>
              </div>
            </div>
            <p className='w-full px-3 md:px-0 md:w-[705px] text-justify text-lg my-6 text-[#2A2A2A]'>
              {article?.content}
            </p>

            <GetNewsLetter authorPic={authorPic} article={article} />
          </div>

          {/* ads Section  */}
          <div className='flex flex-col'>
            {allData?.slice(0, 3).map((item, idx) => (
              <AdsCard
                key={idx}
                title={item?.title}
                urlToImage={item?.urlToImage}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='px-3 md:px-0'>
        <h2 className='text-[#222222] font-medium text-xl'>Related Topics</h2>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-5'>
          {allData?.slice(0, 5).map((item, idx) => (
            <RelatedCard key={idx} newsItem={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsDetailsPage;
