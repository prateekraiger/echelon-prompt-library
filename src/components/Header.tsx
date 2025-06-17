
import React, { useState } from 'react';
import { Search, Settings, Users, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="ml-2 text-xl font-bold text-white">EchelonPrompts</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#library" className="text-slate-300 hover:text-white transition-colors">Library</a>
            <a href="#templates" className="text-slate-300 hover:text-white transition-colors">Templates</a>
            <a href="#analytics" className="text-slate-300 hover:text-white transition-colors">Analytics</a>
            <a href="#docs" className="text-slate-300 hover:text-white transition-colors">Docs</a>
          </nav>
          
          {/* Desktop Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search templates..."
                className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 lg:w-64"
              />
            </div>
            <button className="text-slate-300 hover:text-white transition-colors p-2">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors p-2">
              <Users className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation */}
              <a href="#library" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                Library
              </a>
              <a href="#templates" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                Templates
              </a>
              <a href="#analytics" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                Analytics
              </a>
              <a href="#docs" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                Docs
              </a>

              {/* Mobile Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-4">
                <div className="flex space-x-2">
                  <button className="text-slate-300 hover:text-white transition-colors p-2">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="text-slate-300 hover:text-white transition-colors p-2">
                    <Users className="w-5 h-5" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
