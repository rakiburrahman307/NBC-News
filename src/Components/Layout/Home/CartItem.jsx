import PropTypes from "prop-types";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { Link } from "react-router-dom";

const CartItem = ({ newsItem }) => {
  const getShortAuthor = (author) => {
    if (!author) return "Author not available";
    return author.length > 15 ? `${author.substring(0, 15)}...` : author;
  };

  return (
    <Link
      to={`/news_details/${newsItem?.title}`}
      className='border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col gap-5 w-full md:w-[438px] h-auto p-3 md:p-0 md:h-[520px]'
    >
      <div className='relative'>
        <img
          src={newsItem?.urlToImage || "https://via.placeholder.com/438x210"}
          alt={newsItem?.title}
          className='w-full h-[210px]'
        />
        <span className='absolute rounded-tl-full rounded-bl-full right-2 bottom-2 h-4 w-20 flex bg-[#C31815] m-2 text-white justify-center items-center text-xs'>
          {newsItem?.source?.name || "Source"}
        </span>
      </div>
      <div className='px-3'>
        <div className='mb-2'>
          <h3 className='text-gray-900 font-bold text-lg mb-5 hover:text-indigo-600 md:w-[388px] h-[45px] inline-block'>
            {newsItem?.title.length > 10
              ? newsItem?.title.slice(0, 90)
              : newsItem?.title || "Title not available"}
          </h3>
          <p className='text-gray-700 text-sm text-justify w-full md:w-[388px] h-[106px]'>
            {newsItem?.description || "Description not available"}
          </p>
          <div className='flex gap-3 items-center mt-1'>
            <p className='text-[#2A2A2A] w-24 h-5 text-[13px]'>
              {new Date(newsItem?.publishedAt).toLocaleTimeString()}
            </p>
            <p className='w-[210px] h-5 text-[#2A2A2A] text-[13px]'>
              {`By ${getShortAuthor(newsItem?.author)}`} | 4min read
            </p>
          </div>
        </div>
        <div className='flex items-center gap-16 justify-center mt-10 border-t-2 pt-3'>
          <CiHeart size={20} />
          <MdOutlineIosShare size={20} />
          <CiBookmark size={20} />
        </div>
      </div>
    </Link>
  );
};

CartItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default CartItem;
