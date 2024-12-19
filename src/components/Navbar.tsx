import React from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChefHat className="h-8 w-8 text-teal-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#tokenomics" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Tokenomics</a>
                <a href="#roadmap" className="text-gray-300 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-teal-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-teal-400 transition-colors">
              Connect Wallet
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <a href="#home" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#tokenomics" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
            <a href="#roadmap" className="text-gray-300 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>
            <button className="w-full mt-4 bg-teal-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-teal-400 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;