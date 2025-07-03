import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="w-8 h-8 bg-xinhai-blue transform rotate-45"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-xinhai-blue-light transform rotate-45 translate-x-2"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">XINHAI</span>
                <span className="text-xs text-gray-400">鑫海咨询</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional consulting services for Chinese businesses in Uganda. 
              Your trusted partner for business success.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-xinhai-blue-light" />
                <span>Nakawa Global, Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-xinhai-blue-light" />
                <span>+256 774 964 XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-xinhai-blue-light" />
                <span>info@xinhai-consulting.com</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Company Registration</li>
              <li className="hover:text-white transition-colors cursor-pointer">Tax Advisory</li>
              <li className="hover:text-white transition-colors cursor-pointer">Investment Consulting</li>
              <li className="hover:text-white transition-colors cursor-pointer">Business Operations</li>
              <li className="hover:text-white transition-colors cursor-pointer">Legal Compliance</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Xinhai Consultancy Co. Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;