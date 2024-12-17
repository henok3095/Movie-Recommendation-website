import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center bg-black bg-opacity-85 px-8 py-6 fixed top-0 w-full z-50 shadow-lg">
    {/* Logo */}
    <div className="text-3xl font-bold text-pink-400 cursor-pointer">
      Film<span className="text-white">Haven</span>
    </div>

    {/* Navigation Links */}
    <nav className="flex space-x-8 text-lg font-poppins">
      <a href="/" className="text-white hover:text-pink-400 transition">
        Home
      </a>
      <a href="/profile" className="text-white hover:text-pink-400 transition">
        Profile
      </a>
      <a href="/history" className="text-white hover:text-pink-400 transition">
        History
      </a>
    </nav>
  </header>
);

export default Header;
