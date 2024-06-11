import PropTypes from "prop-types";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";

const CartItem2 = ({ newsItem }) => {
  const getShortAuthor = (author) => {
    if (!author) return "Author not available";
    return author.length > 15 ? `${author.substring(0, 15)}...` : author;
  };

  return (
    <div className='flex gap-5 mt-5 h-auto md:h-64 flex-col md:flex-row px-3 md:px-0 bg-white'>
      <div className='group relative'>
        <img
          src={newsItem?.urlToImage || "https://via.placeholder.com/300x170"}
          alt={newsItem?.title || "News image"}
          className='w-full md:w-[300.55px] h-[256px]'
        />
        <span className='absolute rounded-tl-full rounded-bl-full right-3 md:right-2 top-2 h-4 w-16 flex bg-[#C31815] m-2 text-white justify-center items-center text-xs'>
          {newsItem?.source?.name || "Source"}
        </span>
        <div className='flex absolute bg-transparent invisible group-hover:visible duration-300 -bottom-5 group-hover:bottom-3 right-1/3 md:right-1/4 text-white items-center gap-10 justify-center mt-10 pt-3'>
          <CiHeart size={20} className='hover:text-white/70 cursor-pointer' />
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
      <div className="p-2">
        <h2 className='w-[380px] text-left h-auto md:h-[71px] font-bold text-[#2A2A2A]'>
          {newsItem?.title || "Title not available"}
        </h2>
        <p className='text-[#2A2A2A] mt-3 text-justify h-auto mb-10 md:mb-5 md:h-[68px] w-[380px]'>
          {newsItem?.description || "Description not available"}
        </p>
        <div className='flex gap-3 items-center mt-4'>
          <p className='text-[#2A2A2A] w-24 h-5 text-[13px]'>
            {newsItem?.publishedAt
              ? new Date(newsItem.publishedAt).toLocaleTimeString()
              : "Time not available"}
          </p>
          <p className='w-[210px] h-5 text-[#2A2A2A] text-[13px]'>
            {newsItem?.author
              ? `By ${getShortAuthor(newsItem.author)}`
              : "Author not available"}{" "}
            | 4min read
          </p>
        </div>
      </div>
    </div>
  );
};

CartItem2.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default CartItem2;
