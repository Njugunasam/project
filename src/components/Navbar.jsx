// src/components/Navbar.jsx

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/path-to-your-logo.png"  // Replace with the path to your logo image
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">
            <span className="uppercase">E</span>
            <span className="text-yellow-500 uppercase">X</span>
            <span className="uppercase">CHANGE</span>
          </span> 
          {/* Updated name with styled 'X' */}
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-400 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Market</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Rates</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Blog</a>
        </div>

        {/* Button and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Deposit Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
            Deposit
          </button>

          {/* Profile Section */}
          <img
            src="/path-to-profile-image.png"  // Replace with the path to the profile image
            alt="Profile"
            className="h-8 w-8 rounded-full border-2 border-gray-700"
          />
          <span>Account</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
