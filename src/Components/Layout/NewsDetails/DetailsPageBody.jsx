import authorPic from "../../../assets/author.png";
import PropTypes from "prop-types";
import Floating from "./Floating";
import GetNewsLetter from "./GetNewsLetter";
const DetailsPageBody = ({ article, detailCover }) => {
  return (
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
  );
};
DetailsPageBody.propTypes = {
  article: PropTypes.object,
  detailCover: PropTypes.object,
};
export default DetailsPageBody;
