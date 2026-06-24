import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const navLinks = [
  { name: 'Explore', path: '/' },
  { name: 'Itineraries', path: '/itineraries' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Concierge', path: '/concierge' },
];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 md:px-12 flex items-center justify-between">
      {/* Left side: Logo & Navigation Links */}
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <div className="text-[#006A61] font-bold text-2xl tracking-tight cursor-pointer">
          Planner
        </div>

      

        <div className="hidden md:flex items-center space-x-8">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className="text-base font-medium text-gray-500 hover:text-[#006A61] transition-colors duration-200"
    >
      {link.name}
    </Link>
  ))}
</div>
      </div>


      <div className="flex items-center space-x-6">
        <Link
          to="/register"
          className="text-gray-600 font-medium hover:text-[#006A61] transition-colors duration-200"
        >
          Sign In
        </Link>
        <button className="bg-[#006A61] hover:bg-[#00544d] text-white px-6 py-2.5 rounded-full font-medium tracking-wide transition-all duration-200 shadow-sm">
          Plan Trip
        </button>
      </div>
    </nav>
  );
};

export default Navbar;