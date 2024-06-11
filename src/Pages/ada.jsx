import { useState } from "react";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLink, setNavLink] = useState([
    { name: "Corona Updates", value: "health", active: false },
    { name: "Business", value: "business", active: false },
    { name: "Politics", value: "entertainment", active: false },
    { name: "Sports", value: "sports", active: false },
    { name: "World", value: "science", active: false },
    { name: "Travel", value: "general", active: true },
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
        {/* <!-- Sidebar --> */}
        <div
          className={`fixed z-[100] inset-0bg-black/20 backdrop-blur-sm min-h-screen duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`absolute right-0 min-w-96 rounded-lg bg-white pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
              isOpen
                ? "-translate-x-0 opacity-100 duration-700"
                : "translate-x-full opacity-0 duration-300"
            } rounded-none min-h-full`}
          >
            <h1 className='text-2xl font-semibold'>Sidebar</h1>
            <ul className='mt-4'>
              <li className='relative flex items-center text-black hover:text-black/80 cursor-pointer'>
                Corona Updates
              </li>
              <li className='text-black hover:text-black/80 cursor-pointer'>
                Politics
              </li>
              <li className='text-black hover:text-black/80 cursor-pointer'>
                Business
              </li>
              <li className='text-black hover:text-black/80 cursor-pointer'>
                Sports
              </li>
              <li className='text-black hover:text-black/80 cursor-pointer'>
                World
              </li>
              <li className='text-black hover:text-black/80 cursor-pointer'>
                Travel
              </li>
              <li className='text-black hover:text-black/80 cursor-pointer'>
                Podcasts
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Content --> */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {/* <!-- Navbar --> */}
          <div className='bg-white shadow'>
            <div className='container mx-auto'>
              <div className='flex justify-between items-center py-4 px-2 max-w-7xl mx-auto'>
                <div>
                  <img src={logo} alt='Logo' className='w-15 h-12' />
                </div>

                <ul className='md:flex justify-around items-center gap-5 list-none hidden'>
                  {navLink.map((nav, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleNavClick(idx)}
                      className='relative flex items-center text-black hover:text-black/80 cursor-pointer'
                    >
                      {nav.name}
                      {nav.active && (
                        <div className='absolute -left-5 rounded-full h-2 w-2 flex bg-red-600 m-2'></div>
                      )}
                    </li>
                  ))}
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
                    className='w-5 h-6'
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
