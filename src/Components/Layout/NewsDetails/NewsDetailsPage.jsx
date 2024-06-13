import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import detailCover from "../../../assets/detailsCover.png";
import AdsCard from "./AdsCard";
import RelatedCard from "./RelatedCard";
import DetailsPageBody from "./DetailsPageBody";

const NewsDetailsPage = () => {
  const { title } = useParams();
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [singleData, setSingleData] = useState([]);
  const [error, setError] = useState(null);

  const getAllData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const urls = [
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
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
      const requests = urls.map((url) => fetch(url).then((res) => res.json()));
      const responses = await Promise.all(requests);
      const allArticles = responses.flatMap((response) => response.articles);
      setAllData(allArticles);

      const filteredData = allArticles.filter(
        (article) => article.title === title
      );
      setSingleData(filteredData);
    } catch (error) {
      console.error("Error fetching the news data:", error);
      setError("Failed to load the news data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
    // Cleanup function
    return () => {
      setAllData([]);
      setSingleData([]);
      setError(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  if (isLoading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <div className='w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        {error}
      </div>
    );
  }

  if (singleData?.length === 0) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <div className='w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600'></div>
      </div>
    );
  }

  const article = singleData[0];

  return (
    <section className='max-w-[1920px] mx-auto mb-10'>
      <div className='h-[410px] bg-[#0E1E32]'>
        <h2 className='w-full md:w-[800px] mx-auto pt-10 h-auto md:h-[109px] font-semibold md:text-[42px] text-2xl text-white px-3 md:px-0'>
          {article.title}
        </h2>
      </div>
      <div className='w-full px-3 md:px-0 md:w-[1050px] mx-auto -mt-36 md:-mt-56'>
        <div className='mx-auto'>
          <img
            src={article.urlToImage || detailCover}
            alt={article.title || "News cover"}
            className='w-full md:w-[1050px] h-auto md:h-[423px]'
          />
        </div>

        <div className='flex flex-col md:flex-row gap-[90px] mt-10 group'>
          {/* Details Body Section */}
          <DetailsPageBody detailCover={detailCover} article={article} />

          {/* Ads Section */}
          <div className='flex flex-col'>
            {allData.slice(0, 3).map((item, idx) => (
              <AdsCard
                key={idx}
                title={item.title}
                urlToImage={item.urlToImage}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Related Card Section */}
      <div className='px-3 md:px-0'>
        <h2 className='text-[#222222] font-medium text-xl'>Related Topics</h2>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-5'>
          {allData.slice(0, 5).map((item, idx) => (
            <RelatedCard key={idx} newsItem={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsDetailsPage;
