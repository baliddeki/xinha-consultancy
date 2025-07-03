import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationProps, NavigationItem } from '@/types/navigation';

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavigationItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'businesses', label: 'Businesses' },
    { id: 'events', label: 'Events' }
  ];

  const handleNavigationClick = (pageId: string) => {
    setCurrentPage(pageId as any);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-xinhai-blue transform rotate-45"></div>
              <div className="absolute top-0 left-0 w-8 h-8 bg-xinhai-blue-light transform rotate-45 translate-x-2"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">XINHAI</span>
              <span className="text-xs text-gray-600">鑫海咨询</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigationClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-xinhai-blue border-b-2 border-xinhai-blue'
                    : 'text-gray-700 hover:text-xinhai-blue'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigationClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-xinhai-blue bg-blue-50'
                    : 'text-gray-700 hover:text-xinhai-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
