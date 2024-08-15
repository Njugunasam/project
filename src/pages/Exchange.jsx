import React, { useState } from 'react';
import { useTheme } from '..//ThemeContext'; // Import useTheme from your ThemeContext

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

        {/* Right Side: Deposit and Withdraw Buttons */}
        <div className="flex flex-col space-y-2 items-start w-[50%] pl-0">
          <div className="text-xl font-semibold mb-2">Transaction Type</div>
          <div className="flex space-x-2">
            <button className={`bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600 ${isDarkMode ? 'hover:bg-green-700' : ''}`}>Deposit</button>
            <button className={`bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ${isDarkMode ? 'hover:bg-red-700' : ''}`}>Withdraw</button>
          </div>
        </div>
      </div>

      {/* Main Container for Table */}
      <div className={`border border-gray-200 rounded-lg shadow-md p-4 w-[70%] ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {view === 'Crypto' ? (
          <table className={`w-full text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <thead>
              <tr className={`bg-gray-100 border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <th className="px-4 py-2">Profile</th>
                <th className="px-4 py-2">Name</th>
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
                    <img src="/path/to/crypto-pic.jpg" alt="Bitcoin" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">BTC</span>
                      <span className="text-xs text-gray-500">Bitcoin</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">Bitcoin</td>
                <td className="px-4 py-2">$25,000</td>
                <td className="px-4 py-2">BTC Network</td>
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
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Network</th>
                <th className="px-4 py-2">Favorite</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Rows for Forex */}
              <tr className={`border-b border-gray-200 ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img src="/path/to/forex-pic.jpg" alt="EUR/USD" className="w-12 h-12 rounded-full border border-gray-300" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">EUR/USD</span>
                      <span className="text-xs text-gray-500">Euro/US Dollar</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">EUR/USD</td>
                <td className="px-4 py-2">$1.12</td>
                <td className="px-4 py-2">Forex Market</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600">⭐</button>
                </td>
              </tr>
              {/* Add more rows for Forex as needed */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RateExchange;
