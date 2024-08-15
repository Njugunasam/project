import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 
import { IoLocationSharp } from 'react-icons/io5'; 

const Logo = () => (
  <div className="flex flex-col items-center mb-4">
    <span className="text-3xl md:text-4xl font-bold text-green-500 mb-1">OMAYA</span>
    <span className="text-xs md:text-sm font-bold text-white mt-1 ml-2">EXCHANGE</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto w-full flex flex-col items-center z-30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Follow Us */}
        <div className="flex flex-col items-center">
          <Logo />
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebookF className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">Support Centre</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Our Partners</a>
            </li>
            <li>
              <a href="#" className="hover:underline">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
          </ul>
        </div>

        {/* Legal Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal Policies</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cookie Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Disclaimer Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Payment Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="w-5 h-5" />
              <a href="tel:+123456789" className="hover:underline">+123456789</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="w-5 h-5 text-green-500" />
              <a href="https://wa.me/+123456789" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="w-5 h-5" />
              <a href="mailto:info@example.com" className="hover:underline">info@OMAYAExpress.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <IoLocationSharp className="w-5 h-5" />
              <span>KM4, Mogadishu, Somalia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>Copyright &copy; {new Date().getFullYear()} OMAYA.io</p>
      </div>
    </footer>
  );
};

export default Footer;
