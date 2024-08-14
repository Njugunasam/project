// src/components/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Press</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Blog</a>
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
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:info@example.com" className="hover:underline">Email Us</a>
            </li>
            <li>
              <a href="tel:+123456789" className="hover:underline">Call Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Support Center</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Live Chat</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
