import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          ShopZone
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-blue-800 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <Link to="/deals" className="hover:text-blue-600 transition">Deals</Link>
        </nav>

        {/* Cart */}
        <Link to="/cart" className="relative group">
          <FaShoppingCart className="text-2xl text-blue-800 group-hover:text-blue-600 transition" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
