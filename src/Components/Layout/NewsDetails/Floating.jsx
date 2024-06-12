import { BiMessageRounded } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineIosShare } from "react-icons/md";

const Floating = () => {
  return (
    <div className='absolute md:left-64 -left-28 group-hover:left-0 md:group-hover:left-64 transition-all duration-300'>
      <div className='flex flex-col gap-2 items-center w-[63px] h-[54px]'>
        <p className='text-sm text-[#2A2A2A] font-medium text-center'>
          See more <br />
          like this?
        </p>
        <div className='flex gap-2 justify-center items-center w-10'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#15C36F]'></span>|
          <span className='h-2.5 w-2.5 rounded-full bg-[#EB681E]'></span>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center w-[52px] gap-8 mt-10'>
        <span className='flex items-center gap-2 font-medium text-[#2A2A2A]'>
          <FaHeart className='text-red-700' size={30} />
          20
        </span>
        <span className='flex items-center gap-2 font-medium text-[#2A2A2A]'>
          <BiMessageRounded size={30} />
          21
        </span>
        <MdOutlineIosShare size={30} />
        <CiBookmark size={30} />
      </div>
    </div>
  );
};

export default Floating;
