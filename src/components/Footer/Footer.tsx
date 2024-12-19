import React from 'react';
import { ChefHat } from 'lucide-react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-teal-500" />
              <span className="text-xl font-bold text-white">LethimCook</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing the intersection of culinary arts and cryptocurrency on the Solana blockchain.
            </p>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <li><a href="#home" className="text-gray-400 hover:text-teal-500 transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-teal-500 transition-colors">About</a></li>
            <li><a href="#tokenomics" className="text-gray-400 hover:text-teal-500 transition-colors">Tokenomics</a></li>
            <li><a href="#community" className="text-gray-400 hover:text-teal-500 transition-colors">Community</a></li>
          </FooterSection>

          {/* Resources */}
          <FooterSection title="Resources">
            <li><FooterLink href="#">Documentation</FooterLink></li>
            <li><FooterLink href="#">Whitepaper</FooterLink></li>
            <li><FooterLink href="#">Token Contract</FooterLink></li>
            <li><FooterLink href="#">Media Kit</FooterLink></li>
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            <li><FooterLink href="#">Terms of Service</FooterLink></li>
            <li><FooterLink href="#">Cookie Policy</FooterLink></li>
            <li><FooterLink href="#">Disclaimer</FooterLink></li>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} LethimCook. All rights reserved.
            </p>
            <div className="flex gap-4">
              <FooterLink href="#">
                <img src="https://solana.com/src/img/branding/solanaLogoMark.svg" alt="Powered by Solana" className="h-6" />
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;