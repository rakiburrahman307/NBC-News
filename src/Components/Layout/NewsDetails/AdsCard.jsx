import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AdsCard = ({ title, urlToImage }) => {
  return (
    <Link to={`/news_details/${title}`} className='w-full md:w-[255px] mb-10 px-2 md-px-0'>
      <h2 className='text-[#2A2A2A] my-5'>Recommended for you</h2>
      <div className='w-full'>
        <img src={urlToImage} alt='' className='w-full md:w-[300px] h-[200px]' />
      </div>
      <div className='p-5 bg-white'>
        <p className='text-[#2A2A2A] text-justify font-bold text-lg'>
         {title || "Millions rely on emergency pandemic benefits for rent, food, and medicine. Now, that lifeline could disappear"}
        </p>
      </div>
    </Link>
  );
};
AdsCard.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};
export default AdsCard;
