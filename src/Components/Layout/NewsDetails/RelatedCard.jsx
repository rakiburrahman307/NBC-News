import PropTypes from "prop-types";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { MdOutlineIosShare } from "react-icons/md";
import { Link } from "react-router-dom";

const RelatedCard = ({ newsItem }) => {
  return (
    <Link
      to={`/news_details/${newsItem?.title}`}
      className='border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col gap-5 w-full md:w-[255px] h-auto p-3 md:p-0 md:h-[357px]'
    >
      <div>
        <img
          src={newsItem?.urlToImage || "https://via.placeholder.com/438x210"}
          alt={newsItem?.title}
          className='w-full h-[210px]'
        />
      </div>
      <div className='px-3'>
        <div className='mb-2'>
          <h3 className='text-gray-900 font-bold text-base hover:text-indigo-600 w-full h-[63px] inline-block'>
            {newsItem?.title.length > 10
              ? newsItem?.title.slice(0, 70)
              : newsItem?.title || "Title not available"}
          </h3>
        </div>
        <div className='flex items-center gap-16 justify-center border-t-2 pt-3'>
          <CiHeart size={20} />
          <MdOutlineIosShare size={20} />
          <CiBookmark size={20} />
        </div>
      </div>
    </Link>
  );
};

RelatedCard.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default RelatedCard;
