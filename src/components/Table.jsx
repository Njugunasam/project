// src/components/Table.jsx
import  { useState } from 'react';

const Table = () => {
  const [view, setView] = useState('Crypto');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="p-4">
      {/* Button Container */}
      <div className="flex justify-between items-center mb-4">
        {/* View Switcher */}
        <div>
          <button
            onClick={() => handleViewChange('Crypto')}
            className={`py-2 px-4 rounded-l-lg ${view === 'Crypto' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          >
            Crypto
          </button>
          <button
            onClick={() => handleViewChange('Forex')}
            className={`py-2 px-4 rounded-r-lg ${view === 'Forex' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          >
            Forex
          </button>
        </div>

        {/* Deposit and Withdraw Buttons */}
        <div>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 mr-2">
            Deposit
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400">
            Withdraw
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left font-semibold">Name</th>
              <th className="py-2 px-4 text-left font-semibold">Price</th>
              <th className="py-2 px-4 text-left font-semibold">Network</th>
              <th className="py-2 px-4 text-left font-semibold">Favorite</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 flex items-center space-x-4">
                <img
                  src="/path-to-bitcoin-logo.png"  // Replace with the path to the Bitcoin image
                  alt="Bitcoin"
                  className="h-12 w-12"
                />
                <div className="text-center">
                  <div className="text-lg font-bold">BTC</div>
                  <div className="text-sm">Bitcoin</div>
                </div>
              </td>
              <td className="py-2 px-4">$27,000</td>
              <td className="py-2 px-4">Bitcoin Network</td>
              <td className="py-2 px-4 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  ★
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 flex items-center space-x-4">
                <img
                  src="/path-to-ethereum-logo.png"  // Replace with the path to the Ethereum image
                  alt="Ethereum"
                  className="h-12 w-12"
                />
                <div className="text-center">
                  <div className="text-lg font-bold">ETH</div>
                  <div className="text-sm">Ethereum</div>
                </div>
              </td>
              <td className="py-2 px-4">$1,800</td>
              <td className="py-2 px-4">Ethereum Network</td>
              <td className="py-2 px-4 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  ★
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
