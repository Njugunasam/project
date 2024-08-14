// src/components/Sidebar.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faExchangeAlt, faHandshake, faSyncAlt, faDollarSign, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64 p-4 shadow-md flex-shrink-0">
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
  );
};

export default Sidebar;
