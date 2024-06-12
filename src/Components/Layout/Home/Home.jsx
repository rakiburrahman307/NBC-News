import { useParams } from "react-router-dom";
import Banner from "./Banner";
import CartSection from "./CartSection";
import EditorPicks from "./EditorPicks";
import MiddleBar from "./MiddleBar";
import { useEffect, useState } from "react";

const Home = () => {
    const [newsData, setNewsData] =useState([]);
    const [loading, setLoading] = useState(false);
  const {category} = useParams();


  const getNewsData = async (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`An error occurred: ${res.statusText}`);
      }
      const data = await res.json();
      const filteredData = data?.articles?.filter(article => article?.source?.id !== null && article?.urlToImage !== null);
      setNewsData(filteredData);
    } catch (error) {
      console.error("Error fetching the news data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getNewsData(category || "health");
  }, [category]);

  return (
    <div className='max-w-[1366px] mx-auto'>
      <Banner newsData={newsData[1]} loading={loading}></Banner>
      <MiddleBar />
      <CartSection liveData={newsData[2]}></CartSection>
      <EditorPicks newsData={newsData}></EditorPicks>
    </div>
  );
};

export default Home;
