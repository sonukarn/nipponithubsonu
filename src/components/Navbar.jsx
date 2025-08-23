import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger menu
import Logo from "../../public/assets/nippon-it-logo-white.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a1b3d] text-white shadow-md  w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo} // replace with Nippon IT Hub logo
            alt="Logo"
            className="h-10 w-auto md:h-12" // ⬅️ increased size
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="hover:text-blue-400 text-lg">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 text-lg">
            About Us
          </Link>
          <Link to="/service" className="hover:text-blue-400 text-lg">
            Our Services
          </Link>
          <Link to="/contact" className="hover:text-blue-400 text-lg">
            Contact Us
          </Link>
        </div>

        {/* Language Flags */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
            <img
              src="../../public/assets/en_US.png"
              alt="EN"
              className="w-6 h-4"
            />
            <span className="text-sm font-medium">EN</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
            <img
              src="../../public/assets/ja.png"
              alt="JA"
              className="w-6 h-4"
            />
            <span className="text-sm font-medium">JA</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />} {/* ⬅️ bigger icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1b3d] px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-blue-400 text-lg">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-400 text-lg">
            About Us
          </Link>
          <Link to="/services" className="block hover:text-blue-400 text-lg">
            Our Services
          </Link>
          <Link to="/contact" className="block hover:text-blue-400 text-lg">
            Contact Us
          </Link>
          <div className="flex flex-col space-y-2 pt-4">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
              <img
                src="../../public/assets/en_US.png"
                alt="EN"
                className="w-6 h-4"
              />
              <span className="text-sm font-medium">EN</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
              <img
                src="../../public/assets/ja.png"
                alt="JA"
                className="w-6 h-4"
              />
              <span className="text-sm font-medium">JA</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
