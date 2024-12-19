import React from 'react';
import { motion } from 'framer-motion';
import CoinModel from './3d/CoinModel';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="text-teal-500">LethimCook</span>
            <br />
            The Future of Culinary Finance
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            The first cryptocurrency that brings the world of cooking and blockchain together.
            Built on Solana for lightning-fast transactions and minimal fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-teal-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-teal-400 transition-colors">
              Buy $COOK
            </button>
            <button className="border border-teal-500 text-teal-500 px-8 py-3 rounded-full font-semibold hover:bg-teal-500 hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 h-[500px] w-full mt-8 md:mt-0"
        >
          <CoinModel />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;