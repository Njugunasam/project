import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../ThemeContext'; // Import useTheme from your ThemeContext

const RateExchange = () => {
  const [view, setView] = useState('Crypto'); // State to toggle between Crypto and Forex
  const [selectedRow, setSelectedRow] = useState(null); // State to manage selected row
  const { isDarkMode } = useTheme(); // Consume the theme context

  const handleViewToggle = (viewType) => {
    setView(viewType);
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col space-y-2 w-[70%]">
          <h2 className="text-base font-semibold">Deposit</h2>
          <div className="border border-green-500 rounded-md flex space-x-1 max-w-max overflow-hidden">
            <button
              className={`px-4 py-2 text-xs rounded-lg border ${view === 'Crypto' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-900 text-white border-0'} hover:${view === 'Crypto' ? 'bg-green-600' : 'bg-gray-800'} transition`}
              onClick={() => handleViewToggle('Crypto')}
            >
              Crypto
            </button>
            <button
              className={`px-4 py-2 text-xs rounded-lg border ${view === 'Forex' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-900 text-white border-0'} hover:${view === 'Forex' ? 'bg-green-600' : 'bg-gray-800'} transition`}
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

        <div className="flex flex-col space-y-2 items-start w-[70%] pl-4">
          <div className="text-base font-semibold mb-2">Transaction Type</div>
          <div className="flex flex-col space-y-2 items-start">
            <div className="flex space-x-2">
              <button className={`bg-green-500 text-white px-12 py-2 text-xs rounded-lg hover:bg-green-600 transition ${isDarkMode ? 'hover:bg-green-700' : ''}`}>
                <FontAwesomeIcon icon={faArrowUp} className="slant-icon" />
                Deposit
              </button>
              <button className={`bg-gray-900 text-white px-8 py-2 text-xs rounded-lg border-2 border-red-600 hover:border-red-700 hover:bg-gray-800 transition ${isDarkMode ? 'hover:bg-gray-800' : ''}`}>
                <FontAwesomeIcon icon={faArrowDown} className="slant-icon" />
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-lg overflow-hidden shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ml-0`}>
        <div className="overflow-hidden rounded-lg max-w-[80%] mx-0">
          <table className={`w-full text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-100'}`}>
                {view === 'Crypto' ? (
                  <>
                    <th className="px-4 py-2 text-xs font-medium">Name</th>
                    <th className="px-4 py-2 text-xs font-medium">
                      Price 
                      <FontAwesomeIcon icon={faArrowUp} className="slant-icon" />
                      <FontAwesomeIcon icon={faArrowDown} className="slant-icon" />
                    </th>
                    <th className="px-4 py-2 text-xs font-medium">
                      Network 
                      <FontAwesomeIcon icon={faArrowUp} className="slant-icon" />
                      <FontAwesomeIcon icon={faArrowDown} className="slant-icon" />
                    </th>
                    <th className="px-4 py-2 text-xs font-medium">Favorite</th>
                  </>
                ) : (
                  <>
                    <th className="px-4 py-2 text-xs font-medium">Name</th>
                    <th className="px-4 py-2 text-xs font-medium">Country</th>
                    <th className="px-4 py-2 text-xs font-medium">More</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {view === 'Crypto' ? (
                ['Tether Tron Network', 'Ethereum', 'Bitcoin', 'Tron'].map((crypto, index) => (
                  <tr
                    key={crypto}
                    className={`border-b ${selectedRow === index ? 'bg-gray-700 text-white' : isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    onClick={() => handleRowClick(index)}
                  >
                    <td className="px-4 py-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <img
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${[1, 1027, 825, 1958][index]}.png`}
                          alt={crypto}
                          className="w-12 h-12 rounded-full border border-gray-300"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold">{crypto.slice(0, 3).toUpperCase()}</span>
                          <span className="text-xs text-gray-500">{crypto}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs text-yellow-500">
                      {`$${[0.99, 3559.28, 60429.29, 0.002][index]}`}
                    </td>
                    <td className="px-4 py-2 text-xs">{index % 2 === 0 ? 'TRON' : 'ETHEREUM'}</td>
                    <td className="px-4 py-2 text-xs text-center">
                      <button className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-lg hover:bg-yellow-600 transition">
                        <FontAwesomeIcon icon={faStar} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                [
                  { Name: 'FXPRIMUS', country: 'Cyprus', more: '⭐', image: 'https://imgs.search.brave.com/bynxtf6v1o4wF_U_nzG_r8iOmVNGSUiW7lApaR12MoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9laW1n/anlzLmZ4ZXllZS5j/b20vaWNvLzYzODM2/MzM2MDAxNzQxMzg5/OS9GWFQ2MzgzNjMz/NjAwMTc0MTM4OTlf/OTA4MDIyLnBuZ193/aWtpLXRlbXBsYXRl/LWdsb2JhbA' },
                  { Name: 'ICM Capital', country: 'UAE', more: '⭐', image: 'https://imgs.search.brave.com/p_y_s_4_iJo1cws-NJQoMJErjOHCTW1acCust_wYbwI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93emlt/Zy5meDY5Ni5jb20v/Z3VvamkvMjAyNC0w/My0wNS82Mzg0NTIz/ODM2Mzk3NjkzOTAv/QVJUNjM4NDUyMzgz/NjM5NzY5MzkwXzQ1/NDQyMS5qcGctYXJ0/aWNsZTU5OA' },
                  { Name: 'Perfect Money', country: 'Russia', more: '⭐', image: 'https://imgs.search.brave.com/plnYa3ulVEVTyE68m4vTsWZvWrIeBHm-UR5d8lxc8rg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmlsZXBsYW5ldC5j/b20vYW5pYy9hdC9w/ZXJmZWN0LW1vbmV5/LWFuZHJvaWQucG5n' },
                  // Add more forex profiles here with unique images
                ].map((forex, index) => (
                  <tr
                    key={forex.Name}
                    className={`border-b ${selectedRow === index ? 'bg-gray-700 text-white' : isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    onClick={() => handleRowClick(index)}
                  >
                    <td className="px-4 py-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <img
                          src={forex.image}
                          alt={forex.Name}
                          className="w-12 h-12 rounded-full border border-gray-300"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold">{forex.Name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-700">{forex.country}</td>
                    <td className="px-4 py-2 text-xs text-gray-500">{forex.more}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {view === 'Crypto' && (
        <div className="mt-4 flex items-center text-green-500 text-sm">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xl mr-2">
            !
          </span>
          <span>For more crypto assets, please contact us via customer support.</span> 
        </div>
      )}
      
    </div>
  );
};

export default RateExchange;
