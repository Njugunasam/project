import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faExchangeAlt, faHandshake, faSyncAlt, faDollarSign, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`md:flex md:w-64 md:flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>
      <aside className="bg-gray-200 w-64 p-4 shadow-md flex-shrink-0">
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800 mb-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <ul>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-500 mr-3" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faExchangeAlt} className="text-green-500 mr-3" />
              Exchange
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faHandshake} className="text-yellow-500 mr-3" />
              P2P Trading
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faSyncAlt} className="text-purple-500 mr-3" />
              Swap Crypto
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faDollarSign} className="text-red-500 mr-3" />
              Buy Crypto
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faUser} className="text-teal-500 mr-3" />
              Account
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-300 rounded">
              <FontAwesomeIcon icon={faCog} className="text-gray-500 mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
