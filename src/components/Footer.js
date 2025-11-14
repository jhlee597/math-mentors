import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const resourceLinks = [
    { name: 'Problem Sets', href: '#' },
    { name: 'Mini-Guides', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Study Tips', href: '#' },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                <span className="text-gray-900 font-bold">MM</span>
              </div>
              <span className="font-semibold text-lg">Math Mentors</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Mathematics made by students, for students
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              Join our community of math enthusiasts
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-200 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Math Mentors Club — Built by Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;