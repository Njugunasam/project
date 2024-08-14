import { useState } from 'react';

const Table = () => {
  const [view, setView] = useState('Crypto');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  // Example data for Crypto and Forex views
  const data = {
    Crypto: [
      {
        name: 'BTC',
        displayName: 'Bitcoin',
        price: '$27,000',
        network: 'Bitcoin Network',
        imgSrc: '/path-to-bitcoin-logo.png'
      },
      {
        name: 'ETH',
        displayName: 'Ethereum',
        price: '$1,800',
        network: 'Ethereum Network',
        imgSrc: '/path-to-ethereum-logo.png'
      }
    ],
    Forex: [
      // Example Forex data
      {
        name: 'USD/EUR',
        displayName: 'USD to EUR',
        price: '0.85',
        network: 'Forex Network',
        imgSrc: '/path-to-usd-eur-logo.png'
      },
      {
        name: 'USD/JPY',
        displayName: 'USD to JPY',
        price: '110.00',
        network: 'Forex Network',
        imgSrc: '/path-to-usd-jpy-logo.png'
      }
    ]
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
            {data[view].map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 flex items-center space-x-4">
                  <img
                    src={item.imgSrc}  // Path to the image based on data
                    alt={item.name}
                    className="h-12 w-12"
                  />
                  <div className="text-center">
                    <div className="text-lg font-bold">{item.name}</div>
                    <div className="text-sm">{item.displayName}</div>
                  </div>
                </td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4">{item.network}</td>
                <td className="py-2 px-4 text-center">
                  <button className="text-blue-500 hover:text-blue-700" aria-label={`Favorite ${item.name}`}>
                    ★
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
