// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import example from "../../../assets/exmple.png";
// import required modules
import { Pagination } from "swiper/modules";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Carousel = ({ newsData }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {newsData?.map((news, idx) => (
          <SwiperSlide key={idx}>
            <Link
              to={`/news_details/${news?.title}`}
              className='flex gap-5 mt-5 h-auto md:h-52 flex-col md:flex-row px-3 md:px-0'
            >
              <div className='group relative'>
                <img
                  src={news?.urlToImage || example}
                  alt={news?.title}
                  className='w-[300.55px] h-[170px]'
                />
                <span className='absolute rounded-tl-full rounded-bl-full right-3 md:right-2 top-2 h-4 w-20 flex bg-[#C31815] m-2 text-white justify-center items-center text-xs'>
                  {news?.source?.name}
                </span>
                <div className='flex absolute bg-transparent invisible group-hover:visible duration-300 -bottom-5 group-hover:bottom-3 right-1/3 md:right-1/4 text-white items-center gap-10 justify-center mt-10 pt-3'>
                  <CiHeart
                    size={20}
                    className='hover:text-white/70 cursor-pointer'
                  />
                  <MdOutlineIosShare
                    size={20}
                    className='hover:text-white/70 cursor-pointer'
                  />
                  <CiBookmark
                    size={20}
                    className='hover:text-white/70 cursor-pointer'
                  />
                </div>
              </div>
              <div>
                <h2 className='w-[380px] text-left h-auto md:h-[71px] font-bold text-[#2A2A2A]'>
                  {news?.title}
                </h2>
                <p className='text-[#2A2A2A] mt-3 text-justify h-auto mb-10 md:mb-5 md:h-[68px] w-[380px]'>
                  {news?.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

Carousel.propTypes = {
  newsData: PropTypes.array,
};

export default Carousel;
