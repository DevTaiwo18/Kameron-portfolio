import React, { useState } from 'react';
import icon from "./../assets/Black Simple Personal Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f8f5f2] shadow-sm py-4 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={icon} alt="Kameron Seabrook Logo" className="w-10 h-10 mr-3" />
          <h1 className="text-xl font-medium text-[#232946] font-['Playfair_Display']">Kameron Seabrook</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-['Poppins']">
            <li><a href="#about" className="text-[#5f6c7b] hover:text-[#094067] transition-colors">About</a></li>
            <li><a href="#experience" className="text-[#5f6c7b] hover:text-[#094067] transition-colors">Experience</a></li>
            <li><a href="#education" className="text-[#5f6c7b] hover:text-[#094067] transition-colors">Education</a></li>
            <li><a href="#contact" className="text-[#5f6c7b] hover:text-[#094067] transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#232946] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // X icon for close
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon for open
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f8f5f2] py-4 px-4 shadow-inner">
          <nav>
            <ul className="flex flex-col space-y-4 font-['Poppins']">
              <li><a href="#about" className="block text-[#5f6c7b] hover:text-[#094067] transition-colors" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" className="block text-[#5f6c7b] hover:text-[#094067] transition-colors" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#education" className="block text-[#5f6c7b] hover:text-[#094067] transition-colors" onClick={toggleMenu}>Education</a></li>
              <li><a href="#contact" className="block text-[#5f6c7b] hover:text-[#094067] transition-colors" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;