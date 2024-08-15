import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faExchangeAlt, faHandshake, faSyncAlt, faDollarSign, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className={`fixed inset-y-0 left-0 z-10 w-64 bg-gray-800 text-white shadow-md transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:mt-24`}>
        <div className="p-4">
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white mb-4"
            onClick={toggleSidebar}
          >
            <HiX className="w-6 h-6" />
          </button>
          <ul>
            <li>
              <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-400 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/exchange" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faExchangeAlt} className="text-green-400 mr-3" />
                Exchange
              </Link>
            </li>
            <li>
              <Link to="/p2p-trading" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faHandshake} className="text-yellow-400 mr-3" />
                P2P Trading
              </Link>
            </li>
            <li>
              <Link to="/swap-crypto" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faSyncAlt} className="text-purple-400 mr-3" />
                Swap Crypto
              </Link>
            </li>
            <li>
              <Link to="/buy-crypto" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faDollarSign} className="text-red-400 mr-3" />
                Buy Crypto
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center py-2 px-4 hover:bg-gray-700 rounded w-full text-left"
              >
                <FontAwesomeIcon icon={faUser} className="text-teal-400 mr-3" />
                Account
                <svg
                  className={`ml-auto w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="bg-gray-700 mt-2 rounded">
                  <li>
                    <Link to="/profile" className="block py-2 px-4 hover:bg-gray-600">Profile</Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block py-2 px-4 hover:bg-gray-600">Settings</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/settings" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faCog} className="text-gray-400 mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Sidebar for mobile */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white shadow-md transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="p-4">
          <button
            className="text-gray-300 hover:text-white mb-4"
            onClick={toggleSidebar}
          >
            <HiX className="w-6 h-6" />
          </button>
          <ul>
            <li>
              <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-400 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/exchange" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faExchangeAlt} className="text-green-400 mr-3" />
                Exchange
              </Link>
            </li>
            <li>
              <Link to="/p2p-trading" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faHandshake} className="text-yellow-400 mr-3" />
                P2P Trading
              </Link>
            </li>
            <li>
              <Link to="/swap-crypto" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faSyncAlt} className="text-purple-400 mr-3" />
                Swap Crypto
              </Link>
            </li>
            <li>
              <Link to="/buy-crypto" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faDollarSign} className="text-red-400 mr-3" />
                Buy Crypto
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center py-2 px-4 hover:bg-gray-700 rounded w-full text-left"
              >
                <FontAwesomeIcon icon={faUser} className="text-teal-400 mr-3" />
                Account
                <svg
                  className={`ml-auto w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="bg-gray-700 mt-2 rounded">
                  <li>
                    <Link to="/profile" className="block py-2 px-4 hover:bg-gray-600">Profile</Link>
                  </li>
                  <li>
                    <Link to="/settings" className="block py-2 px-4 hover:bg-gray-600">Settings</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/settings" className="flex items-center py-2 px-4 hover:bg-gray-700 rounded">
                <FontAwesomeIcon icon={faCog} className="text-gray-400 mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
