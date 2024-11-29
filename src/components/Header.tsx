import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/50 backdrop-blur-sm z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-white">Hernán</span>
          <div className="flex gap-4">
            <a href="https://github.com/abouthernan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/abouthernan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abouthernan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:h@vehement.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}