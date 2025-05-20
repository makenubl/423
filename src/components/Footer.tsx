import React, { useState } from 'react';
import { ShieldCheck, Mail, Globe } from 'lucide-react';
import Button from './Button';
import DemoRequestModal from './DemoRequestModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <ShieldCheck className="text-teal-400 w-7 h-7 mr-2" />
              <span className="text-xl font-bold">SAM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Seamless Authentication Module - The future of secure, frictionless authentication.
            </p>
            <Button 
              variant="secondary" 
              size="md"
              className="group bg-white text-teal-900 hover:bg-teal-50"
              onClick={() => setIsModalOpen(true)}
            >
              Request a Demo
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-teal-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="text-teal-400 w-5 h-5 mr-3" />
                <a href="mailto:contact@bluetidetech.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  contact@bluetidetech.com
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="text-teal-400 w-5 h-5 mr-3" />
                <a href="http://www.bluetide.tech" className="text-gray-400 hover:text-teal-400 transition-colors">
                  www.bluetide.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Blue Tide Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;