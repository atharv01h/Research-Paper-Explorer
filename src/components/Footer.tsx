import React from 'react';
import { Github, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-gray-600">
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="https://github.com/atharv01h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/atharv_hatwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-center">
            Created with ❤️ by Atharv Hatwar
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;