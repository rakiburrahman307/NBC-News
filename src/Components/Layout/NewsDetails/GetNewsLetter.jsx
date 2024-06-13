import { FaTwitter } from "react-icons/fa";
import { CiBookmark, CiHeart, CiMail } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { TbAntennaBars1 } from "react-icons/tb";
import  PropTypes  from 'prop-types';
const GetNewsLetter = ({article,authorPic}) => {
    return (
        <div className='border-t-4 px-2 md:px-0 border-[#2A2A2A] h-auto md:h-[597px] w-full md:w-[705px]'>
        <div className='w-full md:w-[705px] h-auto md:h-[245px] bg-white p-8'>
          <h2 className='text-[#2A2A2A] text-lg font-semibold'>
            Sign up for The NBC News Newsletter
          </h2>
          <p className='text-[#2A2A2A] text-sm mb-3'>By Caroline Casey</p>
          <p className='text-[#2A2A2A] text-base mb-5'>
            A weekly, ad-free newsletter that helps 786,000+ readers stay
            in the know, be productive, and think more critically about
            the world. Take a look
          </p>
          <button className='bg-[#C31815] flex gap-3 justify-center items-center w-[240px] h-10 text-white font-medium text-base'>
            <CiMail />
            Get this Newsletter
          </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mt-10'>
          <button className='bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full'>
            NBCBLK
          </button>
          <button className='bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full'>
            Trending
          </button>
          <button className='bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full'>
            Lewis
          </button>
          <button className='bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full'>
            Freebie
          </button>
        </div>

        <div className='flex flex-col md:flex-row justify-start gap-5 items-start md:justify-between md:items-center mt-10'>
          <div className='flex gap-5 items-center'>
            <span className='flex item-center gap-3 font-medium text-[#2A2A2A]'>
              <CiHeart size={25} />
              20
            </span>
            <span className='flex item-center gap-3 font-medium text-[#2A2A2A]'>
              <BiMessageRounded size={25} />
              21 responses
            </span>
          </div>
          <div className='flex gap-10 items-center'>
            <span className='flex gap-3 font-medium text-[#2A2A2A]'>
              <MdOutlineIosShare size={25} />
            </span>
            <span className='flex gap-3 font-medium text-[#2A2A2A]'>
              <CiBookmark size={25} />
            </span>
            <span className='flex gap-3 font-medium text-[#2A2A2A]'>
              <TbAntennaBars1 size={25} />
            </span>
          </div>
        </div>

        <div className='mt-10 flex flex-col md:flex-row items-center md:items-start gap-5 md:justify-between'>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='rounded-full flex items-center justify-center md:justify-start md:items-start md:h-[134px] '>
              <img
                src={article?.urlToImage || authorPic}
                alt='author'
                className='w-[100px] object-cover rounded-full h-[100px]'
              />
            </div>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
              <h5 className='text-[#2A2A2A] font-bold text-base'>
                Author
              </h5>
              <h3 className='font-bold text-xl text-[#2A2A2A]'>
                {article?.author || "Caroline Casey"}
              </h3>
              <p className='text-base text-justify px-2 md:px-0 w-full md:w-[356px] text-[#2A2A2A]'>
                Caroline Casey is an award-winning social activist and
                founder of{" "}
                <span className='text-red-600'> The Valuable 500</span>, a
                global movement aimed at getting 500 companies to commit
                to disability inclusion.{" "}
              </p>
            </div>
          </div>
          <button className='text-[#C31815] flex justify-center items-center gap-5 border border-[#EFBFBE] w-[145px] h-[40px]'>
            <FaTwitter size={20} /> Follow
          </button>
        </div>
      </div>
    );
};
GetNewsLetter.propTypes ={
    article:PropTypes.object.isRequired,
    authorPic:PropTypes.string.isRequired,
}
export default GetNewsLetter;