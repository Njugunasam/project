import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaMoon, FaSun, FaDownload, FaUserCircle } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { GiGlobe } from 'react-icons/gi';
import { useTheme } from '../ThemeContext';
const Logo = () => (
  <div className="flex flex-col items-center">
    <span className="text-4xl font-bold text-green-500 mb-1">OMAYA</span>
    <span className="text-xs font-bold text-white mt-1 ml-2">EXCHANGE</span>
  </div>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCountryDropdown = () => setIsCountryDropdownOpen(!isCountryDropdownOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <header className={`p-4 fixed w-full top-0 left-0 z-30 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} transition-colors duration-300`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center flex-shrink-0">
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>

        {/* Navbar Links for Larger Screens */}
        <nav className={`flex-1 hidden md:flex md:justify-center`}>
          <ul className="flex space-x-6">
            <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link></li>
            <li><Link to="/market" className="block py-2 px-4 hover:bg-gray-700 rounded">Market</Link></li>
            <li><Link to="/rates" className="block py-2 px-4 hover:bg-gray-700 rounded">Rates</Link></li>
            <li><Link to="/blog" className="block py-2 px-4 hover:bg-gray-700 rounded">Blog</Link></li>
          </ul>
        </nav>

        {/* Right Side: Buttons and Profile */}
        <div className="flex items-center space-x-4">
          {/* Deposit Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 text-md font-semibold hidden sm:flex">
            <FaDownload className="text-xl" />
            <span>Deposit</span>
          </button>

          {/* User Profile */}
          <div className="relative">
            <button className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center">
              <FaUserCircle className="text-2xl" />
            </button>
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <button className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center" onClick={toggleCountryDropdown}>
              <GiGlobe className="text-2xl" />
              <BsChevronDown className={`text-xl transition-transform ${isCountryDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isCountryDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded-lg shadow-lg z-40">
                <ul>
                  <li><button className="block px-4 py-2 hover:bg-gray-700">USA</button></li>
                  <li><button className="block px-4 py-2 hover:bg-gray-700">UK</button></li>
                  <li><button className="block px-4 py-2 hover:bg-gray-700">Canada</button></li>
                </ul>
              </div>
            )}
          </div>

          {/* Mode Toggle Button */}
          <button onClick={toggleTheme} className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center">
            {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isSidebarOpen && (
        <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white shadow-md md:hidden">
          <div className="p-4">
            <button
              className="text-gray-300 hover:text-white mb-4"
              onClick={toggleSidebar}
            >
              <HiX className="w-6 h-6" />
            </button>
            <ul>
              <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={closeSidebar}>Dashboard</Link></li>
              <li><Link to="/market" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={closeSidebar}>Market</Link></li>
              <li><Link to="/rates" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={closeSidebar}>Rates</Link></li>
              <li><Link to="/blog" className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={closeSidebar}>Blog</Link></li>
              {/* Add more mobile menu items if needed */}
            </ul>
          </div>
        </aside>
      )}
    </header>
  );
};

export default Navbar;
