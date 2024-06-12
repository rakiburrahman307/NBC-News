import { useState } from "react";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLink, setNavLink] = useState([
    { name: "Corona Updates", value: "health", active: true },
    { name: "Business", value: "business", active: false },
    { name: "Politics", value: "entertainment", active: false },
    { name: "Sports", value: "sports", active: false },
    { name: "World", value: "science", active: false },
    { name: "Travel", value: "general", active: false },
    { name: "Technology", value: "technology", active: false },
  ]);

  const handleNavClick = (idx) => {
    const updatedNavLink = navLink.map((nav, index) => {
      if (index === idx) {
        return { ...nav, active: true };
      }
      return { ...nav, active: false };
    });
    setNavLink(updatedNavLink);
  };
  return (
    <nav className='max-h-20 max-w-[1920px] mx-auto'>
      <div className='h-screen flex overflow-hidden bg-gray-200'>
        {/*  Sidebar  */}
        <div
          className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm min-h-screen duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute min-h-full w-80 right-0 top-0 min-w-96 rounded-lg bg-white pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center px-5 my-5'>
              <h1 className='text-2xl font-semibold'>NBC News</h1>
              <IoMdClose onClick={() => setIsOpen(!isOpen)} size={25} />
            </div>
            <ul className='mt-4 w-full'>
              {navLink.map((nav, idx) => (
                <Link
                  to={`/${nav?.value || "health"}`}
                  onClick={() => handleNavClick(idx)}
                  key={idx}
                >
                  <li className='text-[#2A2A2A] hover:text-[#2A2A2A]/80 cursor-pointer py-3.5 w-full hover:text-blue-700 hover:bg-blue-50'>
                    {nav?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/*  Content  */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {/*  Navbar */}
          <div className='bg-white shadow'>
            <div className='container mx-auto'>
              <div className='flex justify-between items-center py-4 px-2 max-w-[1366px] mx-auto'>
                <Link to="/">
                  <img src={logo} alt='Logo' className='w-15 h-12' />
                </Link>

                <ul className='md:flex justify-around items-center gap-8 list-none hidden'>
                  {navLink.map((nav, idx) => (
                    <Link
                      to={`/${nav?.value || "health"}`}
                      onClick={() => handleNavClick(idx)}
                      key={idx}
                    >
                      <li className='relative flex items-center text-black hover:text-black/80 cursor-pointer'>
                        {nav?.name}
                        {nav?.active && (
                          <div className='absolute -left-5 rounded-full h-2 w-2 flex bg-red-600 m-2'></div>
                        )}
                      </li>
                    </Link>
                  ))}
                  <MdKeyboardDoubleArrowRight className='text-black hover:text-black/80 cursor-pointer' />
                </ul>

                <div className='flex items-center justify-center gap-5'>
                  <button className='w-5 h-6'>
                    <VscAccount />
                  </button>
                  <button className='w-5 h-6'>
                    <CiSearch />
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='w-5 h-6 flex items-center md:hidden '
                  >
                    <FaBarsStaggered />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
