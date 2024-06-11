import detailCover from "../../../assets/detailsCover.png";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { TbAntennaBars1 } from "react-icons/tb";
const NewsDetailsPage = () => {
  return (
    <section className='max-w-[1920px] mx-auto mb-10'>
      <div className=' h-[410px] bg-[#0E1E32]'>
        <h2 className='w-full md:w-[800px] mx-auto pt-10 h-auto md:h-[109px] font-semibold md:text-[42px] text-2xl text-white px-3 md:px-0'>
          John Lewis, civil rights giant, crosses infamous Selma bridge one
          final time
        </h2>
      </div>
      <div className='w-full px-3 md:px-0 md:w-[1050px] mx-auto -mt-36 md:-mt-56'>
        {/* image  */}
        <div className='mx-auto'>
          <img
            src={detailCover}
            alt='cover'
            className='w-full md:w-[1050px] h-auto md:h-[423px]'
          />
        </div>

        <div className='flex flex-col md:flex-row gap-[90px] mt-10'>
          {/* content section  */}
          <div className='flex flex-col justify-start'>
            <div className='flex flex-col md:flex-row justify-start items-start gap-3 md:items-center mt-3 mb-3 px-3 md:px-0'>
              <p className='text-[#2A2A2A] w-24 h-5 text-[13px]'>2 hours ago</p>
              <p className='w-[210px] h-5 text-[#2A2A2A] text-[13px]'>
                By Lucy Hiddleston | 4min read
              </p>
            </div>
            <p className='w-full px-3 md:px-0 md:w-[705px] text-justify text-lg text-[#2A2A2A]'>
              Crowds watched solemnly as the body of Rep. John Lewis crossed the
              Edmund Pettus Bridge one final time, 55 years after the civil
              rights icon marched for peace and was met with brutality in Selma,
              Alabama. Body bearers from the U.S. armed forces placed the late
              Georgia congressman and civil rights icon onto a horse-drawn
              caisson Sunday at the Brown Chapel African Methodist Episcopal
              Church. From there, the public were allowed to line up to honor
              Lewis for about a half-mile to the foot of the bridge. Rep. Terri
              Sewell, D-Al., thanked Lewis’ family during a ceremony at the
              chapel for sharing the congressman with the public for so many
              years. “Our nation is better off because of John Robert Lewis,”
              she remarked. “My life is better, Selma is better, this nation and
              this world is better because of John Robert Lewis.”
            </p>
            <div className='border-t-2 border-b-2 border-[#C31815] my-10'>
              <p className='text-[#2A2A2A] w-full px-3 md:px-0 md:w-[705px] text-3xl py-10'>
                Solemn crowds watch as Lewis, who died earlier this month at the
                age of 80, is borne by caisson over Edmund Pettus Bridge
              </p>
            </div>
            <div className='mx-auto w-full md:w-[560px]'>
              <img
                src=''
                alt=''
                className='w-full px-3 md:px-0 md:w-[560px] h-[319px]'
              />
              <div className='border-l-8 border-red-500 pl-5 mt-5 px-3 md:px-0'>
                <p className='text-justify px-3 md:px-0'>
                  The casket of late U.S. Rep. John Lewis, a pioneer of the
                  civil rights movement who died July 17, is carried outside the
                  Brown Chapel A.M.E. Church, in Selma, Ala., on July 26, 2020.
                  Christopher Aluka Berry / Reuters
                </p>
              </div>
            </div>
            <p className='w-full px-3 md:px-0 md:w-[705px] text-justify text-lg my-6 text-[#2A2A2A]'>
              Crowds watched solemnly as the body of Rep. John Lewis crossed the
              Edmund Pettus Bridge one final time, 55 years after the civil
              rights icon marched for peace and was met with brutality in Selma,
              Alabama. Body bearers from the U.S. armed forces placed the late
              Georgia congressman and civil rights icon onto a horse-drawn
              caisson Sunday at the Brown Chapel African Methodist Episcopal
              Church. From there, the public were allowed to line up to honor
              Lewis for about a half-mile to the foot of the bridge. Rep. Terri
              Sewell, D-Al., thanked Lewis’ family during a ceremony at the
              chapel for sharing the congressman with the public for so many
              years. “Our nation is better off because of John Robert Lewis,”
              she remarked. “My life is better, Selma is better, this nation and
              this world is better because of John Robert Lewis.”
            </p>
            <div className='mx-auto w-full md:w-[560px]'>
              <img
                src=''
                alt=''
                className='w-full px-3 md:px-0 md:w-[560px] h-[319px]'
              />
              <div className='border-l-8 border-red-500 pl-5 mt-5 px-3 md:px-0'>
                <p className='text-justify px-3 md:px-0'>
                  The casket of late U.S. Rep. John Lewis, a pioneer of the
                  civil rights movement who died July 17, is carried outside the
                  Brown Chapel A.M.E. Church, in Selma, Ala., on July 26, 2020.
                  Christopher Aluka Berry / Reuters
                </p>
              </div>
            </div>
            <p className='w-full px-3 md:px-0 md:w-[705px] text-justify text-lg my-6 text-[#2A2A2A]'>
              Crowds watched solemnly as the body of Rep. John Lewis crossed the
              Edmund Pettus Bridge one final time, 55 years after the civil
              rights icon marched for peace and was met with brutality in Selma,
              Alabama. Body bearers from the U.S. armed forces placed the late
              Georgia congressman and civil rights icon onto a horse-drawn
              caisson Sunday at the Brown Chapel African Methodist Episcopal
              Church. From there, the public were allowed to line up to honor
              Lewis for about a half-mile to the foot of the bridge. Rep. Terri
              Sewell, D-Al., thanked Lewis’ family during a ceremony at the
              chapel for sharing the congressman with the public for so many
              years. “Our nation is better off because of John Robert Lewis,”
              she remarked. “My life is better, Selma is better, this nation and
              this world is better because of John Robert Lewis.”
            </p>

            <div className="border-t-4 border-[#2A2A2A] h-[597px] w-[705px]">
              <div className='w-[705px] h-[245px] bg-white p-8'>
                <h2 className='text-[#2A2A2A] text-lg font-semibold'>
                  Sign up for The NBC News Newsletter
                </h2>
                <p className='text-[#2A2A2A] text-sm mb-3'>By Caroline Casey</p>
                <p className='text-[#2A2A2A] text-base mb-5'>
                  A weekly, ad-free newsletter that helps 786,000+ readers stay
                  in the know, be productive, and think more critically about
                  the world. Take a look
                </p>
                <button className="bg-[#C31815] flex gap-3 justify-center items-center w-[240px] h-10 text-white font-medium text-base"><CiMail />Get this Newsletter</button>
              </div>
              <div className="flex gap-10 mt-10">
                <button className="bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full">NBCBLK</button>
                <button className="bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full">Trending</button>
                <button className="bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full">Lewis</button>
                <button className="bg-[#F6DDDC] w-[100px] h-[30px] text-[#C31815] flex justify-center items-center rounded-full">Freebie</button>
              </div>

              <div className="flex justify-between items-center mt-10">
                <div className="flex gap-5 items-center">
                <span className="flex item-center gap-3 font-medium text-[#2A2A2A]"><CiHeart size={25}/>20</span>
                <span className="flex item-center gap-3 font-medium text-[#2A2A2A]"><BiMessageRounded size={25}/>21 responses</span>
                </div>
                <div className="flex gap-10 items-center">
                <span className="flex gap-3 font-medium text-[#2A2A2A]"><MdOutlineIosShare size={25} /></span>
                <span className="flex gap-3 font-medium text-[#2A2A2A]"><CiBookmark size={25} /></span>
                <span className="flex gap-3 font-medium text-[#2A2A2A]"><TbAntennaBars1 size={25} /></span>
                
                </div>
              </div>
            </div>
          </div>

          {/* ads Section  */}
          <div className='flex flex-col'>
            {/* ads 2  */}
            <div className='w-full md:w-[255px] mb-10 px-2 md-px-0'>
              <h2 className='text-[#2A2A2A] my-5'>Recommended for you</h2>
              <div className='w-full'>
                <img src='' alt='' className='w-full md:w-[300px] h-[200px]' />
              </div>
              <div className='p-5 bg-white'>
                <p className='text-[#2A2A2A] text-justify font-bold text-lg'>
                  Millions rely on emergency pandemic benefits for rent, food,
                  and medicine. Now, that lifeline could disappear.
                </p>
              </div>
            </div>
            {/* ads 1  */}
            <div className='w-full md:w-[255px] mb-10 px-2 md-px-0'>
              <h2 className='text-[#2A2A2A] my-5'>Based on Like</h2>
              <div className='w-full'>
                <img src='' alt='' className='w-full md:w-[300px] h-[200px]' />
              </div>
              <div className='p-5 bg-white'>
                <p className='text-[#2A2A2A] text-justify font-bold text-lg'>
                  Millions rely on emergency pandemic benefits for rent, food,
                  and medicine. Now, that lifeline could disappear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailsPage;
