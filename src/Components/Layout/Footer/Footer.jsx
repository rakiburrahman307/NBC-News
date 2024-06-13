import footerLogo from "../../../assets/footerLogo.png";
import { FaFacebook, FaRedditAlien, FaRss } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-[#0E1E32] text-primary-content max-w-[1920px]'>
      <div className='max-w-[1133px] h-auto md:h-[117px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center'>
        <div className='flex flex-col items-center gap-5 h-auto w-[189px] md:h-[107px]'>
          <img src={footerLogo} alt='nbc_logo' className='w-[66px] h-10' />
          <h4 className='text-white text-xs'>
            copyright &copy; 2020 | NBC NEWS
          </h4>
        </div>
        <div className='w-[210px] h-[116px] flex flex-col md:justify-start items-center md:items-start'>
          <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
            Privacy Policy
          </p>
          <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
            Do not sell my personal info
          </p>
          <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
            Terms of Service
          </p>
          <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
            nbcnews.com Site Map
          </p>
        </div>
        <div>
          <div className='w-[347px] h-[32px] flex items-center justify-center md:justify-start gap-5 mb-5'>
            <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
              About
            </p>
            <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
              Contact
            </p>
            <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
              Careers
            </p>
            <p className='font-medium text-base text-white cursor-pointer hover:text-white/80 hover:scale-105 hover:underline'>
              Coupons
            </p>
          </div>
          <div className='w-[266.18px] h-[28px] flex items-center justify-end gap-10'>
            <FaRss
              size={20}
              className='text-white cursor-pointer hover:text-white/70 hover:scale-105 hover:underline'
            />
            <FaRedditAlien
              size={20}
              className='text-white cursor-pointer hover:text-white/70 hover:scale-105 hover:underline'
            />
            <IoLogoTwitter
              size={20}
              className='text-white cursor-pointer hover:text-white/70 hover:scale-105 hover:underline'
            />
            <FaFacebook
              size={20}
              className='text-white cursor-pointer hover:text-white/70 hover:scale-105 hover:underline'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
