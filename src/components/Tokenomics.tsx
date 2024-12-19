import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Wallet, Users, Rocket } from 'lucide-react';

const TokenomicsCard = ({ icon: Icon, title, percentage, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-xl"
  >
    <Icon className="w-12 h-12 text-teal-500 mb-4" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-3xl font-bold text-teal-500 mb-2">{percentage}%</p>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-400 text-lg">Understanding $COOK distribution and utility</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TokenomicsCard
            icon={PieChart}
            title="Public Sale"
            percentage={40}
            description="Available for public trading and liquidity"
          />
          <TokenomicsCard
            icon={Wallet}
            title="Team & Development"
            percentage={20}
            description="Reserved for team and future development"
          />
          <TokenomicsCard
            icon={Users}
            title="Community Rewards"
            percentage={25}
            description="Staking rewards and community initiatives"
          />
          <TokenomicsCard
            icon={Rocket}
            title="Marketing"
            percentage={15}
            description="Marketing and partnership opportunities"
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;