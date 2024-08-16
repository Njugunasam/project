import React, { useState } from 'react';
import { useTheme } from '../ThemeContext'; // Import useTheme from your ThemeContext
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RateExchange = () => {
  const [view, setView] = useState('Crypto'); // State to toggle between Crypto and Forex
  const { isDarkMode } = useTheme(); // Consume the theme context

  const handleViewToggle = (viewType) => {
    setView(viewType);
  };

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Top Section Container */}
      <div className="flex justify-between items-start mb-4">
        {/* Left Side: Deposit Heading and Crypto/Forex Toggle Buttons */}
        <div className="flex flex-col space-y-2 w-[70%]">
          <h2 className="text-xl font-semibold">Deposit</h2>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-lg ${view === 'Crypto' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'} hover:${view === 'Crypto' ? 'bg-green-600' : 'bg-gray-300'}`}
              onClick={() => handleViewToggle('Crypto')}
            >
              Crypto
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${view === 'Forex' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'} hover:${view === 'Forex' ? 'bg-green-600' : 'bg-gray-300'}`}
              onClick={() => handleViewToggle('Forex')}
            >
              Forex
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            To deposit funds, please select your transaction type: Crypto or Forex. <br />
            Choose from the cryptocurrencies or forex brokers listed below to proceed.
          </p>
        </div>

        {/* Right Side: Transaction Type Buttons */}
        <div className="flex flex-col space-y-2 items-start w-[30%] pl-0">
          <div className="text-xl font-semibold mb-2">Transaction Type</div>
          <div className="flex flex-col space-y-2 items-start">
            <div className="flex space-x-2">
              <button className={`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ${isDarkMode ? 'hover:bg-green-700' : ''} ml-2`}>
                <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
                Deposit
              </button>
              <button className={`bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ${isDarkMode ? 'hover:bg-red-700' : ''} ml-2`}>
                <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container for Table */}
      <div className={`border border-gray-200 rounded-lg shadow-md p-4 w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {view === 'Crypto' ? (
          <table className={`w-full text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <thead>
              <tr className={`bg-gray-100 border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <th className="px-4 py-2">Profile</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Network</th>
                <th className="px-4 py-2">Favorite</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Rows for Crypto */}
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Bitcoin" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">BTC</span>
                      <span className="text-xs text-gray-500">Bitcoin</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">$25,000</td>
                <td className="px-4 py-2">BTC Network</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600">⭐</button>
                </td>
              </tr>
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="Ethereum" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">ETH</span>
                      <span className="text-xs text-gray-500">Ethereum</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">$1,600</td>
                <td className="px-4 py-2">ETH Network</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600">⭐</button>
                </td>
              </tr>
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" alt="Tether" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">USDT</span>
                      <span className="text-xs text-gray-500">Tether</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">$1.00</td>
                <td className="px-4 py-2">TRC20</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600">⭐</button>
                </td>
              </tr>
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png" alt="Tron" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">TRX</span>
                      <span className="text-xs text-gray-500">Tron</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">$0.06</td>
                <td className="px-4 py-2">TRC20</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600">⭐</button>
                </td>
              </tr>
              {/* Add more rows for Crypto as needed */}
            </tbody>
          </table>
        ) : (
          <table className={`w-full text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <thead>
              <tr className={`bg-gray-100 border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <th className="px-4 py-2">Profile</th>
                <th className="px-4 py-2">Pair</th>
                <th className="px-4 py-2">Rate</th>
                <th className="px-4 py-2">Change</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Rows for Forex */}
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="USD" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">USD</span>
                      <span className="text-xs text-gray-500">United States Dollar</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">EUR/USD</td>
                <td className="px-4 py-2">1.1000</td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon icon={faArrowUp} className="text-green-500" />
                </td>
              </tr>
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Euro.svg/1200px-Flag_of_the_Euro.svg.png" alt="EUR" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">EUR</span>
                      <span className="text-xs text-gray-500">Euro</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">GBP/EUR</td>
                <td className="px-4 py-2">1.1500</td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon icon={faArrowDown} className="text-red-500" />
                </td>
              </tr>
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" alt="GBP" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">GBP</span>
                      <span className="text-xs text-gray-500">British Pound</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">USD/GBP</td>
                <td className="px-4 py-2">0.7500</td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon icon={faArrowUp} className="text-green-500" />
                </td>
              </tr>
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png" alt="JPY" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">JPY</span>
                      <span className="text-xs text-gray-500">Japanese Yen</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">USD/JPY</td>
                <td className="px-4 py-2">110.50</td>
                <td className="px-4 py-2 text-center">
                  <FontAwesomeIcon icon={faArrowDown} className="text-red-500" />
                </td>
              </tr>
              {/* Add more rows for Forex as needed */}
            </tbody>
          </table>
        )}
      </div>
      {/* Warning Message */}
      <div className="mt-4 flex items-center text-green-500 text-sm">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xl mr-2">
          !
        </span>
        <span>For more crpto assets,please contact us via customer support.</span>
      </div>
    </div>
  );
};

export default RateExchange;
