import PropTypes from "prop-types";
import banner from "../../../assets/banner.png";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";

const Banner = ({ newsData, loading }) => {

  return (
    <section className='max-w-[1920px] mx-auto'>
      <div className='max-w-[1366px] mx-auto flex flex-col md:flex-row items-center gap-20'>
        {loading ? (
          <div
            className="w-full h-72 mx-auto md:w-[750px] md:h-[500px] flex items-center justify-center"
            style={{ minHeight: '580px' }}
          >
            <div className="w-10 h-10 animate-spin rounded-full border-8 border-dotted border-sky-600"></div>
          </div>
        ) : (
          <>
            <div className='mt-10 md:mt-20 px-3 md:px-0'>
              <img src={newsData?.urlToImage || banner} alt='banner' className='w-full h-72 md:w-[750px] md:h-[500px]' />
            </div>
            <div className="w-full px-3 md:px-0 md:w-[540px]">
              <div className='flex items-center justify-between w-full px-3 md:px-0'>
                <h3 className='text-[#C31815] text-sm font-semibold'>Trending</h3>
                <div className='flex items-center gap-3'>
                  <CiHeart size={20} />
                  <MdOutlineIosShare size={20} />
                  <CiBookmark size={20} />
                </div>
              </div>
              <h2 className="w-full h-auto px-3 md:px-0 text-2xl md:w-[540px] md:h-[123px] text-[#2A2A2A] md:text-4xl font-semibold mt-3 md:mt-5 mb-16">
                {newsData?.title || "Cake meme reflects coronavirus absurdity in a world where nothing is what it seems"}
              </h2>
              <p className="w-full text-justify px-3 md:px-0 h-auto md:w-[500px] md:h-[96px] font-normal mt-3 md:mt-8">
                {newsData?.description || "Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme: “Is this real or is this cake?”"}
              </p>
              <div className="flex flex-col px-3 md:px-0 gap-3 md:flex-row md:gap-20 md:items-center mt-4 md:mt-8">
                <p className="text-[#2A2A2A] w-24 h-5">2 hours ago</p>
                <p className="w-[350px] h-5 text-[#2A2A2A]">{newsData?.author || "By Lucy Hiddleston"} |  4min read</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

Banner.propTypes = {
  newsData: PropTypes.object,
  loading: PropTypes.bool
};

export default Banner;
