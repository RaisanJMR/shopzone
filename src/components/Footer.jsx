import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay,
  FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ShopZone</h3>
          <p>
            ShopZone brings together the best in fashion, electronics, and home products under one roof.
            Trust, quality, and affordability define us.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white" />
            </a>

          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
            <li><Link to="/returns" className="hover:text-white transition">Returns</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition">Shipping Info</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/account" className="hover:text-white transition">My Account</Link></li>
            <li><Link to="/track-order" className="hover:text-white transition">Track Order</Link></li>
            <li><Link to="/gift-cards" className="hover:text-white transition">Gift Cards</Link></li>
            <li><Link to="/affiliate" className="hover:text-white transition">Affiliate Program</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Newsletter</h3>
          <p>Get weekly updates on hot deals and new arrivals.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition"
            />
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>


        {/* Download Our App */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Get Our App</h3>
          <p>Experience smooth shopping on the go.</p>
          <div className="flex flex-col gap-2 mt-3">
            <button className="flex items-center gap-2 bg-black px-4 py-2 rounded hover:bg-gray-800">
              <FaApple /> <span>App Store</span>
            </button>
            <button className="flex items-center gap-2 bg-black px-4 py-2 rounded hover:bg-gray-800">
              <FaGooglePlay /> <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>

      {/* Business info and payments */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-gray-400">
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Business Inquiries</h4>
          <p>Interested in partnering with ShopZone? Email: <a href="mailto:business@shopzone.com" className="text-blue-400">business@shopzone.com</a></p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Secure Payments</h4>
          <div className="flex items-center gap-4 text-2xl mt-1">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-2">
          <p>© {new Date().getFullYear()} ShopZone. All rights reserved.</p>
          <div className="flex gap-4">
            <span>🌐 English</span>
            <span>₹ INR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
