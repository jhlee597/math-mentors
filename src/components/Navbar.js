import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, HelpCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources', icon: BookOpen },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return location.pathname === '/' && href.includes(location.hash);
    return location.pathname === href;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
              <span className="text-gray-900 font-bold text-xl">MM</span>
            </div>
            <span className="text-xl font-semibold">Math Mentors</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link font-medium flex items-center space-x-2 ${
                  isActive(item.href) ? 'text-cyan-400' : ''
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`nav-link font-medium flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-gray-800 ${
                  isActive(item.href) ? 'text-cyan-400 bg-gray-800' : ''
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;