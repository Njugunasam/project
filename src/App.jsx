import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Market from './pages/Market';
import Transactions from './pages/Transactions';
import Exchange from './pages/Exchange';
import Deposit from './pages/Deposit';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext'; // Import useTheme from your ThemeContext

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode } = useTheme(); // Consume the theme context

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Update body class based on theme
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  // Define the width of the sidebar
  const sidebarWidth = 64; // Adjust if necessary

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Navbar className="fixed top-0 left-0 w-full z-40" />
        <div className="flex flex-1 pt-16 pb-16">
          <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar} 
            className={`fixed top-16 bottom-16 left-0 z-30 w-${sidebarWidth}`} 
          />
          <main className={`flex-1 ${isSidebarOpen ? `ml-${sidebarWidth}` : 'ml-0'} p-4 md:p-6`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/market" element={<Market />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Footer className="fixed bottom-0 left-0 w-full z-40" />
      </div>
    </Router>
  );
};

export default App;
